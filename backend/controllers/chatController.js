// chatController.js
const { validationResult } = require('express-validator');
const Message = require('../models/Message.js');
const { messageValidation } = require('../utils/validation.js');

exports.sendMessage = async (req, res) => {
    // Validate request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { sender, content } = req.body;
    try {
        const message = await Message.create({ sender, content });
        res.status(201).json({ success: true, message: 'Message sent successfully', data: message });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

exports.getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
