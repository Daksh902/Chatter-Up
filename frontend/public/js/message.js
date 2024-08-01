// Example function to receive and display a message
function receiveMessage(message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${message.sender}: ${message.content}`;
    messagesContainer.appendChild(messageElement);
}
