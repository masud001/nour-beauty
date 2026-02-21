document.addEventListener('DOMContentLoaded', function () {
    // Configuration
    const popupDelay = 5000;        // 5 seconds initial delay
    const cooldownMs = 60 * 60 * 1000; // 1 hour in milliseconds
    const storageKey = 'promoPopupLastShown';
    const popupId = 'promoPopupModal';

    // Only show if never shown before OR more than 1 hour has passed
    const lastShown = localStorage.getItem(storageKey);
    const shouldShow = !lastShown || (Date.now() - parseInt(lastShown, 10)) >= cooldownMs;

    if (shouldShow) {
        setTimeout(() => {
            const modalElement = document.getElementById(popupId);
            if (modalElement && window.bootstrap) {
                const myModal = new window.bootstrap.Modal(modalElement, {
                    backdrop: 'static',
                    keyboard: false
                });
                modalElement.addEventListener('show.bs.modal', () => {
                    modalElement.removeAttribute('aria-hidden');
                    // Save the timestamp when the popup is actually displayed
                    localStorage.setItem(storageKey, Date.now().toString());
                });
                modalElement.addEventListener('hidden.bs.modal', () => {
                    modalElement.setAttribute('aria-hidden', 'true');
                });
                myModal.show();
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
