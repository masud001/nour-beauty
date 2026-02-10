/**
 * FilterManager
 * Handles frontend filtering logic, active filter display, and URL state management.
 * Designed to be backend-agnostic but optimized for CodeIgniter query strings.
 */
class FilterManager {
    constructor(options = {}) {
        this.containerSelector = options.containerSelector || '.active-filters-wrapper .d-flex';
        this.filterItemSelector = options.filterItemSelector || '.dropdown-menu li';
        this.clearAllSelector = options.clearAllSelector || '.clear-all-btn';
        
        // State to hold active filters
        // Structure: [{ type: 'category', value: 'hair-care', label: 'Hair Care' }]
        this.activeFilters = [];
        
        // Initialize
        this.init();
    }

    init() {
        this.container = document.querySelector(this.containerSelector);
        if (!this.container) {
            console.error('FilterManager: Container not found');
            return;
        }

        // Load filters from URL on startup
        this.loadFiltersFromURL();
        
        // Render initial state
        this.render();

        // Bind global events
        this.bindEvents();
    }

    /**
     * Parses URL query parameters and populates activeFilters
     * CodeIgniter style: ?category=face&brand=saie
     * For multiple values: ?category=face,body (comma separated) or ?category[]=face&category[]=body
     * We will support comma separated for simplicity in this demo.
     */
    loadFiltersFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        params.forEach((value, key) => {
            // Skip non-filter params if needed (e.g., sort, page)
            if (['sort', 'page', 'per_page'].includes(key)) return;

            const values = value.split(',');
            values.forEach(val => {
                if (val.trim()) {
                    this.activeFilters.push({
                        type: key,
                        value: val,
                        // Capitalize first letter for label if not provided
                        label: val.charAt(0).toUpperCase() + val.slice(1).replace(/-/g, ' ') 
                    });
                }
            });
        });
    }

    /**
     * Adds a filter and updates state/URL
     */
    addFilter(type, value, label) {
        // Avoid duplicates
        const exists = this.activeFilters.some(f => f.type === type && f.value === value);
        if (exists) return;

        this.activeFilters.push({ type, value, label });
        this.updateURL();
        this.render();
    }

    /**
     * Removes a filter
     */
    removeFilter(type, value) {
        this.activeFilters = this.activeFilters.filter(f => !(f.type === type && f.value === value));
        this.updateURL();
        this.render();
    }

    /**
     * Clears all filters
     */
    clearAll() {
        this.activeFilters = [];
        this.updateURL();
        this.render();
    }

    /**
     * Updates the browser URL without reloading
     */
    updateURL() {
        const url = new URL(window.location);
        const params = new URLSearchParams();

        // Group filters by type
        const groups = {};
        this.activeFilters.forEach(f => {
            if (!groups[f.type]) groups[f.type] = [];
            groups[f.type].push(f.value);
        });

        // Add to params
        for (const type in groups) {
            params.set(type, groups[type].join(','));
        }

        // Preserve other params if necessary, or just replace
        url.search = params.toString();
        window.history.pushState({}, '', url);
        
        // Dispatch event for other components (e.g. product grid re-loader)
        window.dispatchEvent(new CustomEvent('filters-updated', { detail: this.activeFilters }));
    }

    /**
     * Renders the active filter tags
     */
    render() {
        if (!this.container) return;

        // Clear current content
        this.container.innerHTML = '';

        // If no filters, hide the wrapper (optional, or just leave empty)
        const wrapper = this.container.closest('.active-filters-wrapper');
        if (this.activeFilters.length === 0) {
            if (wrapper) wrapper.style.display = 'none';
            return;
        } else {
            if (wrapper) wrapper.style.display = 'block';
        }

        // Generate Tags
        this.activeFilters.forEach(filter => {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                ${filter.label}
                <button type="button" class="btn-close-custom" aria-label="Remove filter">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            `;

            // Bind remove event
            tag.querySelector('button').addEventListener('click', () => {
                this.removeFilter(filter.type, filter.value);
            });

            this.container.appendChild(tag);
        });

        // Add "Clear All" button
        const clearBtn = document.createElement('a');
        clearBtn.href = '#';
        clearBtn.className = 'clear-all-btn';
        clearBtn.textContent = 'Clear All';
        clearBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.clearAll();
        });
        
        this.container.appendChild(clearBtn);
    }

    /**
     * Binds click events to filter options in the UI
     * This allows the static HTML dropdowns to function as mock filters
     */
    bindEvents() {
        // Find all potential filter items
        // In the provided HTML, they are just <li> elements inside dropdowns
        // We'll attach listeners to them. 
        // Note: In a real app, you might want specific classes or data attributes.
        const items = document.querySelectorAll(this.filterItemSelector);
        
        items.forEach(item => {
            // Make them look clickable
            item.style.cursor = 'pointer';
            
            item.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent dropdown from closing immediately if desired

                // Try to derive data from the element
                // Defaulting to "category" for this demo since markup lacks data attributes
                const label = item.textContent.trim();
                const value = label.toLowerCase().replace(/\s+/g, '-');
                const type = 'filter'; // Generic type, or try to find parent dropdown label

                this.addFilter(type, value, label);
            });
        });
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    window.filterManager = new FilterManager();
});
