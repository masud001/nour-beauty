document.addEventListener('DOMContentLoaded', function () {
    // Configuration
    const popupDelay = 5000; // 5 seconds
    const popupId = 'promoPopupModal';
    const storageKey = 'nourPopupShown_v1';

    // Check if popup should be shown
    const hasShown = localStorage.getItem(storageKey);

    if (!hasShown) {
        setTimeout(() => {
            const modalElement = document.getElementById(popupId);
            if (modalElement && window.bootstrap) {
                const myModal = new window.bootstrap.Modal(modalElement, {
                    backdrop: 'static', // Prevent closing when clicking outside (optional, maybe distinct)
                    keyboard: false
                });
                myModal.show();

                // Set flag so it doesn't show again in this session/ever
                // For testing, you might want to comment this out or clear localStorage
                // localStorage.setItem(storageKey, 'true'); 

                // Handle "No thanks" and Close button specific logic if needed
                const closeBtns = modalElement.querySelectorAll('[data-bs-dismiss="modal"]');
                closeBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        localStorage.setItem(storageKey, 'true');
                    });
                });
            }
        }, popupDelay);
    }

    // Countdown Timer Logic
    const timerElement = document.querySelector('.countdown-timer');
    if (timerElement) {
        // Set a fixed 15-minute countdown for the visual effect
        let duration = 15 * 60; // 15 minutes in seconds

        function updateTimer() {
            const minutes = Math.floor(duration / 60);
            const seconds = duration % 60;

            const minStr = minutes < 10 ? '0' + minutes : minutes;
            const secStr = seconds < 10 ? '0' + seconds : seconds;

            // Assuming HTML structure: <div class="time-part">14</div> <span class="label">minutes</span> : <div class="time-part">07</div> <span class="label">seconds</span>
            // Let's just update text content for simplicity if strict structure matches
            // Or better, find specific elements if we named them

            const minEl = timerElement.querySelector('.minutes');
            const secEl = timerElement.querySelector('.seconds');

            if (minEl) minEl.textContent = minStr;
            if (secEl) secEl.textContent = secStr;

            if (--duration < 0) {
                duration = 0;
            }
        }

        updateTimer(); // Init
        setInterval(updateTimer, 1000);
    }
});
