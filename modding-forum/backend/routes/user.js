const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = 'your-secret-key';

// Konfiguracja dynamiczna dla nodemailer
const getTransporter = (email) => {
  let emailDomain = email.split('@')[1].split('.')[0]; // Wydobywanie domeny z adresu e-mail
  const emailServices = {
    wp: {
      host: 'smtp.wp.pl',
      port: 465,
      secure: true,
      auth: {
        user: 'noreply@wp.pl', // Dodaj swoje dane do testów lub konto wysyłające e-maile
        pass: 'password', // Hasło
      },
    },
    gmail: {
      service: 'gmail',
      auth: {
        user: 'noreply@gmail.com', // Dodaj swoje dane do testów lub konto wysyłające e-maile
        pass: 'password',
      },
    },
    yahoo: {
      service: 'yahoo',
      auth: {
        user: 'noreply@yahoo.com', // Dodaj swoje dane do testów lub konto wysyłające e-maile
        pass: 'password',
      },
    },
    // Dodaj więcej konfiguracji dla innych popularnych dostawców
  };
  return nodemailer.createTransport(emailServices[emailDomain] || emailServices.gmail); // Domyślnie Gmail
};

// Rejestracja użytkownika
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generowanie tokenu potwierdzającego
    const verificationToken = jwt.sign({ email: email }, JWT_SECRET, {
      expiresIn: '1h',
    });

    // Tworzenie nowego użytkownika z tokenem weryfikacyjnym
    await User.create({
      username,
      email,
      password: hashedPassword,
      verificationToken,
    });

    // Tworzenie linku potwierdzającego
    const confirmationLink = `http://localhost:3000/confirm-email?token=${verificationToken}`;

    // Wysyłanie e-maila potwierdzającego
    const transporter = getTransporter(email); // Dynamiczne ustawienie transportera na podstawie e-maila użytkownika
    const mailOptions = {
      from: 'noreply@example.com', // Wpisz ogólny adres wysyłający
      to: email,
      subject: 'Confirm your email',
      html: `
        <h1>Email Confirmation</h1>
        <p>Thank you for registering. Please confirm your email by clicking the link below:</p>
        <a href="${confirmationLink}">Confirm Email</a>
      `,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error while sending email:', error);
        return res.status(500).send('Error sending confirmation email: ' + error.message);
      }
      console.log('Email sent: ' + info.response);
    });

    res.status(201).send('User registered. Please check your email to confirm.');
  } catch (err) {
    res.status(500).send('Registration failed: ' + err.message);
  }
});

// Potwierdzanie e-maila użytkownika
router.get('/confirm-email', async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Znajdowanie użytkownika po tokenie
    const user = await User.findByVerificationToken(token);
    if (!user) return res.status(400).send('Invalid token or user not found.');

    // Aktualizacja statusu potwierdzenia e-maila
    await User.updateVerificationStatus(user.id);

    res.status(200).send('Email confirmed successfully!');
  } catch (err) {
    res.status(400).send('Invalid or expired token: ' + err.message);
  }
});

module.exports = router;
