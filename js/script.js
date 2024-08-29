
document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');

  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (!entry.isIntersecting) {
              // If the hero section is not visible, make the nav sticky
              nav.classList.add('sticky');
          } else {
              // If the hero section is visible, remove the sticky class
              nav.classList.remove('sticky');
          }
      });
  }, { threshold: 1 }); // Callback triggered when 0% of the hero section is visible

  // Observe the hero section
  observer.observe(hero);
});



document.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('nav');
  const hero = document.querySelector('.hero');
  let lastScrollY = window.scrollY;
  let passedHero = false;

  // Intersection Observer to detect when we pass the hero section
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          passedHero = !entry.isIntersecting;
          if (!passedHero) {
              nav.classList.remove('visible');
          }
      });
  }, { threshold: 0 });

  // Observe the hero section
  observer.observe(hero);

  // Scroll event to detect scroll direction and show/hide nav
  window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (passedHero) {
          if (currentScrollY < lastScrollY) {
              // Scrolling up, show the nav
              nav.classList.add('visible');
          } else {
              // Scrolling down, hide the nav
              nav.classList.remove('visible');
          }
      }

      lastScrollY = currentScrollY;
  });
});


document.addEventListener('DOMContentLoaded', () => {
    const bar = document.querySelector('.bars');
    const nav = document.querySelector('nav');

    // Toggle navigation expansion on click
    bar.addEventListener('click', () => {
        const isExpanded = nav.classList.contains('expanded');

        if (!isExpanded) {
            nav.style.height = `${nav.scrollHeight}px`; // Expand
            nav.classList.add('expanded');
        } else {
            nav.style.height = '5.5rem'; // Collapse
            nav.classList.remove('expanded');
        }
    });

    // Reset height after transition to accommodate dynamic content
    nav.addEventListener('transitionend', () => {
        if (nav.classList.contains('expanded')) {
            nav.style.height = 'auto';
            nav.style.height = 'white';

        //    nav.classList.toggle("sticky");
        }
    });

    // Collapse navigation on scroll
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('expanded')) {
            nav.style.height = '5.5rem'; // Collapse
            nav.classList.remove('expanded');
        }
    });
});

