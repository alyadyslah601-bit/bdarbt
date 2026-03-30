// ============================================
// Al Rimal Travel Website - Main JavaScript
// ============================================

// Initialize AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', function() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true, // Whether animation should happen only once - while scrolling down
            offset: 50, // offset (in px) from the original trigger point
        });
    }
    console.log('Al Rimal Travel Website Loaded Successfully');
});

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // If on mobile, close the menu when a link is clicked
            const navbar = document.querySelector('.navbar');
            if (navbar.classList.contains('mobile-menu-open')) {
                navbar.classList.remove('mobile-menu-open');
            }
        }
    });
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form submitted simulation
        alert('شكراً لتواصلك معنا! لقد تم استلام رسالتك وسنرد عليك في أقرب وقت.');
        
        // Reset form
        this.reset();
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add active class to current navigation item based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll to top button
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px; /* Switched to right side for Arabic layout */
        width: 50px;
        height: 50px;
        background: var(--gold);
        color: var(--white);
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 20px;
        display: none;
        z-index: 999;
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(212, 175, 55, 0.4);
    `;
    
    // Hover effect via JS
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.backgroundColor = 'var(--gold-dark)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.backgroundColor = 'var(--gold)';
    });
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// ============================================
// Advanced UI/UX Effects
// ============================================

// 1. Custom Cursor
const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

if (cursor && cursor2) {
    document.addEventListener('mousemove', function(e) {
        cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
    
    // Add hover effect for links and buttons
    const links = document.querySelectorAll('a, button, .service-card, .package-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursor2.classList.add('active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursor2.classList.remove('active');
        });
    });
}

// 2. Typed.js Initialization (Hero Subtitle)
if (document.querySelector('.typed-text')) {
    new Typed('.typed-text', {
        strings: [
            'رحلات الحج والعمرة والسياحة بأفضل تنظيم وخدمات مميزة.',
            'نضمن لك راحة البال طوال رحلتك الإيمانية.',
            'عروض طيران مميزة وأسعار تنافسية لا تقبل المنافسة.',
            'الرمال.. رفيق دربك في كل رحلة.'
        ],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// 3. Particles.js Initialization (Hero Background)
if (document.getElementById('particles-js')) {
    particlesJS('particles-js', {
        "particles": {
            "number": { "value": 50, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#D4AF37" },
            "shape": { "type": "circle" },
            "opacity": { "value": 0.5, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": true, "speed": 2, "size_min": 0.1, "sync": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#D4AF37", "opacity": 0.2, "width": 1 },
            "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "window",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 0.5 } }, "push": { "particles_nb": 4 } }
        },
        "retina_detect": true
    });
}

// 4. Counters Animation
const counters = document.querySelectorAll('.counter');
let completed = false;

window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('stats');
    if (!statsSection) return;
    
    const sectionTop = statsSection.offsetTop;
    const sectionHeight = statsSection.clientHeight;
    
    if (window.scrollY >= (sectionTop - window.innerHeight + sectionHeight / 2) && !completed) {
        completed = true;
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const increment = target / 100; // Adjust speed here
            
            let count = 0;
            const updateCount = () => {
                count += increment;
                if (count < target) {
                    counter.innerText = Math.ceil(count).toLocaleString('ar-SA');
                    requestAnimationFrame(updateCount);
                } else {
                    counter.innerText = target.toLocaleString('ar-SA') + '+';
                }
            };
            updateCount();
        });
    }
});

// ============================================
// Ultra-Premium Aesthetics Logic
// ============================================

// 5. Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
            // Start animations after preloader
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 800); // Small delay to ensure smooth transition
    }
});

// 6. Scroll Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = scrolled + '%';
    }
});

// 7. Magnetic Buttons Effect
const magneticElements = document.querySelectorAll('.btn-gold, .btn-primary, .btn-outline, .btn-whatsapp');
magneticElements.forEach(elem => {
    elem.classList.add('btn-magnetic');
    elem.addEventListener('mousemove', function(e) {
        const position = elem.getBoundingClientRect();
        const x = e.clientX - position.left - position.width / 2;
        const y = e.clientY - position.top - position.height / 2;
        elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    elem.addEventListener('mouseleave', function() {
        elem.style.transform = 'translate(0px, 0px)';
    });
});
