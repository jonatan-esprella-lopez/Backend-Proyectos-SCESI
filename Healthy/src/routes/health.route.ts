const app = require('express');
const { healthy } = require('../controllers/health.controller');
const router = app.Router();

router.get('/health', healthy)

module.exports = router;
