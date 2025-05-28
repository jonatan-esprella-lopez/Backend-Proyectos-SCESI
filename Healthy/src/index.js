const express = require('express');
const app = express();

const PORT = 3000;

app.get('/health', (_req, res) => {
    try {
        res.status(200).json({
            healt: 'healthy',
            status: '200',
            message: 'ok',
        });
    } catch (error) {
        console.error('Error in health check:', error);
        res.status(500).json({
            status: '500',
            message: 'Internal Server Error',
        });
    }

});

app.listen(PORT, () => {
    console.log(`Health check service running on http://localhost:${PORT}/health`);
});