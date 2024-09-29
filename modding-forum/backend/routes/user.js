// backend/routes/user.js

const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const router = express.Router();

// Rejestracja
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Logowanie
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const users = await User.findByEmail(email);
    if (users.length === 0) return res.status(404).send('User not found');
    const user = users[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).send('Invalid password');
    res.send('User logged in');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
