const express = require('express');
const router = express.Router();
const db = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const axios = require('axios');
dotenv.config();

// Middleware para verificar e decodificar o token JWT
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1] || ''; // Obtenha o token do cabeçalho da solicitação
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Erro na verificação do token:', err);
      return res.status(403).json({ error: 'Token inválido' });
    }
    req.user = decoded;
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

// Rota para atualizar informações do usuário
router.post('/atualizar-usuario/:userId', verifyToken, async (req, res) => {
  const userId = req.params.userId; // Obtenha o ID do usuário da URL
  const updatedUserInfo = req.body; // Obtenha as informações atualizadas do corpo da solicitação

  // Execute a lógica de atualização no banco de dados
  db.query('UPDATE users SET ? WHERE idusers = ?', [updatedUserInfo, userId], (err, results) => {
    if (err) {
      console.error('Erro na atualização do usuário:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      if (results.affectedRows > 0) {
        res.status(200).json({ message: 'Informações do usuário atualizadas com sucesso' });
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    }
  });
});

router.post('/register', (req, res) => {
  const { nomeuser, emailuser, passworduser, addressuser, residenciauser, cepuser } = req.body;

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
          const insertUserQuery = 'INSERT INTO users (nomeuser, emailuser, passworduser, addressuser, residenciauser, cepuser) VALUES (?, ?, ?, ?, ?, ?)';
          db.query(insertUserQuery, [nomeuser, emailuser, hashedPassword, addressuser, residenciauser, cepuser], (insertErr, insertResults) => {
            if (insertErr) {
              console.error('Erro ao registrar usuário:', insertErr);
              res.status(500).json({ error: 'Erro interno do servidor' });
            } else {
              //console.log('Usuário registrado com sucesso');
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
          res.status(401).json({ error: 'E-mail e/ou senha inválidos' });
        } else {
          // Se as credenciais estiverem corretas, crie um token JWT
          const token = jwt.sign(
            {
              userId: user.idusers,
              role: "user",
              nomeuser: user.nomeuser,
              emailuser: user.emailuser,
              addressuser: user.addressuser,
              imguser: user.imguser,
              residenciauser: user.residenciauser,
              cepuser: user.cepuser,
              passworduser: user.passworduser
            },
            process.env.JWT_SECRET,
            { expiresIn: '365d' }
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

const { Storage } = require('@google-cloud/storage');
const storage = new Storage({
  projectId: 'pet-safe-102fa',
  keyFilename: './pet-safe-102fa-firebase-adminsdk-8ho7y-9621d34569.json',
});
const bucketName = 'pet-safe-102fa.appspot.com'; // Nome do seu bucket no Firebase Storage
const upload = multer();

// Rota para upload de imagem
router.post('/upload-image', verifyToken, upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhuma imagem foi enviada' });
  }

  // Gere um nome de arquivo personalizado
  const userId = req.user.userId;
  const userName = req.user.nomeuser;
  const originalFileName = req.file.originalname;
  const fileExtension = originalFileName.split('.').pop(); // Obtém a extensão do arquivo

  // Remova espaços em branco e substitua por hífens, e converta para letras minúsculas
  const sanitizedUserName = userName.replace(/ /g, '-').toLowerCase();

  const customFileName = `${sanitizedUserName}-${userId}.${fileExtension}`;

  const imagePath = 'uploads/' + customFileName;

  // Antes de atualizar a imagem, você pode excluir a imagem anterior, se houver
  if (req.user.imguser) {
    // Excluir a imagem anterior no Firebase Storage
    const previousImagePath = req.user.imguser;
    const file = storage.bucket(bucketName).file(previousImagePath);
    file.delete()
      .then(() => {
        console.log('Imagem anterior excluída com sucesso no Firebase Storage');
      })
      .catch((err) => {
        console.error('Erro ao excluir imagem anterior no Firebase Storage:', err);
      });
  }

  // Upload da nova imagem para o Firebase Storage
  const file = storage.bucket(bucketName).file(imagePath);
  const stream = file.createWriteStream({
    metadata: {
      contentType: req.file.mimetype,
    },
  });

  stream.on('error', (err) => {
    console.error('Erro ao fazer upload da imagem para o Firebase Storage:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  });

  stream.on('finish', () => {
    // Obtenha o URL de download do arquivo
    file.getSignedUrl({ action: 'read', expires: '03-09-2491' }) // Expiração futura
      .then((signedUrls) => {
        const urlWithToken = signedUrls[0];

        // Atualizar o campo imguser no banco de dados com o caminho no Firebase Storage
        const updateQuery = 'UPDATE users SET imguser = ? WHERE idusers = ?';

        db.query(updateQuery, [urlWithToken, req.user.userId], (updateErr, updateResults) => {
          if (updateErr) {
            console.error('Erro ao atualizar o caminho da imagem no banco de dados:', updateErr);
            res.status(500).json({ error: 'Erro interno do servidor' });
          } else {
            // Gere um novo token JWT com o caminho da imagem atualizado
            const newToken = jwt.sign(
              {
                userId: req.user.userId,
                role: "user",
                nomeuser: req.user.nomeuser,
                emailuser: req.user.emailuser,
                addressuser: req.user.addressuser,
                imguser: urlWithToken, // Use o URL com token de acesso
                residenciauser: req.user.residenciauser,
                cepuser: req.user.cepuser,
              },
              process.env.JWT_SECRET,
              { expiresIn: '365d' }
            );

            // Envie o novo token como parte da resposta, juntamente com o caminho da imagem
            res.json({ imagePath: urlWithToken, token: newToken });
          }
        });
      })
      .catch((error) => {
        console.error('Erro ao obter o URL de download com token de acesso:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
      });
  });

  stream.end(req.file.buffer);
});

// Rota para atualizar as informações do usuário
router.post('/atualizar-usuario', verifyToken, (req, res) => {
  const { nomeuser, emailuser, addressuser, residenciauser, cepuser } = req.body;
  const userId = req.user.userId; // ID do usuário a ser atualizado

  // Atualize as informações do usuário no banco de dados
  const updateQuery = 'UPDATE users SET nomeuser = ?, emailuser = ?, residenciauser = ?, cepuser = ?, addressuser = ? WHERE idusers = ?';

  db.query(updateQuery, [nomeuser, emailuser, residenciauser, cepuser, addressuser, userId], (updateErr, updateResults) => {
    if (updateErr) {
      console.error('Erro ao atualizar informações do usuário:', updateErr);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      //console.log('Informações do usuário atualizadas com sucesso no banco de dados');

      // Recupere as informações atualizadas do usuário após a atualização
      db.query('SELECT * FROM users WHERE idusers = ?', [userId], (selectErr, selectResults) => {
        if (selectErr) {
          console.error('Erro ao recuperar informações atualizadas do usuário:', selectErr);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          // Crie um novo token JWT com as informações atualizadas
          const updatedUser = selectResults[0];
          const token = jwt.sign(
            {
              userId: updatedUser.idusers,
              role: "user",
              nomeuser: updatedUser.nomeuser,
              emailuser: updatedUser.emailuser,
              addressuser: updatedUser.addressuser,
              imguser: updatedUser.imguser,
              residenciauser: updatedUser.residenciauser,
              cepuser: updatedUser.cepuser,
            },
            process.env.JWT_SECRET,
            { expiresIn: '365d' }
          );

          // Envie o novo token e as informações atualizadas do usuário como resposta
          res.json({ token, user: updatedUser });
        }
      });
    }
  });
});

// Rota para atualizar a senha do usuário
router.post('/atualizar-senha', verifyToken, (req, res) => {
  const { newPassword } = req.body;
  const userId = req.user.userId; // ID do usuário logado
  //console.log(typeof newPassword)
  // Realize a hash da nova senha
  bcrypt.hash(newPassword, 10, (hashErr, hashedPassword) => {
    if (hashErr) {
      console.error('Erro ao criar hash da nova senha:', hashErr);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      // Atualize a senha no banco de dados
      const updateQuery = 'UPDATE users SET passworduser = ? WHERE idusers = ?';

      db.query(updateQuery, [hashedPassword, userId], (updateErr, updateResults) => {
        if (updateErr) {
          console.error('Erro ao atualizar a senha do usuário:', updateErr);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          //console.log('Senha do usuário atualizada com sucesso');
          res.json({ message: 'Senha do usuário atualizada com sucesso' });
        }
      });
    }
  });
});

router.post('/adicionar-pet', verifyToken, (req, res) => {
  const { idtutor, nomepet, especiepet, sexopet, nascimentopet } = req.body;
  // Execute uma consulta SQL para adicionar o pet ao banco de dados
  const addPetQuery = 'INSERT INTO pets (idtutor, nomepet, especiepet, sexopet, nascimentopet) VALUES (?, ?, ?, ?, ?)';

  db.query(addPetQuery, [idtutor, nomepet, especiepet, sexopet, nascimentopet], (addErr, addResults) => {
    if (addErr) {
      console.error('Erro ao adicionar pet:', addErr);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      //console.log('Pet adicionado com sucesso');
      res.json({ message: 'Pet adicionado com sucesso' });
    }
  });
});

// Rota para buscar os pets do usuário logado
router.get('/pets', verifyToken, (req, res) => {
  // O `idtutor` é o `userId` do usuário logado
  const idtutor = req.user.userId;
  // Consulte o banco de dados para buscar os pets com o mesmo `idtutor`
  db.query('SELECT * FROM pets WHERE idtutor = ?', [idtutor], (err, results) => {
    if (err) {
      console.error('Erro na consulta SQL:', err);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else {
      // Retorna os pets encontrados
      res.json(results);
    }
  });
});

// Rota para remover um pet
router.delete('/remover-pet/:idpets', verifyToken, (req, res) => {
  const idpets = req.params.idpets;
  const idtutor = req.user.userId; // ID do tutor (usuário logado)

  // Execute uma consulta SQL para verificar se o pet pertence ao usuário logado antes de remover
  db.query('SELECT * FROM pets WHERE idpets = ? AND idtutor = ?', [idpets, idtutor], (selectErr, selectResults) => {
    if (selectErr) {
      console.error('Erro ao verificar a propriedade do pet:', selectErr);
      res.status(500).json({ error: 'Erro interno do servidor' });
    } else if (selectResults.length === 0) {
      // Se não houver correspondência (o pet não pertence ao usuário logado), retorne um erro
      res.status(404).json({ error: 'Pet não encontrado' });
    } else {
      // Execute uma consulta SQL para remover o pet do banco de dados
      db.query('DELETE FROM pets WHERE idpets = ?', [idpets], (deleteErr, deleteResults) => {
        if (deleteErr) {
          console.error('Erro ao remover pet:', deleteErr);
          res.status(500).json({ error: 'Erro interno do servidor' });
        } else {
          //console.log('Pet removido com sucesso');
          res.json({ message: 'Pet removido com sucesso' });
        }
      });
    }
  });
});

// Rota de proxy para a API do Google Maps
router.get('/google-maps-proxy', async (req, res) => {
  try {
    const apiKey = 'AIzaSyCcR7yUn_K1EmYVI7PMBeXN_tOxSde2tHw';
    const query = req.query.query;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&key=${apiKey}`;

    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Erro na solicitação à API do Google Maps:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar o lembrete de um pet
router.post('/pets/:petId/update-lembrete', async (req, res) => {
  try {
    const petId = req.params.petId;
    const { atividade } = req.body;

    // Execute uma consulta SQL para atualizar o campo "atividade" do pet
    const updateQuery = 'UPDATE pets SET atividade = ? WHERE idpets = ?';

    db.query(updateQuery, [atividade, petId], (updateErr, updateResults) => {
      if (updateErr) {
        console.error('Erro ao atualizar o lembrete do pet:', updateErr);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        //console.log('Lembrete do pet atualizado com sucesso');
        res.json({ message: 'Lembrete do pet atualizado com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro ao atualizar o lembrete do pet:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para atualizar o pet
router.post('/pets/:petId/update-petinfo', async (req, res) => {
  try {
    const petId = req.params.petId;
    const { nomepet, sexopet, nascimentopet, especiepet } = req.body;

    // Execute uma consulta SQL para atualizar o campo "atividade" do pet
    const updateQuery = 'UPDATE pets SET nomepet = ?, sexopet = ?, nascimentopet = ?, especiepet = ? WHERE idpets = ?';

    db.query(updateQuery, [nomepet, sexopet, nascimentopet, especiepet, petId], (updateErr, updateResults) => {
      if (updateErr) {
        console.error('Erro ao atualizar o pet:', updateErr);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        //console.log('Pet atualizado com sucesso');
        res.json({ message: 'Pet atualizado com sucesso' });
      }
    });
  } catch (error) {
    console.error('Erro ao atualizar o pet:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para remover uma conta de usuário por ID
router.delete('/remover-conta', verifyToken, async (req, res) => {
  try {
    const fileExtension = 'jpeg'; // Obtém a extensão do arquivo
    const userId = req.user.userId;
    const userName = req.user.nomeuser;
    // Remova espaços em branco e substitua por hífens, e converta para letras minúsculas
    const sanitizedUserName = userName.replace(/ /g, '-').toLowerCase();
    const customFileName = `${sanitizedUserName}-${userId}.${fileExtension}`;

    // Defina o caminho do arquivo
    const imagePath = 'uploads/' + customFileName;
    const bucket = storage.bucket(bucketName); // Substitua "bucketName" pelo nome do seu bucket 

    // Exclua o arquivo no Firebase Storage
    const file = bucket.file(imagePath);
    file.delete()
      .then(() => {
        console.log('Imagem de perfil do usuário excluída com sucesso no Firebase Storage');
      })
      .catch((err) => {
        console.error('Erro ao excluir imagem de perfil do usuário no Firebase Storage:', err);
      });

    // Execute uma consulta SQL para buscar os pets do usuário
    const selectPetsQuery = 'SELECT idpets FROM pets WHERE idtutor = ?';
    db.query(selectPetsQuery, [userId], async (selectPetsErr, selectPetsResults) => {
      if (selectPetsErr) {
        console.error('Erro ao buscar pets do usuário:', selectPetsErr);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        // Preencha o array de petIds com os IDs dos pets do usuário
        const petIds = selectPetsResults.map((pet) => pet.idpets);

        if (petIds.length > 0) {
          // Execute uma consulta SQL para remover os pets do usuário apenas se houver pets para excluir
          const deletePetsQuery = 'DELETE FROM pets WHERE idpets IN (?)';
          db.query(deletePetsQuery, [petIds], async (deletePetsErr, deletePetsResults) => {
            if (deletePetsErr) {
              console.error('Erro ao remover pets do usuário:', deletePetsErr);
              res.status(500).json({ error: 'Erro interno do servidor' });
            } else {
              console.log('Pets removidos com sucesso');
            }
          });
        }
        // Execute uma consulta SQL para remover o usuário
        const deleteUserQuery = 'DELETE FROM users WHERE idusers = ?';
        db.query(deleteUserQuery, [userId], async (deleteUserErr, deleteUserResults) => {
          if (deleteUserErr) {
            console.error('Erro ao remover usuário:', deleteUserErr);
            res.status(500).json({ error: 'Erro interno do servidor' });
          } else {
            console.log('Usuário removido com sucesso');
            res.json({ message: 'Usuário removido com sucesso' });
          }
        });
      }
    });
  } catch (error) {
    console.error('Erro ao remover a conta de usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota para remover uma conta de usuário
router.delete('/remover-user/:id', verifyToken, async (req, res) => {
  try {
    const userId = req.params.id; // Para obter o valor do parâmetro "id"
    console.log(userId);
    // Execute uma consulta SQL para buscar os pets do usuário
    const selectPetsQuery = 'SELECT idpets FROM pets WHERE idtutor = ?';
    db.query(selectPetsQuery, [userId], async (selectPetsErr, selectPetsResults) => {
      if (selectPetsErr) {
        console.error('Erro ao buscar pets do usuário:', selectPetsErr);
        res.status(500).json({ error: 'Erro interno do servidor' });
      } else {
        // Preencha o array de petIds com os IDs dos pets do usuário
        const petIds = selectPetsResults.map((pet) => pet.idpets);

        if (petIds.length > 0) {
          // Execute uma consulta SQL para remover os pets do usuário apenas se houver pets para excluir
          const deletePetsQuery = 'DELETE FROM pets WHERE idpets IN (?)';
          db.query(deletePetsQuery, [petIds], async (deletePetsErr, deletePetsResults) => {
            if (deletePetsErr) {
              console.error('Erro ao remover pets do usuário:', deletePetsErr);
              res.status(500).json({ error: 'Erro interno do servidor' });
            } else {
              console.log('Pets removidos com sucesso');
            }
          });
        }
        // Execute uma consulta SQL para remover o usuário
        const deleteUserQuery = 'DELETE FROM users WHERE idusers = ?';
        db.query(deleteUserQuery, [userId], async (deleteUserErr, deleteUserResults) => {
          if (deleteUserErr) {
            console.error('Erro ao remover usuário:', deleteUserErr);
            res.status(500).json({ error: 'Erro interno do servidor' });
          } else {
            console.log('Usuário removido com sucesso');
            res.json({ message: 'Usuário removido com sucesso' });
          }
        });
      }
    });
  } catch (error) {
    console.error('Erro ao remover a conta de usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

module.exports = router;
