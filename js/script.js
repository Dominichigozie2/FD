document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');
    const bar = document.querySelector('.bars');
    let passedHero = false;

    // Intersection Observer to detect when we pass the hero section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            passedHero = !entry.isIntersecting;

            if (passedHero) {
                // When the hero section is not intersecting, make the nav sticky automatically
                nav.classList.add('sticky');
            } else {
                // When hero section is intersecting, only make the nav sticky if it is expanded
                if (nav.classList.contains('expanded')) {
                    nav.classList.add('sticky');
                } else {
                    nav.classList.remove('sticky');
                }
            }
        });
    }, { threshold: 0 });

    // Observe the hero section
    observer.observe(hero);

    // Toggle navigation expansion on click and manage sticky class
    bar.addEventListener('click', () => {
        const isExpanded = nav.classList.contains('expanded');

        if (!isExpanded) {
            nav.style.height = `${nav.scrollHeight}px`; // Expand
            nav.classList.add('expanded');
            if (!passedHero) {
                nav.classList.add('sticky');
            }
        } else {
            nav.style.height = '5rem'; // Collapse
            nav.classList.remove('expanded');

            // Only remove sticky if hero section is intersecting
            if (!passedHero) {
                nav.classList.remove('sticky');
            }
        }
    });

    // Reset height after transition to accommodate dynamic content
    nav.addEventListener('transitionend', () => {
        if (nav.classList.contains('expanded')) {
            nav.style.height = 'auto';
        }
    });

    // Collapse navigation on scroll
    window.addEventListener('scroll', () => {
        if (nav.classList.contains('expanded')) {
            // nav.style.height = '50px'; // Collapse
            nav.classList.remove('expanded');

            // Only remove sticky if hero section is intersecting
            if (!passedHero) {
                nav.classList.remove('sticky');
            }
        }
    });
});
