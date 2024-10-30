// backend/routes/user.js

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { google } = require('google-auth-library');
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Funkcja konfiguracji klienta OAuth2
function getOAuth2Client() {
  const oAuth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    process.env.GMAIL_REDIRECT_URI
  );

  oAuth2Client.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  return oAuth2Client;
}

// Konfiguracja SMTP dla różnych dostawców
async function getSmtpConfig(email) {
  const domain = email.split('@')[1];

  if (domain === 'gmail.com') {
    const oAuth2Client = getOAuth2Client();
    const accessToken = await oAuth2Client.getAccessToken();
    
    return {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: accessToken.token, // Pobierz token dostępu
      },
    };
  } else if (domain === 'wp.pl') {
    return {
      host: 'smtp.wp.pl',
      port: 587,
      secure: false,
      auth: {
        user: process.env.WP_USER,
        pass: process.env.WP_PASS,
      },
    };
  } else {
    throw new Error('Unsupported email provider');
  }
}

// Rejestracja użytkownika - tylko e-mail
router.post('/register', async (req, res) => {
  const { email } = req.body;
  try {
    const verificationToken = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    await User.create({ email, verificationToken });

    const confirmationLink = `http://localhost:3000/set-credentials?token=${verificationToken}`;
    const transporter = nodemailer.createTransport(await getSmtpConfig(email));

    const mailOptions = {
      from: 'noreply@yourapp.com',
      to: email,
      subject: 'Confirm your email',
      html: `<h1>Email Confirmation</h1><p>Click <a href="${confirmationLink}">here</a> to set your username and password.</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Please check your email to confirm.' });
  } catch (err) {
    console.error("Error during registration:", err); // Logowanie błędu w terminalu
    res.status(500).json({ message: err.message });
  }
});

// Ustawianie nazwy użytkownika i hasła
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
