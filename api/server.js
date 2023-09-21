const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 
const cookieParser = require('cookie-parser');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Middleware para analisar JSON
app.use(express.json());
app.use(cookieParser());
// Middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));

// Habilitar o CORS (configurar para suas necessidades)
app.use(cors());

// Use suas rotas
app.use('/', routes);

// Iniciar o servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});