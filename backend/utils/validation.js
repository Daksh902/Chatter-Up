// validation.js
const { body } = require('express-validator');

exports.registerValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

exports.loginValidation = [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required')
];

exports.messageValidation = [
    body('sender').notEmpty().withMessage('Sender is required'),
    body('content').notEmpty().withMessage('Content is required')
];

exports.updateUserProfileValidation = [
    body('username').notEmpty().withMessage('Username is required')
];
