document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const additionalText = this.previousElementSibling; 
        if (additionalText.style.display === 'none') {
            additionalText.style.display = 'block'; 
            this.textContent = 'Read less..'; 
        } else {
            additionalText.style.display = 'none'; 
            this.textContent = 'Read more..';
        }
    });
});