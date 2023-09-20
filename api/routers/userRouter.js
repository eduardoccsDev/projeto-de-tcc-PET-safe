const express = require('express');
const router = express.Router();
const db = require('../db'); // Importe o módulo do banco de dados
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Adicione esta linha para importar o módulo jsonwebtoken
const verifyToken = require('../auth'); // Importe a função verifyToken
const { getUserById } = require('../userController');
require('dotenv').config();

// Rota para listar todos os usuários
router.get('/users', async (req, res) => {
  try {
      // Use o módulo do banco de dados para fazer a consulta
      const results = await db.query('SELECT * FROM users');
      res.json(results);
  } catch (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para registrar novos usuários
router.post('/register', async (req, res) => {
    const { nomeuser, emailuser, passworduser, addressuser } = req.body;
  
    // Verifique se o email já está em uso (opcional)
  
    // Hash a senha
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passworduser, saltRounds);
  
    // Insira o novo usuário no banco de dados
    const insertUserQuery = 'INSERT INTO users (nomeuser, emailuser, passworduser, addressuser) VALUES (?, ?, ?, ?)';
    db.query(insertUserQuery, [nomeuser, emailuser, hashedPassword, addressuser], (err, results) => {
      if (err) {
        console.error('Erro ao registrar usuário:', err);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        console.log('Usuário registrado com sucesso');
        res.json({ message: 'Usuário registrado com sucesso' });
      }
    });
  });
//Rota de login de um usuário
router.post('/login', async (req, res) => {
  const { emailuser, passworduser } = req.body;

  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE emailuser = ?', [emailuser]);

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const user = rows[0];
    const idusers = user.idusers;
    console.log(idusers);
    const isPasswordValid = await bcrypt.compare(passworduser, user.passworduser);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }
    const token = jwt.sign({ userId: user.idusers },process.env.SECRET_KEY, { expiresIn: '1h' });

   return res.json({ auth: true, token });
  } catch (error) {
    console.error('Erro ao efetuar login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
router.get('/user', verifyToken, async (req, res) => {
  try {
    // Obtenha o ID do usuário a partir do token
    const userId = req.user.userId; // Use userId em vez de idusers

    // Chame a função para buscar os dados do usuário
    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Envie os dados do usuário como resposta
    res.json(user);
  } catch (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;