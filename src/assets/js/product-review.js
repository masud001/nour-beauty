
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.star-rating-selector');
  if (!container) return;

  const starItems = container.querySelectorAll('.star-item');
  const ratingInput = document.getElementById('selectedRating');

  starItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remove active class from all items
      starItems.forEach(star => star.classList.remove('active'));

      // Add active class to clicked item
      this.classList.add('active');

      // Update hidden input value
      const value = this.getAttribute('data-value');
      if (ratingInput) ratingInput.value = value;
    });
  });

  // Character count handler
  const reviewText = document.getElementById('reviewText');
  const charCount = document.getElementById('charCount');

  if (reviewText && charCount) {
    reviewText.addEventListener('input', function () {
      charCount.textContent = this.value.length;
    });
  }
});
