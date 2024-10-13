// backend/routes/user.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Konfiguracja SMTP dla różnych dostawców
function getSmtpConfig(email) {
  const domain = email.split('@')[1];

  if (domain === 'gmail.com') {
    return {
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Dane z .env
        pass: process.env.GMAIL_PASS // Dane z .env
      }
    };
  } else if (domain === 'wp.pl') {
    return {
      host: 'smtp.wp.pl',
      port: 587,
      secure: false,
      auth: {
        user: process.env.WP_USER, // Dane z .env
        pass: process.env.WP_PASS // Dane z .env
      }
    };
  } else {
    throw new Error('Unsupported email provider');
  }
}

// Rejestracja użytkownika
router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    await User.create({ email, verificationToken });

    const confirmationLink = `http://localhost:3000/set-credentials?token=${verificationToken}`;
    
    // Pobieranie konfiguracji SMTP na podstawie domeny e-mail
    const transporter = nodemailer.createTransport(getSmtpConfig(email));

    const mailOptions = {
      from: 'noreply@yourapp.com', // Stały adres nadawcy
      to: email,
      subject: 'Confirm your email',
      html: `<h1>Email Confirmation</h1><p>Click <a href="${confirmationLink}">here</a> to set your username and password.</p>`
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Please check your email to confirm.' });
  } catch (err) {
    console.error("Error during registration:", err); // Logowanie błędu w terminalu
    res.status(500).json({ message: err.message });
  }
});

// Aktualizacja danych użytkownika (ustawianie nazwy i hasła)
router.post('/set-credentials', async (req, res) => {
  const { token, username, password } = req.body;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.updateCredentials(decoded.email, username, hashedPassword);
    res.status(200).json({ message: 'Credentials set successfully.' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid or expired token.' });
  }
});

module.exports = router;
