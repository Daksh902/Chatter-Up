const app = require('./backend/index.js');
const http = require('http');
const socketIo = require('socket.io');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
const io = socketIo(server);

// Handle Socket.IO connections
io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

    // Handle incoming messages
    socket.on('sendMessage', (message) => {
        io.emit('newMessage', message); // Broadcast the message to all clients
    });

    // Handle user join
    socket.on('userJoin', (user) => {
        io.emit('userJoin', user);
    });

    // Handle user leave
    socket.on('userLeave', (userName) => {
        io.emit('userLeave', userName);
    });
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
