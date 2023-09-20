const express = require('express');
const router = express.Router();
const db = require('./db'); // Importe a configuração do banco de dados
const bcrypt = require('bcrypt');

// Defina suas rotas aqui
router.get('/users', (req, res) => {
  // Execute consultas no banco de dados usando db.query
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      res.json(results);
    }
  });
});

router.post('/register', (req, res) => {
    const { nomeuser, emailuser, passworduser, addressuser } = req.body;
  
    // Verifique se o email já está cadastrado
    const checkEmailQuery = 'SELECT * FROM users WHERE emailuser = ?';
    db.query(checkEmailQuery, [emailuser], (checkErr, checkResults) => {
      if (checkErr) {
        console.error('Erro ao verificar email:', checkErr);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else if (checkResults.length > 0) {
        // Se o email já estiver cadastrado, retorne um erro
        res.status(400).json({ error: 'Email já cadastrado' });
      } else {
        // Realize a hash da senha
        bcrypt.hash(passworduser, 10, (hashErr, hashedPassword) => {
          if (hashErr) {
            console.error('Erro ao criar hash da senha:', hashErr);
            res.status(500).json({ error: 'Erro interno do servidor' });
          } else {
            // Insira o novo usuário no banco de dados com a senha hasheada
            const insertUserQuery = 'INSERT INTO users (nomeuser, emailuser, passworduser, addressuser) VALUES (?, ?, ?, ?)';
            db.query(insertUserQuery, [nomeuser, emailuser, hashedPassword, addressuser], (insertErr, insertResults) => {
              if (insertErr) {
                console.error('Erro ao registrar usuário:', insertErr);
                res.status(500).json({ error: 'Erro interno do servidor' });
              } else {
                console.log('Usuário registrado com sucesso');
                res.json({ message: 'Usuário registrado com sucesso' });
              }
            });
          }
        });
      }
    });
  });

// Mais rotas podem ser definidas aqui

module.exports = router;