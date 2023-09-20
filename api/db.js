const mysql = require('mysql2');
const dotenv = require('dotenv'); // Para carregar variáveis de ambiente

// Carregar variáveis de ambiente do arquivo .env (certifique-se de criar este arquivo)
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10, // Número máximo de conexões simultâneas
});

module.exports = db;