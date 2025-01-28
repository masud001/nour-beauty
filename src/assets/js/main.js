import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
console.log("Hello World");

// mobile nav menu
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
