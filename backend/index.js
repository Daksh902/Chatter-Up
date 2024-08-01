const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./config/db.js');
const authRoutes = require('./routes/authRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const path = require('path');

// Establish MongoDB connection
connectDB();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define routes using Express routers
app.use('/auth', authRoutes);
app.use('/chat', chatRoutes);
app.use('/user', userRoutes);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// Fallback to 404.html for unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'public', '404.html'));
});

module.exports = app;
