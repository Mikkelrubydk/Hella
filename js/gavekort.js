// gør sådan at man kan ændre beløbet når man klikker på plus og mins 

const giftcardAmount = document.getElementById('gavekort-beløb');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

let currentAmount = 500; // Start beløbet er 500kr

plusBtn.addEventListener('click', function() {
    if (currentAmount < 2000) { // sikre at beløbet er maks 2000 dkk 
        currentAmount += 100;
        updateAmount();
    }
});

minusBtn.addEventListener('click', function() {
    if (currentAmount > 100) { // sikre at beløber ikke går under 100 
        currentAmount -= 100;
        updateAmount();
    }
});


function updateAmount() {
    giftcardAmount.textContent = `${currentAmount} DKK`;
}


// laver billede serie, man kan klikke sig igennem 
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
