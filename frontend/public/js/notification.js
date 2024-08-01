// Logic related to displaying notifications for new users or messages

// Example function to display a notification for new user join
socket.on('userJoin', (user) => {
    displayUserJoinNotification(user);
});

socket.on('userLeave', (userName) => {
    displayUserLeaveNotification(userName);
});

function displayUserJoinNotification(user) {
    const notificationsContainer = document.getElementById('notificationPanel');
    const notificationElement = document.createElement('div');
    notificationElement.textContent = `User ${user.name} joined the chat`;
    notificationsContainer.appendChild(notificationElement);
}

function displayUserLeaveNotification(userName) {
    const notificationsContainer = document.getElementById('notificationPanel');
    const notificationElement = document.createElement('div');
    notificationElement.textContent = `User ${userName} left the chat`;
    notificationsContainer.appendChild(notificationElement);
}
