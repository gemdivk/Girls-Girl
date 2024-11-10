let glitterTriggered = false; 
function createGlitter() {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');

    glitter.style.left = Math.random() * window.innerWidth + 'px';
    glitter.style.width = (Math.random() * 8 + 5) + 'px'; 
    glitter.style.height = glitter.style.width; 
    glitter.style.animationDelay = Math.random() * 2 + 's'; 
    glitter.style.top = Math.random() * -100 + 'px'; 
    document.getElementById('glitter-container').appendChild(glitter);

    setTimeout(() => {
        glitter.remove();
    }, 4000);
}

function startGlitterEffect() {
    for (let i = 0; i < 500; i++) { 
        createGlitter();
    }
}

function isFooterVisible() {
    const footer = document.querySelector('footer');
    const rect = footer.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

window.addEventListener('scroll', function() {
    if (isFooterVisible() && !glitterTriggered) {
        startGlitterEffect();
        glitterTriggered = true; 
    } else if (!isFooterVisible()) {
        glitterTriggered = false; 
    }
});
