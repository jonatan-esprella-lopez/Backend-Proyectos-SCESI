const express = require('express');
const app = express();


require('dotenv').config()
const healthRoutes = require('./routes/health.routes.js');

const PORT = process.env.PORT;

app.use('/api', healthRoutes)

app.listen(PORT, () => {
    console.log(`Health check service running on http://localhost:${PORT}/health`);
});