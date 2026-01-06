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

  // Countdown timer
  const countdownEl = document.getElementById("saleCountdown");
  if (countdownEl) {
    const targetAttr = countdownEl.getAttribute("data-target-date");
    const targetDate = targetAttr ? new Date(targetAttr) : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const ddEl = countdownEl.querySelector(".dd");
    const hhEl = countdownEl.querySelector(".hh");
    const mmEl = countdownEl.querySelector(".mm");
    const ssEl = countdownEl.querySelector(".ss");
    function pad(n) { return String(n).padStart(2, "0"); }
    function tick() {
      const now = new Date();
      const diff = Math.max(0, targetDate - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      if (ddEl) ddEl.textContent = pad(days);
      if (hhEl) hhEl.textContent = pad(hours);
      if (mmEl) mmEl.textContent = pad(mins);
      if (ssEl) ssEl.textContent = pad(secs);
    }
    tick();
    setInterval(tick, 1000);
  }
});
