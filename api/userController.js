const mysql = require('mysql2/promise'); // Importe o pacote mysql2
const db = require('./db'); // Importe o módulo do banco de dados

// Função para buscar os dados do usuário pelo ID
const getUserById = async (userId) => {
    try {
      // Crie uma conexão com o banco de dados
      const connection = await mysql.createConnection(db);
  
      // Consulta SQL para buscar o usuário pelo ID
      const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [userId]);
  
      // Feche a conexão com o banco de dados
      await connection.end();
  
      // Verifique se algum usuário foi encontrado
      if (rows.length === 1) {
        return rows[0]; // Retorna os dados do usuário encontrado
      } else {
        return null; // Retorna null se nenhum usuário for encontrado
      }
    } catch (error) {
      console.error('Erro ao buscar usuário pelo ID:', error);
      throw error; // Lança o erro para que ele possa ser tratado na rota
    }
  };
  
  module.exports = { getUserById };