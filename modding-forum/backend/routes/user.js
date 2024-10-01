const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = 'your-secret-key'; 

// Konfiguracja nodemailer 
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// Rejestracja
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generowanie tokenu potwierdzenia
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

    // Tworzenie linku potwierdzającego
    const confirmationLink = `http://localhost:3000/confirm-email?token=${verificationToken}`;

    // Wysyłanie e-maila z linkiem potwierdzającym
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: email,
      subject: 'Confirm your email',
      html: `
        <h1>Email Confirmation</h1>
        <p>Thank you for registering. Please confirm your email by clicking the link below:</p>
        <a href="${confirmationLink}">Confirm Email</a>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send('User registered. Please check your email to confirm.');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Potwierdzanie e-maila
router.get('/confirm-email', async (req, res) => {
  const { token } = req.query;
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Znajdowanie użytkownika po tokenie
    const user = await User.findByVerificationToken(token);
    if (!user) return res.status(400).send('Invalid token or user not found.');

    // Aktualizacja statusu potwierdzenia
    await User.updateVerificationStatus(user.id);

    res.status(200).send('Email confirmed successfully!');
  } catch (err) {
    res.status(400).send('Invalid or expired token.');
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP connection failed:', error);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Logowanie
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.findByEmail(email);
    if (users.length === 0) return res.status(404).send('User not found');
    const user = users[0];
    
    if (!user.isVerified) return res.status(401).send('Please confirm your email first.');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send('Invalid password');
    
    res.send('User logged in');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
