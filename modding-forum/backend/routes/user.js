const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const transporter = require('../smtpConfig'); // Importujemy transporter z configu
const User = require('../models/user');
const router = express.Router();

const JWT_SECRET = 'twoj-sekret';

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const verificationToken = jwt.sign(
      { email: email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    await User.create({
      username,
      email,
      password: hashedPassword,
      verificationToken
    });

    const confirmationLink = `http://localhost:3000/confirm-email?token=${verificationToken}`;

    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: email,
      subject: 'Potwierdź swój e-mail',
      html: `<h1>Potwierdzenie e-maila</h1><p>Kliknij poniższy link, aby potwierdzić:</p><a href="${confirmationLink}">Potwierdź e-mail</a>`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).send('Użytkownik zarejestrowany. Sprawdź swój e-mail, aby potwierdzić.');
  } catch (err) {
    res.status(500).send('Błąd rejestracji: ' + err.message);
  }
});

module.exports = router;
