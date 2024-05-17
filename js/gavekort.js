const giftcardAmount = document.getElementById('gavekort-beløb');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

let currentAmount = 500; // Initial amount

plusBtn.addEventListener('click', function() {
    if (currentAmount < 2000) { // Ensure the amount doesn't go above 900 DKK
        currentAmount += 100;
        updateAmount();
    }
});

minusBtn.addEventListener('click', function() {
    if (currentAmount > 100) { // Ensure the amount doesn't go below 100 DKK
        currentAmount -= 100;
        updateAmount();
    }
});

function updateAmount() {
    giftcardAmount.textContent = `${currentAmount} DKK`;
}