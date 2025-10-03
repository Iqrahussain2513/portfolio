// Testimonials page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial animations
    initializeTestimonialAnimations();
    
    // Initialize testimonial carousel (if needed)
    initializeTestimonialCarousel();
    
    // Initialize stats counter animation
    initializeStatsCounter();
    
    // Initialize client logos animation
    initializeClientLogos();
});

// Testimonial animations on scroll
function initializeTestimonialAnimations() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
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
    
    // Set initial state and observe testimonial cards
    testimonialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });
    
    // Set initial state and observe testimonial items
    testimonialItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// Stats counter animation
function initializeStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// Animate counter numbers
function animateCounter(element) {
    const text = element.textContent;
    const number = parseFloat(text.replace(/[^\d.]/g, ''));
    const suffix = text.replace(/[\d.]/g, '');
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = number / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        
        // Format number based on original format
        if (suffix.includes('/')) {
            element.textContent = current.toFixed(1) + suffix;
        } else if (suffix.includes('%')) {
            element.textContent = Math.round(current) + suffix;
        } else {
            element.textContent = Math.round(current) + suffix;
        }
    }, stepDuration);
}

// Testimonial carousel functionality (optional)
function initializeTestimonialCarousel() {
    const carouselContainer = document.querySelector('.testimonials-grid');
    if (!carouselContainer) return;
    
    let currentIndex = 0;
    const cards = carouselContainer.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    
    // Create navigation buttons
    const navContainer = document.createElement('div');
    navContainer.className = 'testimonial-nav';
    navContainer.innerHTML = `
        <button class="nav-btn prev-btn" id="prevBtn">
            <i class="fas fa-chevron-left"></i>
        </button>
        <div class="nav-dots" id="navDots"></div>
        <button class="nav-btn next-btn" id="nextBtn">
            <i class="fas fa-chevron-right"></i>
        </button>
    `;
    
    carouselContainer.parentNode.insertBefore(navContainer, carouselContainer.nextSibling);
    
    // Create dots
    const dotsContainer = document.getElementById('navDots');
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.className = 'nav-dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    
    // Navigation functions
    function goToSlide(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
        
        // Update dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        
        currentIndex = index;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalCards;
        goToSlide(currentIndex);
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        goToSlide(currentIndex);
    }
    
    // Event listeners
    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    
    // Auto-advance carousel
    setInterval(nextSlide, 5000);
    
    // Initialize first slide
    goToSlide(0);
}

// Client logos animation
function initializeClientLogos() {
    const logos = document.querySelectorAll('.logo-item');
    
    logos.forEach((logo, index) => {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Testimonial filtering (if needed)
function addTestimonialFilter() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'testimonial-filter';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="web-design">Web Design</button>
        <button class="filter-btn" data-filter="mobile-app">Mobile App</button>
        <button class="filter-btn" data-filter="branding">Branding</button>
        <button class="filter-btn" data-filter="ui-ux">UI/UX</button>
    `;
    
    const allTestimonialsSection = document.querySelector('.all-testimonials .container');
    const sectionHeader = allTestimonialsSection.querySelector('.section-header');
    sectionHeader.parentNode.insertBefore(filterContainer, sectionHeader.nextSibling);
    
    // Add filter functionality
    const filterButtons = filterContainer.querySelectorAll('.filter-btn');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter testimonials
            testimonialItems.forEach(item => {
                const projectType = item.querySelector('.author-company').textContent.toLowerCase();
                
                if (filter === 'all' || projectType.includes(filter.replace('-', ' '))) {
                    item.style.display = 'block';
                    item.style.opacity = '1';
                } else {
                    item.style.display = 'none';
                    item.style.opacity = '0';
                }
            });
        });
    });
}

// Initialize testimonial filter (uncomment to enable)
// addTestimonialFilter();

// Testimonial search functionality
function addTestimonialSearch() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'testimonial-search-container';
    searchContainer.innerHTML = `
        <input type="text" placeholder="Search testimonials..." class="testimonial-search-input">
        <i class="fas fa-search search-icon"></i>
    `;
    
    const allTestimonialsSection = document.querySelector('.all-testimonials .container');
    const sectionHeader = allTestimonialsSection.querySelector('.section-header');
    sectionHeader.parentNode.insertBefore(searchContainer, sectionHeader.nextSibling);
    
    const searchInput = searchContainer.querySelector('.testimonial-search-input');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        
        testimonialItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            
            if (text.includes(searchTerm)) {
                item.style.display = 'block';
                item.style.opacity = '1';
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
            }
        });
    });
}

// Initialize testimonial search (uncomment to enable)
// addTestimonialSearch();

// Testimonial rating animation
function initializeRatingAnimation() {
    const starGroups = document.querySelectorAll('.stars');
    
    starGroups.forEach(stars => {
        const starElements = stars.querySelectorAll('i');
        
        stars.addEventListener('mouseenter', function() {
            starElements.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.2)';
                    star.style.color = '#fbbf24';
                }, index * 100);
            });
        });
        
        stars.addEventListener('mouseleave', function() {
            starElements.forEach(star => {
                star.style.transform = 'scale(1)';
            });
        });
    });
}

// Initialize rating animation
document.addEventListener('DOMContentLoaded', initializeRatingAnimation);

// Testimonial sharing functionality
function addTestimonialSharing() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    testimonialCards.forEach(card => {
        const shareButton = document.createElement('button');
        shareButton.className = 'testimonial-share-btn';
        shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';
        shareButton.setAttribute('aria-label', 'Share testimonial');
        
        shareButton.addEventListener('click', function() {
            const testimonialText = card.querySelector('p').textContent;
            const authorName = card.querySelector('h4').textContent;
            
            if (navigator.share) {
                navigator.share({
                    title: `Testimonial from ${authorName}`,
                    text: testimonialText,
                    url: window.location.href
                });
            } else {
                // Fallback: copy to clipboard
                navigator.clipboard.writeText(`${testimonialText} - ${authorName}`);
                showNotification('Testimonial copied to clipboard!');
            }
        });
        
        card.appendChild(shareButton);
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
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

// Initialize testimonial sharing (uncomment to enable)
// addTestimonialSharing();

// Testimonial analytics tracking
function trackTestimonialInteraction(action, testimonialId) {
    console.log(`Testimonial interaction: ${action} - ${testimonialId}`);
    
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'testimonial_interaction', {
            'action': action,
            'testimonial_id': testimonialId,
            'page': 'testimonials'
        });
    }
}

// Track testimonial views
document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const testimonialId = entry.target.querySelector('h4')?.textContent || 'unknown';
                trackTestimonialInteraction('view', testimonialId);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    testimonialItems.forEach(item => {
        observer.observe(item);
    });
});

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
function optimizeTestimonialsPage() {
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
document.addEventListener('DOMContentLoaded', optimizeTestimonialsPage);

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        animateCounter,
        trackTestimonialInteraction,
        showNotification
    };
}
