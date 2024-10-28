document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const filterButtons = document.querySelectorAll('.filter-button');

    // Function to reveal items on scroll
    function revealPortfolioItems() {
        const windowHeight = window.innerHeight;

        portfolioItems.forEach(item => {
            const position = item.getBoundingClientRect().top;

            // Check if the item is in the viewport
            if (position < windowHeight - 100) {
                item.classList.add('visible');
            }
        });
    }

    // Initial check to reveal items
    revealPortfolioItems();

    // Add event listeners for filtering
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                // Ensure classes are checked correctly
                const itemCategory = item.classList;
                
                if (filter === 'all' || itemCategory.contains(filter)) {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });

            // Update active button class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    window.addEventListener('scroll', revealPortfolioItems);
});
