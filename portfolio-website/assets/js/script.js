// This file contains custom JavaScript for the portfolio website, handling interactivity and dynamic content.

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll reveal for sections
    const scrollReveal = ScrollReveal({
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true
    });

    scrollReveal.reveal('.heading', { origin: 'top' });
    scrollReveal.reveal('.content', { origin: 'bottom' });
    scrollReveal.reveal('.box', { origin: 'left' });
    scrollReveal.reveal('.socials', { origin: 'right' });

    // Initialize Vanilla Tilt for images
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
    });
});