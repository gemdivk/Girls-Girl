function showGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const greetingMessage = document.getElementById('greeting-message');
    let greeting;

    if (hours < 6) {
        greeting = 'It’s quite late, Girl! Time to rest!🌛';
    } else if (hours < 12) {
        greeting = 'Good morning, Girl!🌞';
    } else if (hours < 18) {
        greeting = 'Good afternoon, Girl!🌤️';
    } else {
        greeting = 'Good evening, Girl!🌚';
    }

    greetingMessage.textContent = greeting;
}

showGreeting();