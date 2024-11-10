const button = document.querySelector('.btn-time');
let isTimeDisplayed = false;

button.addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    if (isTimeDisplayed) {
        button.textContent = "Current time!♥"; 
    } else {
        button.textContent = currentTime; 
    }
    isTimeDisplayed = !isTimeDisplayed; 
});

function checkButtonVisibility() {
    const buttonRect = button.getBoundingClientRect();
    
    const cards = document.querySelectorAll('.card'); 
    let isHidden = false;

    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();

        if (
            buttonRect.top < cardRect.bottom &&
            buttonRect.bottom > cardRect.top &&
            buttonRect.right > cardRect.left &&
            buttonRect.left < cardRect.right
        ) {
            isHidden = true; 
        }
    });

    if (isHidden) {
        button.classList.add('hidden');
    } else {
        button.classList.remove('hidden');
    }
}

window.addEventListener('scroll', checkButtonVisibility);
window.addEventListener('resize', checkButtonVisibility); 

checkButtonVisibility();