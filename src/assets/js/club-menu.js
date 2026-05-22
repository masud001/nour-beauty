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


});
