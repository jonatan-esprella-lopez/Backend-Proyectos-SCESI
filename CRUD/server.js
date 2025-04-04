const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const user = require('./routes/user.routes');


dotenv.config();

const app = express();

//Midleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', user);

// Conexión MongoDB
console.log('📡 Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${process.env.PORT}`);
    });