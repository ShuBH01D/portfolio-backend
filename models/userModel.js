const db = require('../config/db');

const User = {
    getAll: (callback) => db.query('SELECT * FROM users', callback),
    create: (data, callback) => db.query('INSERT INTO users (name, email) VALUES (?, ?)', [data.name, data.email], callback)
};

module.exports = User;
