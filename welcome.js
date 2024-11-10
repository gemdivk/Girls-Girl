document.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('currentUser'); 
    const navbarBrand = document.querySelector('.navbar-brand'); 
    
    if (username && navbarBrand) {
        const welcomeText = document.createElement('span'); 
        welcomeText.textContent = `Welcome, ${username}`; 
        welcomeText.className = 'welcome-message'; 
        navbarBrand.appendChild(welcomeText); 
    }
});