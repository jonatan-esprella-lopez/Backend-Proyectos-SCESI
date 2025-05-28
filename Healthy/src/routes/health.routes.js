const express = require('express');
const router = express.Router();
const { getStatus } = require('../controllers/health.controller');

router.get('/health', getStatus);

module.exports = router;

