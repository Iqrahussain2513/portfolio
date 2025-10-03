// Portfolio JavaScript functionality

// Project data for modal
const projects = {
    1: {
        title: "Cosmetic Web Design",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Web Design", "UI/UX Design", "E-commerce"],
        description: "Modern e-commerce website design for cosmetic brand with intuitive user experience and beautiful product showcase. Focused on creating an engaging shopping experience that highlights product features and drives conversions.",
        client: "Cosmetic Brand",
        year: "2023",
        role: "UI/UX Designer",
        tools: "Figma, Adobe XD, Photoshop, Illustrator",
        process: [
            "Client consultation and brand analysis",
            "Wireframing and user flow creation",
            "Visual design and product showcase layout",
            "Responsive design implementation",
            "User testing and optimization"
        ],
        results: "Created a modern e-commerce platform that effectively showcases cosmetic products with intuitive navigation and engaging visual design.",
        liveLink: "https://www.behance.net/iqrahussain11"
    },
    2: {
        title: "Restaurant Branding",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Branding", "Logo Design", "Graphic Design"],
        description: "Complete restaurant branding package including logo design, menu design, and mockup designs for visual identity. Created a cohesive brand experience that reflects the restaurant's unique personality and culinary style.",
        client: "Restaurant Client",
        year: "2023",
        role: "Brand Designer",
        tools: "Adobe Illustrator, Photoshop, InDesign",
        process: [
            "Brand strategy and positioning workshop",
            "Logo concept development and refinement",
            "Menu design and layout creation",
            "Mockup designs and brand application",
            "Brand guidelines and style guide"
        ],
        results: "Created a comprehensive brand identity that effectively communicates the restaurant's unique value proposition and enhances customer experience.",
        liveLink: "https://www.behance.net/iqrahussain11"
    },
    3: {
        title: "Wellness Brand Identity",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Branding", "Logo Design", "Visual Identity"],
        description: "Complete brand identity design for a wellness company, including logo design, color palette, typography, and comprehensive brand guidelines that reflect the company's mission of promoting health and wellness.",
        client: "WellnessCo",
        year: "2023",
        role: "Brand Designer",
        tools: "Adobe Illustrator, Photoshop, InDesign",
        process: [
            "Brand strategy and positioning workshop",
            "Logo concept development and refinement",
            "Color palette and typography selection",
            "Brand guidelines and style guide creation",
            "Implementation across all touchpoints"
        ],
        results: "Created a cohesive brand identity that increased brand recognition by 70% and helped establish the company as a trusted wellness leader.",
        liveLink: "#"
    },
    4: {
        title: "Food Delivery App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["UI/UX Design", "Mobile App", "Food Delivery"],
        description: "User-centered design for a food delivery app focusing on seamless ordering experience, real-time driver tracking, and intuitive interface that makes food ordering quick and enjoyable for users.",
        client: "FoodieApp",
        year: "2023",
        role: "UI/UX Designer",
        tools: "Figma, Principle, Adobe XD, Zeplin",
        process: [
            "User research and persona development",
            "User journey mapping and wireframing",
            "Prototyping and usability testing",
            "Visual design and micro-interactions",
            "Handoff to development team"
        ],
        results: "Improved order completion rate by 35% and reduced customer support inquiries by 50% through better user experience design.",
        liveLink: "#"
    },
    5: {
        title: "Corporate Website Redesign",
        image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Web Design", "UI/UX Design", "Corporate"],
        description: "Modern responsive website design for a corporate client with improved navigation, enhanced user experience, and mobile-first approach that reflects the company's professional image and values.",
        client: "CorporateInc",
        year: "2023",
        role: "Web Designer",
        tools: "Figma, Adobe XD, Webflow, Sketch",
        process: [
            "Content audit and information architecture",
            "Wireframing and user flow design",
            "Visual design and responsive layouts",
            "Prototyping and user testing",
            "Development handoff and quality assurance"
        ],
        results: "Increased website engagement by 55% and improved conversion rates by 40% through better user experience and modern design.",
        liveLink: "#"
    },
    6: {
        title: "Music Festival Branding",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Branding", "Event Design", "Graphic Design"],
        description: "Complete branding package for a music festival including posters, social media graphics, merchandise design, and promotional materials that captured the festival's energy and attracted the target audience.",
        client: "MusicFest",
        year: "2023",
        role: "Creative Director",
        tools: "Adobe Illustrator, Photoshop, InDesign",
        process: [
            "Brand strategy and creative direction",
            "Visual identity and logo development",
            "Poster and promotional material design",
            "Social media graphics and templates",
            "Merchandise design and production"
        ],
        results: "Generated 2x more social media engagement and increased ticket sales by 45% through compelling visual branding and marketing materials.",
        liveLink: "#"
    },
    7: {
        title: "Fitness Tracking App",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["UI/UX Design", "Mobile App", "Fitness"],
        description: "Comprehensive fitness app design with workout tracking, progress monitoring, and social features that motivates users to achieve their fitness goals through gamification and community engagement.",
        client: "FitLife",
        year: "2022",
        role: "UI/UX Designer",
        tools: "Figma, Adobe XD, Principle, InVision",
        process: [
            "User research and fitness behavior analysis",
            "Feature prioritization and user flows",
            "Wireframing and interaction design",
            "Visual design and motion graphics",
            "User testing and iterative improvements"
        ],
        results: "Achieved 80% user retention rate and increased daily active users by 120% through engaging UI design and gamification elements.",
        liveLink: "#"
    },
    8: {
        title: "E-commerce Platform",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        tags: ["Web Design", "E-commerce", "UI/UX Design"],
        description: "Full e-commerce website design with optimized checkout flow, product showcase, and mobile-first approach that provides seamless shopping experience and drives conversions.",
        client: "ShopEasy",
        year: "2022",
        role: "E-commerce Designer",
        tools: "Figma, Adobe XD, Shopify, Webflow",
        process: [
            "E-commerce strategy and user research",
            "Product catalog and checkout optimization",
            "Wireframing and user journey design",
            "Visual design and responsive layouts",
            "Conversion optimization and A/B testing"
        ],
        results: "Improved conversion rates by 65% and reduced cart abandonment by 45% through optimized checkout flow and better product presentation.",
        liveLink: "#"
    }
};

