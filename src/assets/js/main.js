// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";

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

  // Account pages – mobile menu overlay
  // ------------------
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
  const mobileMenuBtn     = document.getElementById('mobileMenuBtn');
  const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');

  if (mobileMenuOverlay && mobileMenuBtn && mobileMenuCloseBtn) {
    function openMobileMenu() {
      mobileMenuOverlay.style.transform = 'translateX(0)';
      document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
      mobileMenuOverlay.style.transform = 'translateX(-100%)';
      document.body.style.overflow = '';
    }

    mobileMenuBtn.addEventListener('click', openMobileMenu);
    mobileMenuCloseBtn.addEventListener('click', closeMobileMenu);

    // Close when clicking outside the menu panel
    mobileMenuOverlay.addEventListener('click', function (e) {
      if (e.target === mobileMenuOverlay) closeMobileMenu();
    });
  }

  // Sidebar active link
  // ------------------
  const currentFilename = window.location.pathname.split('/').filter(Boolean).pop() || 'index.html';

  const sidebarLinks = document.querySelectorAll('.sidebar-nav .nav-section ul a[href]');
  sidebarLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkFilename = new URL(href, window.location.href).pathname.split('/').filter(Boolean).pop() || '';
    const isActive = linkFilename === currentFilename;

    link.classList.toggle('active', isActive);
  });
});
