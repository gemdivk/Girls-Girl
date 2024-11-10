const stars = document.querySelectorAll('.star');
const message = document.getElementById('message');

stars.forEach(star => {
    star.addEventListener('click', function() {
        const rating = this.getAttribute('data-value');
        stars.forEach(s => s.classList.remove('selected'));

        for (let i = 0; i < rating; i++) {
            stars[i].classList.add('selected');
        }
        message.textContent = `You rated ${rating} out of 5!`;
    });
});