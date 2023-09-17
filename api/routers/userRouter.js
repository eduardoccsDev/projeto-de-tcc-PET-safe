const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe o módulo do banco de dados
const bcrypt = require('bcrypt');

// Rota para listar todos os usuários
router.get('/users', (req, res) => {
    // Use o módulo do banco de dados para fazer a consulta
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Erro na consulta SQL:', err);
            res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
            res.json(results);
        }
    });
});
router.post('/register', async (req, res) => {
    const { nomeuser, emailuser, passworduser } = req.body;
  
    // Verifique se o email já está em uso (opcional)
  
    // Hash a senha
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passworduser, saltRounds);
  
    // Insira o novo usuário no banco de dados
    const insertUserQuery = 'INSERT INTO users (nomeuser, emailuser, passworduser) VALUES (?, ?, ?)';
    db.query(insertUserQuery, [nomeuser, emailuser, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('Usuário registrado com sucesso');
        res.json({ message: 'Usuário registrado com sucesso' });
      }
    });
  });
// Resto das rotas

module.exports = router;