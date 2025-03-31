document.addEventListener('DOMContentLoaded', function () {
    // Portfolio filtering functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Hide preloader when page is loaded
    window.addEventListener('load', function() {
        document.getElementById('preloader').style.display = 'none';
    });

    // Function to reveal items on scroll with enhanced animation
    function revealPortfolioItems() {
        const windowHeight = window.innerHeight;

        portfolioItems.forEach((item, index) => {
            const position = item.getBoundingClientRect().top;

            // Check if the item is in the viewport
            if (position < windowHeight - 100) {
                // Add a slight delay based on index for cascade effect
                setTimeout(() => {
                    item.classList.add('visible');
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 50);
            }
        });
    }

    // Initial check to reveal items
    revealPortfolioItems();

    // Add event listeners for filtering with enhanced animations
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filter = button.getAttribute('data-filter');
            
            // Filter items with animations
            portfolioItems.forEach((item, index) => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    // Show item with animation
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 50); // Staggered animation
                } else {
                    // Hide item with animation
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // Wait for fade out animation
                }
            });
        });
    });

    // Check on scroll
    window.addEventListener('scroll', revealPortfolioItems);
    
    // Custom cursor effects
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (cursor && cursorFollower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });
        
        // Custom cursor effects for portfolio items
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
                cursorFollower.classList.add('follower-grow');
            });
            
            item.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
                cursorFollower.classList.remove('follower-grow');
            });
        });
        
        // Custom cursor effects for buttons
        const buttons = document.querySelectorAll('button, a');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                cursor.classList.add('cursor-grow');
                cursorFollower.classList.add('follower-shrink');
            });
            
            button.addEventListener('mouseleave', () => {
                cursor.classList.remove('cursor-grow');
                cursorFollower.classList.remove('follower-shrink');
            });
        });
    }
    
    // Scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);
    
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        
        scrollIndicator.style.width = scrollPercentage + '%';
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }
    
    // Add floating shapes for visual interest
    const createFloatingShapes = () => {
        const shapes = ['circle', 'square', 'triangle'];
        const colors = ['#ff3366', '#6b48ff', '#00e5ff'];
        const container = document.querySelector('.portfolio-section');
        
        if (container) {
            for (let i = 0; i < 5; i++) {
                const shape = document.createElement('div');
                const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                
                shape.className = `floating-shape ${randomShape}`;
                shape.style.backgroundColor = randomColor;
                shape.style.left = Math.random() * 100 + 'vw';
                shape.style.top = Math.random() * 100 + 'vh';
                shape.style.animationDuration = (Math.random() * 15 + 15) + 's';
                shape.style.animationDelay = (Math.random() * 5) + 's';
                
                container.appendChild(shape);
            }
        }
    };
    
    createFloatingShapes();
});