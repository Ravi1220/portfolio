document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav && navLinks.length > 0) {
        // Toggle navigation
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('burger-active');

            // Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }


    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Resume modal
    const modal = document.getElementById('resume-modal');
    const btn = document.getElementById('viewResumeBtn');
    const span = document.querySelector('.close');

    if (btn && modal && span) {
        btn.onclick = () => {
            modal?.style.display = 'block';
        }

        span.onclick = () => {
            modal?.style.display = 'none';
        }

        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }

    // Form submission
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            console.log('Form submitted:', {
                name: form.name.value,
                email: form.email.value,
                message: form.message.value
            });
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
});

