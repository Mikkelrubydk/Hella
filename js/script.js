const menuBtn = document.querySelector('.menu-btn');
const burgerIndhold = document.querySelector('.burgerindhold');
const centerLogo = document.querySelector('.centerlogo');
const pilNed = document.querySelector('.pilned');
let menuOpen = false;

document.addEventListener('scroll', () => {
    let nav = document.querySelector(`.navbar`);
  
    if (window.scrollY === 0) {
      nav.classList.add(`scrolled`);
    } else {
      nav.classList.remove('scrolled');
    }
  });


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

pilNed.addEventListener('click', function() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
});

if (window.matchMedia('(max-width: 1080px)').matches) {
  // Sørger for at koden kun kører, når brugeren er på mobilen
  document.querySelectorAll('.flip-card').forEach(function(card) {
      card.addEventListener('click', function() {
          var flipCardInner = card.querySelector('.flip-card-inner');
          if (flipCardInner.style.transform === 'rotateY(180deg)') {
              flipCardInner.style.transform = 'rotateY(0deg)';
          } else {
              flipCardInner.style.transform = 'rotateY(180deg)';
          }
      });
  });
}




