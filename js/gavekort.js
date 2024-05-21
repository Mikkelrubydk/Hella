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

