import { animate, stagger } from 'https://cdn.skypack.dev/motion';

document.addEventListener('DOMContentLoaded', async () => {

    await new Promise(resolve => setTimeout(resolve, 100));

    // Parallax effect
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const rect = parallaxBg.parentElement.getBoundingClientRect();
            const scrollPosition = window.scrollY;
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const rate = (scrollPosition - (rect.top + scrollPosition)) * 0.5;
                parallaxBg.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }


    // Header scroll effect
    const header = document.querySelector('.header');
    const heroContent = document.querySelector('.hero-content');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    if (heroContent) {
        // Animation using Motion One
        animate(
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
    }

    // Animate header items
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length) {
        stagger(
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
    }
});