// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Elements to animate
    const animateElements = document.querySelectorAll('.skill-category, .project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill progress bars
                if (entry.target.classList.contains('skill-category')) {
                    animateProgressBars(entry.target);
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Mobile menu toggle
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Initialize animations for hero section
    setTimeout(() => {
        document.querySelector('.hero h1').style.animation = 'typing 3s steps(30) 1s forwards';
        document.querySelector('.hero h2').style.animation = 'fadeIn 1s ease 1.5s forwards';
        document.querySelector('.hero p').style.animation = 'fadeIn 1s ease 2s forwards';
        document.querySelector('.cta-button').style.animation = 'fadeIn 1s ease 2.5s forwards';
    }, 500);
});

// Animate skill progress bars
function animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const parent = bar.parentElement;
        const percent = parent.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
        
        // Add percentage number
        const percentElement = document.createElement('span');
        percentElement.className = 'skill-percent';
        percentElement.textContent = `${percent}%`;
        parent.nextElementSibling.appendChild(percentElement);
    });
}