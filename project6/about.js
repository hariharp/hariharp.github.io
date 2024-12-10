document.addEventListener('DOMContentLoaded', () => {
    const milestones = document.querySelectorAll('.milestone');

    milestones.forEach(milestone => {
        const toggleButton = milestone.querySelector('.toggle-button');
        const header = milestone.querySelector('.milestone-header');

        const toggleMilestone = () => {
            const isExpanded = milestone.getAttribute('data-expanded') === 'true';
            milestone.setAttribute('data-expanded', !isExpanded);

            if (!isExpanded) {
                milestone.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };

        header.addEventListener('click', toggleMilestone);
        toggleButton.addEventListener('click', toggleMilestone);
    });
});
