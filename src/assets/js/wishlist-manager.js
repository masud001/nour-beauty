/**
 * WishlistManager
 * Backend-ready wishlist functionality for Nour Beauty.
 * 
 * CURRENT STATE (Frontend Prototype):
 * - Uses localStorage to persist wishlist items.
 * - Simulates API calls.
 * 
 * FUTURE STATE (CodeIgniter Integration):
 * - Replace `addToWishlist` and `removeFromWishlist` methods with fetch/AJAX calls.
 * - `init()` will likely fetch the initial state from the server.
 */

class WishlistManager {
    constructor() {
        this.storageKey = 'nour_wishlist';
        this.wishlist = this.loadWishlist();
        this.init();
    }

    // Load wishlist from local storage (Simulation of DB fetch)
    loadWishlist() {
        const stored = localStorage.getItem(this.storageKey);
        return stored ? JSON.parse(stored) : [];
    }

    // Initialize event listeners and UI state
    init() {
        // 1. Bind click events to all current and future wishlist buttons
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.wishlist-btn');
            if (btn) {
                e.preventDefault();
                e.stopPropagation();
                this.handleWishlistToggle(btn);
            }
        });

        // 2. Set initial UI state for all buttons on the page
        this.updateAllButtons();

        // 3. Listen for custom events (e.g., if wishlist is updated elsewhere)
        document.addEventListener('wishlist-updated', () => {
            this.wishlist = this.loadWishlist();
            this.updateAllButtons();
        });
    }

    // Handle the click event
    handleWishlistToggle(btn) {
        const productId = btn.dataset.productId;
        
        if (!productId) {
            console.error('Wishlist Error: No data-product-id found on button', btn);
            return;
        }

        if (this.isInWishlist(productId)) {
            this.removeFromWishlist(productId);
        } else {
            this.addToWishlist(productId);
        }
    }

    // Check if product is in wishlist
    isInWishlist(id) {
        return this.wishlist.includes(id.toString());
    }

    // Add to wishlist (Mock API Call)
    addToWishlist(id) {
        // --- BACKEND READY BLOCK ---
        // Future: fetch('/api/wishlist/add', { method: 'POST', body: JSON.stringify({id}) })
        
        if (!this.isInWishlist(id)) {
            this.wishlist.push(id.toString());
            this.saveWishlist();
            this.dispatchUpdateEvent(id, 'added');
            
            // Optional: Show toast/notification here
            console.log(`Product ${id} added to wishlist`);
        }
        // ---------------------------
    }

    // Remove from wishlist (Mock API Call)
    removeFromWishlist(id) {
        // --- BACKEND READY BLOCK ---
        // Future: fetch('/api/wishlist/remove', { method: 'POST', body: JSON.stringify({id}) })

        const index = this.wishlist.indexOf(id.toString());
        if (index > -1) {
            this.wishlist.splice(index, 1);
            this.saveWishlist();
            this.dispatchUpdateEvent(id, 'removed');

            // Optional: Show toast/notification here
            console.log(`Product ${id} removed from wishlist`);
        }
        // ---------------------------
    }

    // Save to local storage
    saveWishlist() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.wishlist));
    }

    // Update UI for all buttons based on current state
    updateAllButtons() {
        const buttons = document.querySelectorAll('.wishlist-btn');
        buttons.forEach(btn => {
            const id = btn.dataset.productId;
            if (id) {
                this.updateButtonState(btn, this.isInWishlist(id));
            }
        });
    }

    // Update a single button's visual state
    updateButtonState(btn, isActive) {
        const icon = btn.querySelector('i');
        if (isActive) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
            icon.style.color = '#ad1f1a'; // Use your brand red color
            btn.classList.add('active');
            btn.setAttribute('aria-label', 'Remove from wishlist');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
            icon.style.color = ''; // Revert to default
            btn.classList.remove('active');
            btn.setAttribute('aria-label', 'Add to wishlist');
        }
    }

    // Notify other components/tabs
    dispatchUpdateEvent(id, action) {
        const event = new CustomEvent('wishlist-updated', {
            detail: { productId: id, action: action }
        });
        document.dispatchEvent(event);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    window.wishlistManager = new WishlistManager();
});
