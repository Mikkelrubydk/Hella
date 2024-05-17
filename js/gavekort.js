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
    if (currentAmount > 100) { // sikre at beløber ikke går under 100 dkk 
        currentAmount -= 100;
        updateAmount();
    }
});


// laver billede serie, man kan klikke sig igennem 

function updateAmount() {
    giftcardAmount.textContent = `${currentAmount} DKK`;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.image-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('active');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('active');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        container.scrollLeft = scrollLeft - walk;
    });
});