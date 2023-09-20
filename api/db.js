const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root@12345678',
  database: 'pet-safe'
});

// Você não precisa mais da função db.connect

module.exports = db;