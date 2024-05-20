document.querySelectorAll('.flip-card-event').forEach(function(card) {
    card.addEventListener('click', function() {
        card.querySelector('.flip-card-inner-event').classList.toggle('flipped');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const leftArrow = document.querySelector('.pil-venstre');
    const rightArrow = document.querySelector('.pil-højre');
    const imageContainer = document.querySelector('.billede-container');
    const images = document.querySelectorAll('.billede-container picture');
    const visibleImages = 4;
    let currentIndex = 0;

    function updateScroll() {
        const imageWidth = images[0].getBoundingClientRect().width + 10; // Tilføjer + 10 da der er et 10px gap mellem billederne
        const maxIndex = images.length - visibleImages;
        if (currentIndex < 0) {
            currentIndex = maxIndex;
        } else if (currentIndex > maxIndex) {
            currentIndex = 0;
        }
        const newTransform = `translateX(-${currentIndex * imageWidth}px)`;
        imageContainer.style.transform = newTransform;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex -= 1;
        updateScroll();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex += 1;
        updateScroll();
    });
});
