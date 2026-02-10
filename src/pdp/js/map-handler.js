
// Default coordinates (Riyadh as per original design, or user preference)
const DEFAULT_LAT = 24.7136;
const DEFAULT_LNG = 46.6753;

let map;
let marker;
let searchTimeout;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize map when modal is shown to ensure correct rendering
    const mapModal = document.getElementById('mapLocationModal');
    mapModal.addEventListener('shown.bs.modal', initMap);

    // Setup search functionality
    const searchInput = document.getElementById('mapSearchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        const query = e.target.value;

        if (query.length < 3) {
            searchResults.classList.add('d-none');
            return;
        }

        // Debounce search
        searchTimeout = setTimeout(() => performSearch(query), 500);
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.add('d-none');
        }
    });

    // Handle Confirm Button
    const confirmBtn = document.getElementById('confirmLocationBtn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const address = document.getElementById('selectedAddress').textContent;
            const lat = marker.getLatLng().lat;
            const lng = marker.getLatLng().lng;

            console.log('Confirmed Location:', { address, lat, lng });

            // Update Order Summary Page Address Display if elements exist
            const titleEl = document.getElementById('userLocationTitle');
            const addressEl = document.getElementById('userLocationAddress');

            if (titleEl && addressEl) {
                // Simple heuristic: Use the first part of the address as the title
                const parts = address.split(',');
                if (parts.length > 0) {
                    titleEl.textContent = parts[0].trim();
                    // If there's a postcode/zip in the second part, maybe append it? 
                    // For now, just first part is usually the specific location or building number, 
                    // but Nominatim returns "Name, Road, City, etc."
                    // Let's try to be a bit smarter or just generic.
                    // Actually, user example: "Riyadh 12244" (City + Zip) as title.
                    // Nominatim might give "Riyadh, Saudi Arabia".
                    // Let's just use the first 2 parts for title if available, otherwise just first.
                    if (parts.length > 1) {
                        titleEl.textContent = `${parts[0].trim()}, ${parts[1].trim()}`;
                    } else {
                        titleEl.textContent = parts[0].trim();
                    }
                }
                addressEl.textContent = address;
            } else {
                // Fallback for Find Store page or others without the specific display
                alert(`Location Confirmed:\n${address}`);
            }

            // Close modal using Bootstrap API
            const modalEl = document.getElementById('mapLocationModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) {
                modal.hide();
            }
        });
    }
});

function initMap() {
    if (map) {
        map.invalidateSize(); // Fix for map not showing correctly in modal
        return;
    }

    // Initialize Leaflet Map
    map = L.map('leafletMap').setView([DEFAULT_LAT, DEFAULT_LNG], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add draggable marker
    marker = L.marker([DEFAULT_LAT, DEFAULT_LNG], {
        draggable: true
    }).addTo(map);

    // Event listener for marker drag end
    marker.on('dragend', function (e) {
        const position = marker.getLatLng();
        updateAddress(position.lat, position.lng);
        map.panTo(position);
    });

    // Event listener for map click to move marker
    map.on('click', function (e) {
        marker.setLatLng(e.latlng);
        updateAddress(e.latlng.lat, e.latlng.lng);
        map.panTo(e.latlng);
    });

    // Initial address fetch
    updateAddress(DEFAULT_LAT, DEFAULT_LNG);
}

async function updateAddress(lat, lng) {
    const addressElement = document.getElementById('selectedAddress');
    addressElement.innerHTML = '<i class="fa-solid fa-spinner fa-spin me-2"></i> Fetching address...';

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();

        if (data && data.display_name) {
            addressElement.textContent = data.display_name;
        } else {
            addressElement.textContent = "Address not found";
        }
    } catch (error) {
        console.error('Error fetching address:', error);
        addressElement.textContent = "Error fetching address. Please try again.";
    }
}

async function performSearch(query) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '<div class="list-group-item">Searching...</div>';
    searchResults.classList.remove('d-none');

    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`);
        const data = await response.json();

        searchResults.innerHTML = '';

        if (data.length === 0) {
            searchResults.innerHTML = '<div class="list-group-item text-muted">No results found</div>';
            return;
        }

        data.slice(0, 5).forEach(result => {
            const item = document.createElement('a');
            item.href = '#';
            item.className = 'list-group-item list-group-item-action';
            item.textContent = result.display_name;

            item.addEventListener('click', (e) => {
                e.preventDefault();
                const lat = parseFloat(result.lat);
                const lon = parseFloat(result.lon);

                // Update map and marker
                map.setView([lat, lon], 15);
                marker.setLatLng([lat, lon]);
                updateAddress(lat, lon);

                // Clear search
                document.getElementById('mapSearchInput').value = result.display_name;
                searchResults.classList.add('d-none');
            });

            searchResults.appendChild(item);
        });

    } catch (error) {
        console.error('Search error:', error);
        searchResults.innerHTML = '<div class="list-group-item text-danger">Error searching location</div>';
    }
}
