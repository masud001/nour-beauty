// Wishlist Mobile Menu Interaction
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenuCloseBtn = document.getElementById('mobileMenuCloseBtn');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

    if (mobileMenuBtn && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('open');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    }

    if (mobileMenuCloseBtn && mobileMenuOverlay) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('open');
            document.body.style.overflow = ''; // Restore scrolling
        });
    }

    // OTP Countdown Timer
    function initOtpTimer() {
        const timerContainer = document.getElementById('otp-timer-container');
        if (!timerContainer) return;

        // Use event delegation on timerContainer so we don't have to worry about re-binding
        timerContainer.addEventListener('click', (e) => {
            const resendBtn = e.target.closest('#resend-otp-btn');
            if (!resendBtn) return;

            e.preventDefault();

            let timeLeft = 59;

            const formatTime = (seconds) => {
                const s = seconds < 10 ? '0' + seconds : seconds;
                return `00:${s}`;
            };

            // Set initial timer text
            timerContainer.innerHTML = `<span class="text-muted small">Resend OTP in <span class="text-dark fw-bold">${formatTime(timeLeft)}</span></span>`;

            const countdownInterval = setInterval(() => {
                timeLeft--;

                if (timeLeft < 0) {
                    clearInterval(countdownInterval);
                    // Restore the button
                    timerContainer.innerHTML = `<a href="#" id="resend-otp-btn" class="text-dark small text-decoration-underline fw-medium">Resend OTP</a>`;
                } else {
                    const timerSpan = timerContainer.querySelector('span.text-muted');
                    if (timerSpan) {
                        timerSpan.innerHTML = `Resend OTP in <span class="text-dark fw-bold">${formatTime(timeLeft)}</span>`;
                    }
                }
            }, 1000);
        });
    }

    initOtpTimer();
});
