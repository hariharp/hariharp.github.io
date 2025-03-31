document.addEventListener('DOMContentLoaded', function () {
    const introSection = document.querySelector('.intro-section');
    const aboutSection = document.querySelector('.about-section');
    const aboutGallery = document.querySelector('.about-gallery');

    // Function to reveal the intro section when scrolled into view
    function revealIntro() {
        const introPosition = introSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        // Fade in the intro section if it is in view
        if (introPosition < screenPosition) {
            introSection.classList.add('visible');
        } else {
            // Remove the 'visible' class if it's out of view to allow repeated fade-ins
            introSection.classList.remove('visible');
        }
    }
    // Function to handle horizontal scrolling in the "About Me" section
    function handleHorizontalScroll() {
        const aboutPosition = aboutSection.getBoundingClientRect().top;

        if (aboutPosition <= 0) {
            const scrollAmount = window.scrollY - aboutSection.offsetTop;
            aboutGallery.scrollLeft = scrollAmount * 0.2; // Adjust speed as needed
        }
    }

    // Combine scroll events to handle both intro reveal and gallery scrolling
    function onScroll() {
        revealIntro();
        handleHorizontalScroll();
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', onScroll);
});
