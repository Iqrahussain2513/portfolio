// Services page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    initializeFAQ();
    
    // Pricing card interactions
    initializePricingCards();
    
    // Service card animations
    initializeServiceCards();
});

// FAQ Accordion functionality
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

// Pricing card interactions
function initializePricingCards() {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        // Add hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = this.classList.contains('featured') 
                ? 'scale(1.05) translateY(-5px)' 
                : 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = this.classList.contains('featured') 
                ? 'scale(1.05)' 
                : 'translateY(0)';
        });
        
        // Add click tracking
        const button = card.querySelector('.btn');
        if (button) {
            button.addEventListener('click', function(e) {
                const packageName = card.querySelector('h3').textContent;
                trackPackageSelection(packageName);
            });
        }
    });
}

// Service card animations
function initializeServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Intersection Observer for animation on scroll
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
    
    serviceCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Track package selection for analytics
function trackPackageSelection(packageName) {
    // Google Analytics or other tracking code would go here
    console.log(`Package selected: ${packageName}`);
    
    // You could also send this data to your analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'package_selection', {
            'package_name': packageName,
            'page_title': document.title
        });
    }
}

// FAQ search functionality (optional)
function addFAQSearch() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'faq-search-container';
    searchContainer.innerHTML = `
        <input type="text" placeholder="Search FAQs..." class="faq-search-input">
        <i class="fas fa-search faq-search-icon"></i>
    `;
    
    const faqSection = document.querySelector('.faq-section .container');
    const sectionHeader = faqSection.querySelector('.section-header');
    sectionHeader.parentNode.insertBefore(searchContainer, sectionHeader.nextSibling);
    
    const searchInput = searchContainer.querySelector('.faq-search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer p').textContent.toLowerCase();
            
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    });
}

// Initialize FAQ search (uncomment to enable)
// addFAQSearch();

// Pricing calculator (optional feature)
function createPricingCalculator() {
    const calculatorHTML = `
        <div class="pricing-calculator">
            <h3>Custom Pricing Calculator</h3>
            <div class="calculator-options">
                <div class="calculator-option">
                    <label>
                        <input type="checkbox" data-price="500"> Logo Design (+$500)
                    </label>
                </div>
                <div class="calculator-option">
                    <label>
                        <input type="checkbox" data-price="1000"> Website Design (+$1000)
                    </label>
                </div>
                <div class="calculator-option">
                    <label>
                        <input type="checkbox" data-price="1500"> Mobile App Design (+$1500)
                    </label>
                </div>
                <div class="calculator-option">
                    <label>
                        <input type="checkbox" data-price="800"> Brand Guidelines (+$800)
                    </label>
                </div>
                <div class="calculator-option">
                    <label>
                        <input type="checkbox" data-price="300"> Social Media Graphics (+$300)
                    </label>
                </div>
            </div>
            <div class="calculator-total">
                <h4>Estimated Total: $<span id="totalPrice">0</span></h4>
            </div>
        </div>
    `;
    
    const pricingSection = document.querySelector('.pricing-section .container');
    pricingSection.insertAdjacentHTML('beforeend', calculatorHTML);
    
    // Add event listeners for calculator
    const checkboxes = document.querySelectorAll('.calculator-option input');
    const totalPriceElement = document.getElementById('totalPrice');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            let total = 0;
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    total += parseInt(cb.dataset.price);
                }
            });
            totalPriceElement.textContent = total;
        });
    });
}

// Initialize pricing calculator (uncomment to enable)
// createPricingCalculator();

// Service card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        const icon = card.querySelector('.service-icon');
        
        card.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// Process step animations
function initializeProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    
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
    
    processSteps.forEach((step, index) => {
        step.style.opacity = '0';
        step.style.transform = 'translateY(30px)';
        step.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        
        observer.observe(step);
    });
}

// Initialize process steps animation
document.addEventListener('DOMContentLoaded', initializeProcessSteps);

// Contact form integration (if needed)
function initializeContactIntegration() {
    const ctaButtons = document.querySelectorAll('.contact-cta .btn, .pricing-card .btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add tracking for CTA clicks
            const buttonText = this.textContent.trim();
            trackCTAClick(buttonText);
        });
    });
}

// Track CTA clicks
function trackCTAClick(buttonText) {
    console.log(`CTA clicked: ${buttonText}`);
    
    // Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'cta_click', {
            'button_text': buttonText,
            'page': 'services'
        });
    }
}

// Initialize contact integration
document.addEventListener('DOMContentLoaded', initializeContactIntegration);

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

// Mobile menu integration
function integrateMobileMenu() {
    const mobileMenuToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('nav-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const bars = mobileMenuToggle.querySelectorAll('.bar');
            bars.forEach((bar, index) => {
                if (mobileMenu.classList.contains('active')) {
                    if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) bar.style.opacity = '0';
                    if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', integrateMobileMenu);

// Performance optimization
function optimizeServicesPage() {
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
document.addEventListener('DOMContentLoaded', optimizeServicesPage);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeFAQ,
        trackPackageSelection,
        trackCTAClick
    };
}
