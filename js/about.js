
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


// Eventlistener som der for hver knap kalder en funktion ved klik.

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".knap.vismereknap");
    
    buttons.forEach(function(button, index) {
        button.addEventListener("click", function() {
            showMore(`mereTekst${index + 1}`, button); // Parameter som definerer hvilken knap der klikkes på. 
        });
    });
});

// Funktion som sørger for at "mereTekst" vises og tekstindholdet ændres når knappen klippes på.

function showMore(mereTekstId, button) {
    var mereTekst = document.getElementById(mereTekstId);

    if (mereTekst.style.display === "none" || mereTekst.style.display === "") {
        mereTekst.style.display = "inline";
        button.textContent = "READ LESS";
    } else {
        mereTekst.style.display = "none";
        button.textContent = "READ MORE";
    }
}
