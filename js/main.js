/**
 * SOCREPHO - Main JavaScript
 * Minimal JS for scroll animations and interactivity
 */

// ===========================================
// Scroll Animation Observer
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    // Add animation class to elements
    const animateElements = document.querySelectorAll(
        '.service-card, .work-card, .stat, .about-text, .code-window'
    );
    
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // ===========================================
    // Navbar scroll effect
    // ===========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        }
        
        lastScroll = currentScroll;
    });

    // ===========================================
    // Smooth scroll for anchor links
    // ===========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===========================================
    // Contact Form - AJAX Submit
    // ===========================================
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoading = submitBtn?.querySelector('.btn-loading');
    const successMessage = document.getElementById('form-success');
    const errorMessage = document.getElementById('form-error');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state
            if (btnText) btnText.style.display = 'none';
            if (btnLoading) btnLoading.style.display = 'inline-flex';
            submitBtn.disabled = true;
            
            // Hide previous messages
            if (successMessage) successMessage.style.display = 'none';
            if (errorMessage) errorMessage.style.display = 'none';
            
            try {
                const formData = new FormData(contactForm);
                
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });
                
                const result = await response.json();
                
                if (result.success) {
                    // Show success message
                    if (successMessage) successMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    // Show error message
                    if (errorMessage) errorMessage.style.display = 'block';
                }
            } catch (error) {
                console.error('Form submission error:', error);
                if (errorMessage) errorMessage.style.display = 'block';
            } finally {
                // Reset button state
                if (btnText) btnText.style.display = 'inline';
                if (btnLoading) btnLoading.style.display = 'none';
                submitBtn.disabled = false;
            }
        });
    }
});


