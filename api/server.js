const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // Importe suas rotas

const app = express();

// Middleware para analisar JSON
app.use(express.json());

// Middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));

// Habilitar o CORS (configurar para suas necessidades)
app.use(cors());

// Use suas rotas
app.use('/api', routes); // Prefixo '/api' para suas rotas

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});