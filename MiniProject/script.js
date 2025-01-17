// Get all the stars and relevant elements
const stars = document.querySelectorAll('.star');
const ratingValue = document.getElementById('rating-value');
const hiddenRating = document.getElementById('hidden-rating');

// Add event listeners to stars for interactivity
stars.forEach((star) => {
    star.addEventListener('click', () => {
        const rating = star.getAttribute('data-value'); // Get clicked star value
        ratingValue.textContent = rating;              // Update displayed rating
        hiddenRating.value = rating;                  // Update hidden input value
        updateStars(rating);                          // Update star styles
    });
});

// Function to update star styles
function updateStars(rating) {
    stars.forEach((star) => {
        if (star.getAttribute('data-value') <= rating) {
            star.classList.add('selected'); // Highlight selected and previous stars
        } else {
            star.classList.remove('selected'); // Reset unselected stars
        }
    });
}
