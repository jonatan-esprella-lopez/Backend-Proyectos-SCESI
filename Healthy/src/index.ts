require('module-alias/register');
import express from 'express';
import dotenv from 'dotenv';

const healthRoutes = require('./routes/health.route');

const app = express();
dotenv.config();
const PORT = process.env.PORT;


app.use('/api', healthRoutes);

app.listen(PORT, () => {
    console.log(`Health check service running on http://localhost:${PORT}/api/health`);
});