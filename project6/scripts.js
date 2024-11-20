document.addEventListener('DOMContentLoaded', () => {
  // Add hover effect to nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
          link.style.color = '#6b340f';
      });
      link.addEventListener('mouseout', () => {
          link.style.color = '#8B4513';
      });
  });

  // Add loading animation for images
  const images = document.querySelectorAll('.gallery-item img');
  images.forEach(img => {
      img.style.opacity = '0';
      img.style.transition = 'opacity 0.5s';
      img.addEventListener('load', () => {
          img.style.opacity = '1';
      });
  });
});