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
  console.log('Rota de login chamada');
  const { emailuser, passworduser } = req.body;
  // Verifique se o email existe no banco de dados
  const user = await getUserByEmail(emailuser);
  if (!user) {
    // Usuário não encontrado
    return res.status(401).json({ error: 'Email ou senha incorretos' });
  }
  // Verifique a senha
  const passwordMatch = await bcrypt.compare(passworduser, user.passworduser);
  if (!passwordMatch) {
    // Senha incorreta
    return res.status(401).json({ error: 'Email ou senha incorretos' });
  }
  // Se as credenciais estiverem corretas, crie uma sessão
  req.session.user = {
    id: user.idusers,
    nomeuser: user.nomeuser,
    emailuser: user.emailuser,
    // Outras informações do usuário que você deseja armazenar na sessão
  };
  console.log('Sessão criada:', req.session.user);
  res.json({
    message: 'Login bem-sucedido',
    user: {
      id: user.id,
      nomeuser: user.nomeuser,
      emailuser: user.emailuser,
      // Outras informações do usuário que você deseja retornar
    },
  });
});
// Função para obter um usuário pelo email
async function getUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users WHERE emailuser = ?', [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]); // Assumindo que o email é único
      }
    });
  });
}
module.exports = router;