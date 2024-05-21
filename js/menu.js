
  // .Menunavigationen forbliver "fixed", indtil at den overskrider 65% af højden af dokumentet, hvorefter den bliver absolute.
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

// Observer som observerer hvor på siden man befinder sig, og highlighter listeelementer derefter.

document.addEventListener('DOMContentLoaded', function() {

  const menuLinks = document.querySelectorAll('.menunavigation a');
  const sections = document.querySelectorAll('.menuindhold h2');

  const observerOptions = {
      root: null, // Brug hele viewport som roden for observationen
      rootMargin: '0px 0px -50% 0px',
      threshold: 0.5
  };

  // Initialiser variabel til den aktive sektion
  let activeSection = null;

  // Opret en ny IntersectionObserver med den givne callback-funktion og indstillingerne
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          // Tjekker om sektionen er synlig
          if (entry.isIntersecting) {
              // Hvis sektionen er synlig og ikke allerede er markeret som aktiv
              if (activeSection !== entry.target) {
                  // Opdater aktiv sektion til den synlige sektion
                  activeSection = entry.target;
                  // Opdater menu-links for at markere den aktive sektion
                  menuLinks.forEach(link => {
                      link.classList.remove('active'); // Fjern 'active' klasse fra alle menu-links
                      // Hvis linkets href-attribut indeholder id'et på den aktuelle sektion
                      if (link.getAttribute('href').includes(entry.target.id)) {
                          // Tilføj 'active' klasse til dette link
                          link.classList.add('active');
                      }
                  });
              }
          }
      });
  }, observerOptions);

  // Observer hver sektion for synlighed
  sections.forEach(section => {
      observer.observe(section);
  });
});


