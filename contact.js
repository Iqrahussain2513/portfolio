// Contact page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form
    initializeContactForm();
    
    // Initialize FAQ functionality
    initializeFAQ();
    
    // Initialize contact card animations
    initializeContactCards();
    
    // Initialize social links
    initializeSocialLinks();
});

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('formSuccess');
    
    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            submitForm();
        }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
}

// Form validation
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    
    // Email validation
    const emailField = form.querySelector('#email');
    if (emailField.value && !isValidEmail(emailField.value)) {
        showFieldError(emailField, 'Please enter a valid email address');
        isValid = false;
    }
    
    // Phone validation (if provided)
    const phoneField = form.querySelector('#phone');
    if (phoneField.value && !isValidPhone(phoneField.value)) {
        showFieldError(phoneField, 'Please enter a valid phone number');
        isValid = false;
    }
    
    return isValid;
}

// Validate individual field
function validateField(field) {
    const value = field.value.trim();
    
    if (field.hasAttribute('required') && !value) {
        showFieldError(field, `${field.previousElementSibling.textContent.replace('*', '')} is required`);
        return false;
    }
    
    if (field.type === 'email' && value && !isValidEmail(value)) {
        showFieldError(field, 'Please enter a valid email address');
        return false;
    }
    
    if (field.type === 'tel' && value && !isValidPhone(value)) {
        showFieldError(field, 'Please enter a valid phone number');
        return false;
    }
    
    clearFieldError(field);
    return true;
}

// Show field error
function showFieldError(field, message) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.add('error');
    errorMessage.textContent = message;
}

// Clear field error
function clearFieldError(field) {
    const formGroup = field.closest('.form-group');
    const errorMessage = formGroup.querySelector('.error-message');
    
    formGroup.classList.remove('error');
    errorMessage.textContent = '';
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Phone validation
function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

// Submit form
async function submitForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const successMessage = document.getElementById('formSuccess');
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    try {
        // Collect form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Here you would typically send the data to your server
        // For demo purposes, we'll simulate a successful submission
        await simulateFormSubmission(data);
        
        // Show success message
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Track form submission
        trackFormSubmission(data);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        console.error('Form submission error:', error);
        showFormError('There was an error sending your message. Please try again.');
    } finally {
        // Hide loading state
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Simulate form submission (replace with actual API call)
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Form data:', data);
            resolve();
        }, 2000);
    });
}

// Show form error
function showFormError(message) {
    const form = document.getElementById('contactForm');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    errorDiv.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <p>${message}</p>
    `;
    errorDiv.style.cssText = `
        background-color: #fee2e2;
        color: #dc2626;
        padding: 1rem;
        border-radius: var(--radius-lg);
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    form.insertBefore(errorDiv, form.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// Track form submission for analytics
function trackFormSubmission(data) {
    console.log('Form submitted:', data);
    
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'form_name': 'contact_form',
            'project_type': data['project-type'],
            'budget_range': data.budget
        });
    }
}

// FAQ functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
        
        // Add keyboard support
        question.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
        
        // Make question focusable
        question.setAttribute('tabindex', '0');
        question.setAttribute('role', 'button');
        question.setAttribute('aria-expanded', 'false');
    });
}

// Contact card animations
function initializeContactCards() {
    const contactCards = document.querySelectorAll('.contact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    contactCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Social links functionality
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const platform = this.classList[1]; // Get platform name from class
            trackSocialClick(platform);
            
            // In a real implementation, you would redirect to the actual social media profiles
            console.log(`Clicked on ${platform}`);
            
            // For demo purposes, show a message
            showNotification(`Redirecting to ${platform}...`);
        });
        
        // Add hover effects
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Track social media clicks
function trackSocialClick(platform) {
    console.log(`Social click: ${platform}`);
    
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'social_click', {
            'platform': platform,
            'page': 'contact'
        });
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Phone number formatting
function initializePhoneFormatting() {
    const phoneField = document.getElementById('phone');
    
    phoneField.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, ''); // Remove non-digits
        
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        
        this.value = value;
    });
}

// Initialize phone formatting
document.addEventListener('DOMContentLoaded', initializePhoneFormatting);

// Form character counter for message field
function initializeCharacterCounter() {
    const messageField = document.getElementById('message');
    const maxLength = 1000;
    
    // Create character counter
    const counter = document.createElement('div');
    counter.className = 'character-counter';
    counter.style.cssText = `
        text-align: right;
        font-size: 0.875rem;
        color: var(--text-light);
        margin-top: 0.25rem;
    `;
    
    messageField.parentNode.appendChild(counter);
    
    // Update counter
    function updateCounter() {
        const remaining = maxLength - messageField.value.length;
        counter.textContent = `${messageField.value.length}/${maxLength}`;
        
        if (remaining < 100) {
            counter.style.color = '#ef4444';
        } else {
            counter.style.color = 'var(--text-light)';
        }
    }
    
    messageField.addEventListener('input', updateCounter);
    updateCounter(); // Initial update
}

// Initialize character counter
document.addEventListener('DOMContentLoaded', initializeCharacterCounter);

// Auto-save form data to localStorage
function initializeAutoSave() {
    const form = document.getElementById('contactForm');
    const inputs = form.querySelectorAll('input, select, textarea');
    
    // Load saved data
    inputs.forEach(input => {
        const savedValue = localStorage.getItem(`contact_${input.name}`);
        if (savedValue && input.type !== 'password') {
            input.value = savedValue;
        }
    });
    
    // Save data on input
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            localStorage.setItem(`contact_${this.name}`, this.value);
        });
    });
    
    // Clear saved data on successful submission
    form.addEventListener('submit', function() {
        inputs.forEach(input => {
            localStorage.removeItem(`contact_${input.name}`);
        });
    });
}

// Initialize auto-save
document.addEventListener('DOMContentLoaded', initializeAutoSave);

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Performance optimization
function optimizeContactPage() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
    
    // Add loading="lazy" to images without it
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });
}

// Initialize performance optimizations
document.addEventListener('DOMContentLoaded', optimizeContactPage);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        validateField,
        isValidEmail,
        isValidPhone,
        trackFormSubmission,
        trackSocialClick
    };
}
