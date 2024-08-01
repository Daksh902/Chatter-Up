// chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController.js');

router.post('/send', chatController.sendMessage);
router.get('/messages', chatController.getMessages);

module.exports = router;
