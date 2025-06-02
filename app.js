require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const app = express();

app.use(helmet());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Serveur sécurisé lancé sur le port 3000');
});