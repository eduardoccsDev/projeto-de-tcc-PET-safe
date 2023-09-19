const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routers/userRouter');
const session = require('express-session');

// Configurar o middleware de sessão
app.use(session({
  secret: 'nF2zFX9DSBR3SrYp8V6N7ajdhdWsn6j5hxz1FUsJzRvC4d6r', // Defina uma chave secreta para sua sessão
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

// Configurar o middleware para analisar JSON
app.use(express.json());

// Configurar o middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));


// Habilitar o CORS para todas as origens
app.use(cors());

// Importe o módulo do banco de dados
const db = require('./db');

// Use os routers definidos
app.use('/', userRouter); // Alterado para usar '/' em vez de '/api'

// Iniciar o servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
