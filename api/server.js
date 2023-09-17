const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');

// Configurar o middleware para analisar JSON
app.use(express.json());

// Configurar o middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));

// Importe o módulo do banco de dados
const db = require('./db');

// Use os routers definidos
app.use('/', userRouter); // Alterado para usar '/' em vez de '/api'

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
