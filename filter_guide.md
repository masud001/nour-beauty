# Filter System Implementation Guide

This guide explains how to use and extend the "Backend-Ready" Frontend Filter System. It is designed to work seamlessly with **CodeIgniter** (or any other backend) by using standard URL Query Parameters (e.g., `?category=skin-care&brand=saie`).

## 1. Frontend Architecture

### File Structure
- **JS Logic:** `src/assets/js/filter-manager.js`
- **HTML Container:** `src/category-page.html` (ID: `#active-filters-container`)

### How It Works
The `FilterManager` class automates the "Active Filters" section.
1.  **Reads URL:** On page load, it parses `?type=value` from the URL.
2.  **Renders Tags:** It dynamically creates the "Active Filter" tags (e.g., "Hair Care [x]").
3.  **Updates State:** When a user adds/removes a filter, it updates the browser URL *without reloading* (using `pushState`), or you can configure it to reload if you prefer server-side rendering for every click.

### Usage
The script is automatically initialized in `category-page.html`.
```javascript
window.filterManager = new FilterManager();
```

To add a filter programmatically (e.g., when clicking a checkbox):
```javascript
// Type: 'category', 'brand', 'price', etc.
// Value: The slug/ID to send to backend
// Label: Text to show in the tag
window.filterManager.addFilter('brand', 'saie', 'Saie Beauty');
```

---

## 2. CodeIgniter Backend Integration

Since the frontend updates the URL (e.g., `yoursite.com/shop?category=hair&brand=saie`), your CodeIgniter Controller simply needs to read these parameters.

### Controller Example (`Product.php`)

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Product extends CI_Controller {

    public function index()
    {
        // 1. Get Query Parameters
        $category = $this->input->get('category'); // e.g., 'hair'
        $brand    = $this->input->get('brand');    // e.g., 'saie'
        $sort     = $this->input->get('sort');

        // 2. Prepare Database Query
        $this->db->select('*');
        $this->db->from('products');

        // Apply Filters if they exist
        if ($category) {
            // Support comma-separated values (e.g., ?category=hair,face)
            $categories = explode(',', $category);
            $this->db->where_in('category_slug', $categories);
        }

        if ($brand) {
            $brands = explode(',', $brand);
            $this->db->where_in('brand_slug', $brands);
        }

        // 3. Get Results
        $data['products'] = $this->db->get()->result();

        // 4. Pass Filters back to View (optional, for server-side rendering state)
        $data['active_filters'] = [
            'category' => $category,
            'brand' => $brand
        ];

        $this->load->view('category_page', $data);
    }
}
```

### Making Filters Clickable in HTML
In your `category_page.php` view, you should generate your filter list dynamically.

**Example: Brand List**
```php
<ul>
    <?php foreach ($brands as $brand): ?>
    <li>
        <a href="#" 
           onclick="window.filterManager.addFilter('brand', '<?= $brand->slug ?>', '<?= $brand->name ?>'); return false;">
           <?= $brand->name ?>
        </a>
    </li>
    <?php endforeach; ?>
</ul>
```

### Handling "Clear All"
The frontend handles the UI for "Clear All". When clicked, it empties the URL parameters. You can listen for the event if you need to trigger an AJAX reload:

```javascript
window.addEventListener('filters-updated', (e) => {
    const currentFilters = e.detail;
    console.log('Filters changed:', currentFilters);
    
    // Option A: Reload page to let CodeIgniter handle it (simplest)
    // window.location.reload();

    // Option B: Fetch new product grid via AJAX (smoother)
    // fetchProducts(window.location.search);
});
```

## 3. Customizing `filter-manager.js`
If you want to change the selectors (e.g., if you rename your HTML classes):

```javascript
window.filterManager = new FilterManager({
    containerSelector: '#my-custom-container',
    filterItemSelector: '.my-filter-checkbox'
});
```
