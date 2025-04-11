const connectDB = require('./config/db.config');
const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();
connectDB();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const PORT = process.env.PORT;

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});