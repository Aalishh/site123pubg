
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const mobileToggle = document.querySelector('.mobile-toggle');
            const mainNav = document.querySelector('.main-nav');
            
            if (mobileToggle && mainNav) {
                mobileToggle.addEventListener('click', function() {
                    mainNav.classList.toggle('active');
                });
            }
            
            // Header Scroll Effect
            const header = document.querySelector('.header');
            if (header) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            }
            
            // Smooth Scrolling for Anchor Links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href').substring(1);
                    if (!targetId) return;
                    
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (mainNav.classList.contains('active')) {
                            mainNav.classList.remove('active');
                        }
                    }
                });
            });
            
            // Contact Form Submission
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    
                    // Here you would typically send this data to a server
                    // For this example, we'll just show an alert
                    alert(`Спасибо, ${name}! Ваше сообщение было отправлено.\n\nМы свяжемся с вами по адресу ${email} в ближайшее время.`);
                    
                    // Reset form
                    contactForm.reset();
                });
            }
        });
    