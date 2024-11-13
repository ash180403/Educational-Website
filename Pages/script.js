// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const closeBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('sidebar');
    const toggleSection = document.getElementById('toggleSection');

    // Check if all elements exist
    if (sidebarToggle && closeBtn && sidebar && toggleSection) {
        // Open the sidebar when the sidebar toggle button is clicked
        sidebarToggle.addEventListener('click', function () {
            sidebar.classList.add('open'); // Add the 'open' class to sidebar to show it
            toggleSection.style.display = 'none'; // Hide the toggle section when sidebar is open
        });

        // Close the sidebar when the close button is clicked
        closeBtn.addEventListener('click', function () {
            sidebar.classList.remove('open'); // Remove the 'open' class to hide sidebar
            toggleSection.style.display = 'flex'; // Show the toggle section again
        });
    } else {
        console.error('Some sidebar elements are missing.');
    }
});
