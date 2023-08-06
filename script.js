document.addEventListener("DOMContentLoaded", function () {
    const loadingPage = document.querySelector('.loading-page');
    const loadingProgressElement = document.getElementById("loadingProgress");
    let loadingProgress = 0;
    const targetProgress = 100; // Set the target progress (100%) for the loading

    function simulateLoading() {
        if (loadingProgress < targetProgress) {
            loadingProgress += (targetProgress / 100) * 0.5; // Simulate progress increase (slower)
            loadingProgress = Math.min(loadingProgress, targetProgress);
            loadingProgressElement.textContent = `${Math.round(loadingProgress)}%`;
            requestAnimationFrame(simulateLoading);
        }

        if (loadingProgress >= targetProgress) {
            loadingPage.classList.add('hidden'); // Hide the loading page with a transition
        }
    }

    simulateLoading();
});
