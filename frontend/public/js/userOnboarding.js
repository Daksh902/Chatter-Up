function handleUserOnboarding() {
    currentUser = localStorage.getItem('userName');
    console.log('Current user from localStorage:', currentUser); // Debugging line
    if (!currentUser) {
        currentUser = prompt('Please enter your name:');
        if (currentUser) {
            localStorage.setItem('userName', currentUser);
            socket.emit('userJoin', { name: currentUser });
            console.log(`Welcome, ${currentUser}!`);
        }
    } else {
        socket.emit('userJoin', { name: currentUser });
        console.log(`Welcome back, ${currentUser}!`);
    }
}
