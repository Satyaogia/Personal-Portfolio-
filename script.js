// Simple scroll animation (fake AOS-like)
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((sec) => {
      sec.style.opacity = 0;
      sec.style.transition = 'opacity 1s ease-in-out';
    });
  
    const revealOnScroll = () => {
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sec.style.opacity = 1;
        }
      });
    };
  
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
  });