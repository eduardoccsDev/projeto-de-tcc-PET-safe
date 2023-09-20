const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Importe o cookie-parser
require('dotenv').config();

// Middleware para verificar o token JWT
const verifyToken = (req, res, next) => {
  // Use o cookie-parser para obter o token do cookie
  const token = req.cookies.token;
  console.log("TOKEN DENTRO DO MEU VERIFY: ", token)

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  try {
    // Verifique se o token é válido
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // O token é válido, você pode acessar os dados do usuário a partir de decoded.userId
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Token inválido', details: error.message });
  }
};

module.exports = verifyToken;
