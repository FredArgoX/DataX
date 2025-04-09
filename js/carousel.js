document.addEventListener("DOMContentLoaded", () => {
    const carousels = [
        { id: "algorithmsCarousel", progressId: "progress1" }
    ];

    function updateProgress(carousel, progress) {
        const totalWidth = carousel.scrollWidth;
        const visibleWidth = carousel.clientWidth;

        // If all images fit in the viewport, set progress to 100%
        if (totalWidth === visibleWidth) {
            progress.style.width = "100%";
            return;
        }

        progress.style.width = ((carousel.scrollLeft + visibleWidth) / totalWidth) * 100 + "%";
    }

    function initializeProgressBars() {
        carousels.forEach(({ id, progressId }) => {
            const carousel = document.getElementById(id);
            const progress = document.getElementById(progressId);
            updateProgress(carousel, progress);
        });
    }

    // Attach event listeners
    carousels.forEach(({ id, progressId }) => {
        const carousel = document.getElementById(id);
        const progress = document.getElementById(progressId);
        
        if (carousel) {
            carousel.addEventListener("scroll", () => updateProgress(carousel, progress));
        }
    });

    // Update progress on window resize
    window.addEventListener("resize", initializeProgressBars);

    // Initialize progress bars on page load
    initializeProgressBars();
});