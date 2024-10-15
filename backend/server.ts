// server.js ou server.ts

const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware de vérification du token JWT
app.use((req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token requis');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send('Token invalide');
    req.user = decoded;
    next();
  });
});

// Exemple de route
app.get('/api', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API sécurisée!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
