document.addEventListener('DOMContentLoaded', () => {
    const sr = ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 1500,
      delay: 20,
    });
  
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-image, .services-container, .portfolio-box, .contact', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-image,.edu-image', { origin: 'left' });
    sr.reveal('.about-content p, .about-content, .about-content h3,.edu-content', { origin: 'right' });
  
    // Rest of your JavaScript code

  });
