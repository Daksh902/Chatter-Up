// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);

module.exports = router;
