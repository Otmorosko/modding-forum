// backend/models/user.js

const db = require('../db');
const { promisify } = require('util');

const queryAsync = promisify(db.query).bind(db);

const User = {
  create: async (userData) => {
    const sql = 'INSERT INTO users (email, verificationToken) VALUES (?, ?)';
    await queryAsync(sql, [userData.email, userData.verificationToken]);
  },
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await queryAsync(sql, [email]);
    return results[0];
  },
  updateCredentials: async (email, username, password) => {
    const sql = 'UPDATE users SET username = ?, password = ? WHERE email = ?';
    await queryAsync(sql, [username, password, email]);
  }
};

module.exports = User;
