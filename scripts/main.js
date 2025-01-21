// Header scroll effect
const header = document.querySelector('.header');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Animation using Motion One
motion.animate(
    heroContent,
    {
        opacity: [0, 1],
        y: [50, 0]
    },
    {
        duration: 1,
        easing: [.22, .03, .26, 1]
    }
);

// Animate header items
const navItems = document.querySelectorAll('.nav-item');
motion.stagger(
    navItems,
    {
        opacity: [0, 1],
        y: [-20, 0]
    },
    {
        duration: 0.5,
        delay: 0.2,
        stagger: 0.1
    }
);