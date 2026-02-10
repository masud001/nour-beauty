document.addEventListener('DOMContentLoaded', function () {
    // Configuration
    const popupDelay = 5000; // 5 seconds
    const popupId = 'promoPopupModal';

    // Show popup on every page load
    setTimeout(() => {
        const modalElement = document.getElementById(popupId);
        if (modalElement && window.bootstrap) {
            const myModal = new window.bootstrap.Modal(modalElement, {
                backdrop: 'static', // Prevent closing when clicking outside
                keyboard: false
            });
            // Ensure aria-hidden is removed when shown
            modalElement.addEventListener('show.bs.modal', () => {
                modalElement.removeAttribute('aria-hidden');
            });
            modalElement.addEventListener('hidden.bs.modal', () => {
                modalElement.setAttribute('aria-hidden', 'true');
            });
            myModal.show();
        }
    }, popupDelay);

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
