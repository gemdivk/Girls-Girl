let isDarkTheme = false; 
function toggleTheme() {
    isDarkTheme = !isDarkTheme; 
    document.body.classList.toggle('dark-theme', isDarkTheme); 

    const buttonIcon = document.querySelector('.button-icon');
    if (isDarkTheme) {
        buttonIcon.src = 'sun.png'; 
    } else {
        buttonIcon.src = 'moon.png'; 
    }
}