import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// mobile nav menu for small screen inside canvas
// ------------------

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("button[data-slide]");
  const slideWindows = document.querySelectorAll(".slide-window");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSlide = this.getAttribute("data-slide");
      const slideWindow = document.getElementById(targetSlide);

      // Close all other slide windows
      slideWindows.forEach((window) => {
        if (window.id !== targetSlide) {
          window.classList.remove("open");
        }
      });

      // Toggle the target slide window
      slideWindow.classList.toggle("open");
    });
  });

  // Close button functionality
  const closeButtons = document.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const slideWindow = this.closest(".slide-window");
      slideWindow.classList.remove("open");
    });
  });
});

// header top slider on mobile view
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-item");
  let currentSlide = 0;

  if (slides.length > 0) {
    slides[currentSlide].classList.add("active");
  }

  function showNextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
});
