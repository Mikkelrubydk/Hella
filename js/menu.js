
  window.addEventListener('scroll', function() {
    var menuNavigation = document.querySelector('.menunavigation');
    var heightPercentage = 65; // dokument højde i procent

    // Beregning af højden i procent
    var height = (heightPercentage / 100) * document.documentElement.scrollHeight;

    if (window.pageYOffset >= height) {
      menuNavigation.classList.add('absolute');
    } else {
      menuNavigation.classList.remove('absolute');
    }
  });
