// authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.authenticateUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }
};