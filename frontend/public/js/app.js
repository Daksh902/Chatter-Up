const socket = io(); // Assuming Socket.io is properly configured

function handleUserOnboarding() {
    // const storedUserName = localStorage.getItem('userName');
    // if (!storedUserName) {
    //     // Show name prompt if no name is stored
    //     document.getElementById('namePrompt').style.display = 'block';
    //     document.getElementById('app').style.display = 'none';
    // } else {
    //     // Skip name prompt and show chat if name is stored
    //     document.getElementById('namePrompt').style.display = 'none';
    //     document.getElementById('app').style.display = 'block';
    //     socket.emit('userJoin', { name: storedUserName });
    // }
    document.getElementById('namePrompt').style.display = 'block';
    document.getElementById('app').style.display = 'none';
}

// Function to handle setting the user name
function setUserName() {
    const userNameInput = document.getElementById('userNameInput');
    const userName = userNameInput.value.trim();

    if (userName) {
        localStorage.setItem('userName', userName);
        socket.emit('userJoin', { name: userName });

        // Hide name prompt and show chat UI
        document.getElementById('namePrompt').style.display = 'none';
        document.getElementById('app').style.display = 'block';
    }
}

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const messageContent = messageInput.value.trim();

    if (messageContent !== '') {
        // Emit the message event to the server
        socket.emit('sendMessage', { content: messageContent, sender: localStorage.getItem('userName') });

        // Clear the input field after sending message
        messageInput.value = '';
    }
}

// Handle user onboarding when the page loads
window.onload = handleUserOnboarding;
