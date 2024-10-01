const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = 'your-secret-key';

// Konfiguracja nodemailer
const transporter = nodemailer.createTransport({
  service: 'WP',
  auth: {
    user: 'twoj-email@wp.pl', // Twój adres e-mail
    pass: 'twoje-haslo' // Twoje hasło
  }
});

// Rejestracja użytkownika
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log('Rejestracja:', { username, email });  // Logowanie danych z rejestracji

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generowanie tokenu potwierdzającego
    const verificationToken = jwt.sign(
      { email: email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Tworzenie nowego użytkownika
    await User.create({
      username,
      email,
      password: hashedPassword,
      verificationToken
    });

    console.log('Użytkownik utworzony. Token weryfikacyjny:', verificationToken);

    // Tworzenie linku potwierdzającego
    const confirmationLink = `http://localhost:3000/confirm-email?token=${verificationToken}`;

    // Wysyłanie e-maila potwierdzającego
    const mailOptions = {
      from: 'twoj-email@wp.pl',  // Twój adres e-mail
      to: email,
      subject: 'Confirm your email',
      html: `
        <h1>Email Confirmation</h1>
        <p>Thank you for registering. Please confirm your email by clicking the link below:</p>
        <a href="${confirmationLink}">Confirm Email</a>
      `
    };

    // Testowanie i wysyłanie e-maila
    await transporter.sendMail(mailOptions);
    console.log('E-mail potwierdzający wysłany do:', email);

    res.status(201).send('User registered. Please check your email to confirm.');
  } catch (err) {
    console.error('Błąd podczas rejestracji:', err);
    res.status(500).send('Registration failed: ' + err.message);
  }
});

module.exports = router;