// Portfolio filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 100);
                } else {
                    item.classList.add('hidden');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const portfolioLinks = document.querySelectorAll('.portfolio-link');

    // Open modal when clicking on portfolio items
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const projectId = this.getAttribute('data-project');
            openModal(projectId);
        });
    });

    // Close modal when clicking close button
    modalClose.addEventListener('click', closeModal);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

function openModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projects[projectId];
    
    if (!project) return;

    // Update modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalImage').src = project.image;
    document.getElementById('modalImage').alt = project.title;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalClient').textContent = project.client;
    document.getElementById('modalYear').textContent = project.year;
    document.getElementById('modalRole').textContent = project.role;
    document.getElementById('modalTools').textContent = project.tools;
    document.getElementById('modalResults').textContent = project.results;
    document.getElementById('modalLiveLink').href = project.liveLink;

    // Update tags
    const modalTags = document.getElementById('modalTags');
    modalTags.innerHTML = '';
    project.tags.forEach(tag => {
        const tagElement = document.createElement('span');
        tagElement.className = 'tag';
        tagElement.textContent = tag;
        modalTags.appendChild(tagElement);
    });

    // Update process steps
    const modalProcess = document.getElementById('modalProcess');
    modalProcess.innerHTML = '';
    project.process.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'process-step';
        stepElement.innerHTML = `
            <div class="process-step-number">${index + 1}</div>
            <div class="process-step-text">${step}</div>
        `;
        modalProcess.appendChild(stepElement);
    });

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for portfolio links
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

// Portfolio item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Lazy loading for portfolio images
document.addEventListener('DOMContentLoaded', function() {
    const portfolioImages = document.querySelectorAll('.portfolio-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
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

    portfolioImages.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});

// Portfolio search functionality (if needed)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search projects...';
    searchInput.className = 'portfolio-search';
    
    const filterSection = document.querySelector('.filter-section .container');
    filterSection.insertBefore(searchInput, filterSection.firstChild);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// Initialize search functionality (uncomment to enable)
// addSearchFunctionality();

// Portfolio statistics
function updatePortfolioStats() {
    const totalProjects = document.querySelectorAll('.portfolio-item').length;
    const categories = {};
    
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const category = item.getAttribute('data-category').split(' ')[0];
        categories[category] = (categories[category] || 0) + 1;
    });
    
    console.log('Portfolio Statistics:', {
        totalProjects,
        categories
    });
}

// Initialize portfolio stats
document.addEventListener('DOMContentLoaded', updatePortfolioStats);

// Export functionality for portfolio data
function exportPortfolioData() {
    const portfolioData = [];
    
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        const projectData = {
            id: index + 1,
            title: item.querySelector('h3').textContent,
            description: item.querySelector('p').textContent,
            category: item.getAttribute('data-category'),
            year: item.querySelector('.project-year').textContent,
            client: item.querySelector('.project-client').textContent,
            image: item.querySelector('img').src
        };
        portfolioData.push(projectData);
    });
    
    return portfolioData;
}

// Portfolio analytics tracking
function trackPortfolioInteraction(action, projectTitle) {
    // Google Analytics or other tracking code would go here
    console.log(`Portfolio interaction: ${action} - ${projectTitle}`);
}

// Track portfolio item views
document.addEventListener('click', function(e) {
    if (e.target.closest('.portfolio-link')) {
        const projectTitle = e.target.closest('.portfolio-item').querySelector('h3').textContent;
        trackPortfolioInteraction('view_details', projectTitle);
    }
});

// Track filter usage
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        const filter = e.target.getAttribute('data-filter');
        trackPortfolioInteraction('filter', filter);
    }
});

// Portfolio performance optimization
function optimizePortfolioImages() {
    const images = document.querySelectorAll('.portfolio-image img');
    
    images.forEach(img => {
        // Add loading="lazy" attribute for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Add error handling
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/f3f4f6/9ca3af?text=Image+Not+Found';
            this.alt = 'Image not available';
        });
    });
}

// Initialize image optimization
document.addEventListener('DOMContentLoaded', optimizePortfolioImages);
