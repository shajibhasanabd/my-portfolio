// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Contact Form Submission Feedback (Optional enhancement)
const form = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

if (form) {
    form.addEventListener('submit', function(e) {
        // If you are using Web3Forms, remove preventDefault if you want standard submission,
        // or keep fetch handling. For easiest setup with Web3Forms without JS complexity, 
        // you can let it submit normally, or use fetch as below:
    });
}