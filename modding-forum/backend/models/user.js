const db = require('../db');
const { promisify } = require('util');

const queryAsync = promisify(db.query).bind(db);

const User = {
  create: async (userData) => {
    const sql = 'INSERT INTO users (email, verificationToken) VALUES (?, ?)';
    await queryAsync(sql, [userData.email, userData.verificationToken]);
  },
  updateCredentials: async (email, username, hashedPassword) => {
    const sql = 'UPDATE users SET username = ?, password = ?, isVerified = true WHERE email = ?';
    await queryAsync(sql, [username, hashedPassword, email]);
  },
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await queryAsync(sql, [email]);
    return results;
  },
  findByVerificationToken: async (token) => {
    const sql = 'SELECT * FROM users WHERE verificationToken = ?';
    const results = await queryAsync(sql, [token]);
    return results[0];
  }
};

module.exports = User;
