// This file contains additional JavaScript logic or initialization code for the portfolio website.

document.addEventListener("DOMContentLoaded", function() {
    // Initialize particle effects
    particlesJS.load('particles-js', './assets/js/vendor/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    // Initialize tilt effect on images
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1,
    });

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});