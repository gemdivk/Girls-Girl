    const buttonSound = document.getElementById('buttonSound');

    const buttons = document.querySelectorAll('.btn.btn-outline-light mt-3, .btn-pink, .btn-time, .btn.btn-outline-light');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonSound.currentTime = 0; 
            buttonSound.play().catch(error => {
                console.error('Error playing sound:', error); 
            });
        });
    });