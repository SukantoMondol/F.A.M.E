const projectContainers = document.querySelectorAll('.project-container');

projectContainers.forEach(project => {
    // Check conditions and update banner content accordingly
    // Example: Be the first to bid
    const banner = project.querySelector('.banner');
    if (banner) {
        banner.textContent = 'Be the first to bid';
        // Add logic for other conditions (Hot now, Matches your profile)
    }
});

 
projectContainers.forEach(project => {
    // Check conditions and update banner content accordingly
    // Example: Be the first to bid
    const banner = project.querySelector('.banner2');
    if (banner) {
        banner.textContent = 'Hot Project in your area';
        // Add logic for other conditions (Hot now, Matches your profile)
    }
});