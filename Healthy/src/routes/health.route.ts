const app = require('express');
import { healthy } from '@/controllers/health.controller';
const router = app.Router();

router.get('/health', healthy)

module.exports = router;
