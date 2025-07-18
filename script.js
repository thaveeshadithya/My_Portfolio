// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create a success message element
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    successMessage.style.backgroundColor = '#64ffda';
    successMessage.style.color = '#0a192f';
    successMessage.style.padding = '15px';
    successMessage.style.borderRadius = '4px';
    successMessage.style.marginTop = '20px';
    successMessage.style.textAlign = 'center';
    successMessage.style.fontWeight = '600';
    
    // Insert after the form
    this.parentNode.insertBefore(successMessage, this.nextSibling);
    
    // Reset form
    this.reset();
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
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
    const animateElements = document.querySelectorAll('.section-title, .skill-category, .project-card, .about-text, .about-image, .language-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate skill progress bars
                if (entry.target.classList.contains('skill-category')) {
                    animateProgressBars(entry.target);
                }
                
                // Animate language level bars
                if (entry.target.classList.contains('language-card')) {
                    animateLanguageBars(entry.target);
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
});

// Animate skill progress bars
function animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const parent = bar.parentElement;
        const percent = parent.getAttribute('data-percent');
        bar.style.width = `${percent}%`;
        
     
    });
}

// Animate language level bars
function animateLanguageBars(card) {
    const levelBar = card.querySelector('.level-bar');
    const level = levelBar.getAttribute('data-level');
    levelBar.style.setProperty('--level-width', `${level}%`);
    
    // Animate the bar
    setTimeout(() => {
        levelBar.querySelector('::after').style.width = `${level}%`;
    }, 300);
}

// Initialize animations for hero section
setTimeout(() => {
    document.querySelector('.hero h1').style.animation = 'fadeInUp 1s ease forwards';
    document.querySelector('.hero p').style.animation = 'fadeIn 1s ease 1s forwards';
    document.querySelector('.cta-button').style.animation = 'fadeIn 1s ease 1.5s forwards';
}, 500);