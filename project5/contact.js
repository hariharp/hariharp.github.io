document.addEventListener('DOMContentLoaded', function () {
    const contactImage = document.querySelector('.contact-image');
    let isVisible = false;

    // Check scroll position
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        // If scrolled down by 150px or more and it's not yet visible
        if (scrollPosition > 150 && !isVisible) {
            contactImage.classList.remove('hidden');
            contactImage.classList.add('visible');
            isVisible = true;
        }
    });
});
