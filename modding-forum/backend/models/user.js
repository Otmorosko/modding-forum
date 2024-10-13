const db = require('../db');
const { promisify } = require('util');

const queryAsync = promisify(db.query).bind(db);

const User = {
  create: async (userData) => {
    const sql = 'INSERT INTO users (username, email, password, isVerified, verificationToken) VALUES (?, ?, ?, ?, ?)';
    await queryAsync(sql, [userData.username, userData.email, userData.password, false, userData.verificationToken]);
  },
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await queryAsync(sql, [email]);
    return results;
  },
  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const results = await queryAsync(sql, [id]);
    return results[0];
  },
  updateVerificationStatus: async (userId) => {
    const sql = 'UPDATE users SET isVerified = true WHERE id = ?';
    await queryAsync(sql, [userId]);
  },
  findByVerificationToken: async (token) => {
    const sql = 'SELECT * FROM users WHERE verificationToken = ?';
    const results = await queryAsync(sql, [token]);
    return results[0];
  }
};

module.exports = User;
