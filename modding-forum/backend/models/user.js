// backend/models/user.js

const db = require('../db');
const { promisify } = require('util');

const queryAsync = promisify(db.query).bind(db);

const User = {
  create: async (userData) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    await queryAsync(sql, [userData.username, userData.email, userData.password]);
  },
  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const results = await queryAsync(sql, [email]);
    return results;
  }
};

module.exports = User;
