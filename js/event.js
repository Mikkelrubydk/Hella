document.querySelectorAll('.flip-card-event').forEach(function(card) {
    card.addEventListener('click', function() {
        card.querySelector('.flip-card-inner-event').classList.toggle('flipped');
    });
});