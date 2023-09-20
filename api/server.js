const userRouter = require('./routers/userRouter');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

// Configurar o middleware para analisar JSON
app.use(express.json());

// Configurar o middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));

// Habilitar o CORS para todas as origens
app.use(cors());

app.use(cookieParser());

// Importe o módulo do banco de dados
const db = require('./db');

// Use os routers definidos
app.use('/', userRouter);

// Iniciar o servidor
const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
