
// Tilføjelse og fjernelse af elementer/effekter når brugermenuen er hhv. lukket og åben.

const menuBtn = document.querySelector('.menu-btn');
const burgerIndhold = document.querySelector('.burgerindhold');
const centerLogo = document.querySelector('.centerlogo');
const pilNed = document.querySelector('.pilned');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
      burgerIndhold.style.right = "0";
      centerLogo.style.transition = "opacity 1s";
      pilNed.style.transition = "opacity 1s";
      centerLogo.style.opacity = "0";
      burgerIndhold.style.animation = "fade-in .5s forwards";
      burgerIndhold.style.opacity = "1";
      pilNed.style.opacity = "0";
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
      burgerIndhold.style.right = "-100%";
      centerLogo.style.transition = "opacity 1s";
      centerLogo.style.opacity = "1";
      pilNed.style.opacity = "1";
      pilNed.style.transition = "opacity 1s";
      burgerIndhold.style.animation = "fade-out 1s forwards";
      burgerIndhold.style.opacity = "0";
    }
  });

if (window.matchMedia('(max-width: 1080px)').matches) {
    // Sørger for at koden kun kører, når brugeren er på mobilen
    document.querySelectorAll('.flip-card-event').forEach(function(card) {
        card.addEventListener('click', function() {
            var flipCardInner = card.querySelector('.flip-card-inner-event');
            if (flipCardInner.style.transform === 'rotateY(180deg)') {
                flipCardInner.style.transform = 'rotateY(0deg)';
            } else {
                flipCardInner.style.transform = 'rotateY(180deg)';
            }
        });
    });
  }

    // Genbrugt kode fra gavekort.html. Image-slider forbundet med to pile.  

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
