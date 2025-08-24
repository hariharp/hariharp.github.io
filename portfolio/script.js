document.addEventListener('DOMContentLoaded', function () {
  // Custom cursor
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(function() {
          cursorFollower.style.left = e.clientX + 'px';
          cursorFollower.style.top = e.clientY + 'px';
      }, 100);
  });
  
  // Cursor effects on links
  const links = document.querySelectorAll('a, button');
  links.forEach(link => {
      link.addEventListener('mouseenter', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorFollower.style.width = '50px';
          cursorFollower.style.height = '50px';
          cursorFollower.style.backgroundColor = 'rgba(255, 51, 102, 0.1)';
      });
      
      link.addEventListener('mouseleave', () => {
          cursor.style.transform = 'translate(-50%, -50%) scale(1)';
          cursorFollower.style.width = '30px';
          cursorFollower.style.height = '30px';
          cursorFollower.style.backgroundColor = 'transparent';
      });
  });
  
  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
          header.classList.add('scrolled');
      } else {
          header.classList.remove('scrolled');
      }
  });
  
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 100,
                  behavior: 'smooth'
              });
              
              // Close mobile menu if open
              menuToggle.classList.remove('active');
              navLinks.classList.remove('active');
          }
      });
  });
  
  // Intro section reveal on scroll (from your original code)
  const introSection = document.querySelector('.intro-section');
  if (introSection) {
      function revealIntro() {
          const introPosition = introSection.getBoundingClientRect().top;
          const screenPosition = window.innerHeight;
  
          if (introPosition < screenPosition) {
              introSection.classList.add('visible');
          } else {
              introSection.classList.remove('visible');
          }
      }
      
      window.addEventListener('scroll', revealIntro);
      revealIntro(); // Check on initial load
  }
  
  // About gallery horizontal scroll (from your original code)
  const aboutSection = document.querySelector('.about-section');
  const aboutGallery = document.querySelector('.about-gallery');
  
  if (aboutSection && aboutGallery) {
      function handleHorizontalScroll() {
          const aboutPosition = aboutSection.getBoundingClientRect().top;
  
          if (aboutPosition <= 0) {
              const scrollAmount = window.scrollY - aboutSection.offsetTop;
              aboutGallery.scrollLeft = scrollAmount * 0.5; // Increased speed
          }
      }
      
      window.addEventListener('scroll', handleHorizontalScroll);
  }
  
  // Portfolio filter functionality (for portfolio page)
  const filterButtons = document.querySelectorAll('.filter-button');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  if (filterButtons.length > 0 && portfolioItems.length > 0) {
      filterButtons.forEach(button => {
          button.addEventListener('click', () => {
              // Remove active class from all buttons
              filterButtons.forEach(btn => btn.classList.remove('active'));
              
              // Add active class to clicked button
              button.classList.add('active');
              
              // Get filter value
              const filter = button.getAttribute('data-filter');
              
              // Filter portfolio items
              portfolioItems.forEach(item => {
                  if (filter === 'all' || item.classList.contains(filter)) {
                      item.style.display = 'block';
                      setTimeout(() => {
                          item.style.opacity = '1';
                          item.style.transform = 'translateY(0)';
                      }, 100);
                  } else {
                      item.style.opacity = '0';
                      item.style.transform = 'translateY(20px)';
                      setTimeout(() => {
                          item.style.display = 'none';
                      }, 500);
                  }
              });
          });
      });
  }
});