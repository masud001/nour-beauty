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
