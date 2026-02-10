# Wishlist Feature Documentation

## Overview
The wishlist functionality is designed to be **backend-ready**. It currently runs in a "frontend-only" mode using `localStorage` for persistence, but the architecture (Service Layer Pattern) allows for a seamless switch to a CodeIgniter backend API without rewriting the UI logic.

## 1. Frontend Implementation (Current)

### Architecture
- **`WishlistManager` Class (`src/assets/js/wishlist-manager.js`)**:
  - Handles all logic: adding, removing, saving, and updating the UI.
  - **Single Source of Truth**: The `localStorage` (later, the Database) is the truth. The UI simply reflects this state.
  - **Event-Driven**: Uses custom events (`wishlist-updated`) so if you click a heart in the "New Arrivals" section, the same product in "Best Sellers" updates instantly.

### Usage
To enable wishlist functionality on any product card, you **MUST** add the `data-product-id` attribute to the button.

```html
<!-- REQUIRED FORMAT -->
<button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="UNIQUE_ID_123">
  <i class="fa-regular fa-heart"></i>
</button>
```

### Troubleshooting Common Errors
*   **Error:** `Wishlist Error: No data-product-id found on button`
    *   **Cause:** You added the `.wishlist-btn` class but forgot the `data-product-id="X"` attribute.
    *   **Fix:** Add a unique ID to the button.

## 2. Backend Implementation (CodeIgniter Guide)

When you are ready to connect this to CodeIgniter, follow these steps. **You do NOT need to change the HTML.**

### Step A: Create the Database Table
```sql
CREATE TABLE wishlists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL, -- or session_id for guests
    product_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_wishlist (user_id, product_id)
);
```

### Step B: Create the CodeIgniter Controller (`Wishlist.php`)
Create two simple JSON endpoints:

1.  `POST /wishlist/add`
    *   Input: `{ product_id: 123 }`
    *   Logic: Insert into DB.
    *   Response: `{ status: 'success' }`

2.  `POST /wishlist/remove`
    *   Input: `{ product_id: 123 }`
    *   Logic: Delete from DB.
    *   Response: `{ status: 'success' }`

3.  `GET /wishlist/get_all`
    *   Logic: Return array of product IDs for the current user.
    *   Response: `[123, 456, 789]`

### Step C: Update JavaScript (`src/assets/js/wishlist-manager.js`)
Replace the "Mock API Call" sections in the JS file with real `fetch` calls.

**Example: Replacing `addToWishlist`**
```javascript
// OLD (Frontend Mode)
addToWishlist(id) {
    this.wishlist.push(id);
    this.saveWishlist(); // saves to localStorage
}

// NEW (Backend Mode)
async addToWishlist(id) {
    // 1. Optimistic Update (Update UI immediately for speed)
    this.dispatchUpdateEvent(id, 'added'); 

    // 2. Send to Backend
    try {
        await fetch('/wishlist/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: id })
        });
    } catch (error) {
        console.error('Failed to save to server');
        // Revert UI if server fails
        this.dispatchUpdateEvent(id, 'removed'); 
    }
}
```

## 3. Accessibility (ARIA)
*   **ARIA Labels:** The button dynamically switches `aria-label` between "Add to wishlist" and "Remove from wishlist".
*   **ARIA Hidden Error:** Do **not** use `aria-hidden="true"` on a modal container that is currently visible or contains the focused element. This confuses screen readers.
