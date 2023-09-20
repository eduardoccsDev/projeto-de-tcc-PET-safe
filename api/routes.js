const express = require('express');
const router = express.Router();
const db = require('./db'); // Importe a configuração do banco de dados
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); 
router.use(cookieParser());
// Carregar variáveis de ambiente do arquivo .env (certifique-se de criar este arquivo)
dotenv.config();
// Middleware para verificar e decodificar o token JWT
function verifyToken(req, res, next) {
  const token = req.cookies.token; // Certifique-se de que o nome do cookie seja 'token'
  // if (!token) {
  //   return res.status(401).json({ error: 'Token não fornecido' });
  // }
  jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjgsIm5vbWV1c2VyIjoiRWR1YXJkbyBjYXN0cm8iLCJlbWFpbHVzZXIiOiJlZHVhcmRvYy5pbmZvQGdtYWlsLmNvbSIsImFkZHJlc3N1c2VyIjoiUnVhIGRhIGJvbGluYSAyNywgdmljZW50ZSBwaW56b24gLSA2MDE4MTE1MCIsImlhdCI6MTY5NTI0ODkyNiwiZXhwIjoxNjk1MjUyNTI2fQ.rSppXvGRxyfo7ouWUdx--n9MQNF4wetoG69_HPT0d8Y", process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = decoded; // Adicione os dados do usuário decodificados ao objeto de solicitação
    next();
  });
}

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
// Rota para autenticação de usuários
router.post('/login', (req, res) => {
  const { emailuser, passworduser } = req.body;

  // Primeiro, obtenha a senha hash armazenada no banco de dados com base no email
  db.query('SELECT * FROM users WHERE emailuser = ?', [emailuser], (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else if (results.length === 0) {
      // Se não houver correspondência, retorne um erro de autenticação
      res.status(401).json({ error: 'Credenciais inválidas' });
    } else {
      const user = results[0];
      
      // Compare a senha fornecida com a senha hash do banco de dados
      bcrypt.compare(passworduser, user.passworduser, (err, passwordMatch) => {
        if (err) {
          console.error('Erro ao comparar senhas:', err);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else if (!passwordMatch) {
          // Se as senhas não coincidirem, retorne um erro de autenticação
          res.status(401).json({ error: 'Credenciais inválidas' });
        } else {
          // Se as credenciais estiverem corretas, crie um token JWT
          const token = jwt.sign(
            {
              userId: user.idusers,
              nomeuser: user.nomeuser,
              emailuser: user.emailuser,
              addressuser: user.addressuser,
            },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
          );
          // Envie o token como resposta
          res.json({ token });
        }
      });
    }
  });
});
// Rota protegida que requer autenticação
router.get('/protegido', verifyToken, (req, res) => {
  // Os dados do usuário estão disponíveis em req.user
  res.json({ user: req.user });
});


module.exports = router;