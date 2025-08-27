// Responsive navigation toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Animate skill bars on scroll (if you have any)
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.progress + '%';
        }
    });
});

// Smooth scrolling for navigation links
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

// Resume download tracking (optional)
document.querySelectorAll('.resume-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const action = this.title.includes('Download') ? 'downloaded' : 'viewed';
        console.log(`Resume ${action}`);
        // You can add analytics tracking here if needed
    });
});
