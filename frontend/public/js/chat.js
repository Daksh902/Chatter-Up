// Logic related to sending and receiving messages

// Example function to handle receiving a message
socket.on('newMessage', (message) => {
    receiveMessage(message);
});

function receiveMessage(message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message.sender}: ${message.content}`;
    messagesContainer.appendChild(messageElement);
}
