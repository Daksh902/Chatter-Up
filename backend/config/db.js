// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Daksh:90201990@dpcluster.6058cze.mongodb.net/chatterup';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
