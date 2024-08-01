// authRoutes.js
const express = require('express');
const router = express.Router();
const { registerValidation, loginValidation } = require('../utils/validation');
const authController = require('../controllers/authController');

router.post('/register', registerValidation, authController.registerUser);
router.post('/login', loginValidation, authController.loginUser);

module.exports = router;
