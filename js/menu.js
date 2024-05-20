
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

  document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menunavigation a');
    const sections = document.querySelectorAll('.menuindhold h2');

    // Juster rootMargin for at tilpasse, hvornår sektioner betragtes som synlige
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px', // Juster denne margin efter behov
        threshold: 0.5 // Juster threshold som ønsket
    };

    // Debounce-variabel
    let activeSection = null;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Debounce for at undgå hurtige skift
                if (activeSection !== entry.target) {
                    activeSection = entry.target;
                    menuLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(entry.target.id)) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

