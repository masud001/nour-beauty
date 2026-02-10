import re
import sys

def update_file(file_path, start_id):
    print(f"Reading {file_path}...")
    try:
        with open(file_path, 'r') as f:
            content = f.read()
        
        # Pattern to find the buttons. 
        # Note: The grep output showed they already have data-product-id="3".
        # So we need to match that specific pattern to replace it.
        # <button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="3">
        
        pattern = r'<button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="3">'
        
        parts = content.split(pattern) # This does exact string splitting
        
        # If split didn't work (e.g. whitespace differences), we might need regex.
        # Let's try to match slightly more flexibly if parts length is 1.
        if len(parts) <= 1:
             print("Exact string match failed. Trying regex substitution...")
             # This is a bit more complex with regex substitution while incrementing a counter.
             # We can use re.sub with a callback function.
             
             regex_pattern = r'<button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="3">'
             
             def replace_callback(match):
                 nonlocal start_id
                 new_tag = f'<button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="{start_id}">'
                 start_id += 1
                 return new_tag
                 
             new_content = re.sub(regex_pattern, replace_callback, content)
             
             if new_content == content:
                 print("Regex replacement also found no matches.")
                 return
             
             with open(file_path, 'w') as f:
                 f.write(new_content)
             print(f"Updated file using regex. Last ID: {start_id-1}")
             return

        print(f"Found {len(parts)-1} buttons to update.")
        
        new_content = parts[0]
        current_id = start_id
        
        for part in parts[1:]:
            replacement = f'<button class="wishlist-btn" aria-label="Add to wishlist" data-product-id="{current_id}">'
            new_content += replacement + part
            current_id += 1
            
        with open(file_path, 'w') as f:
            f.write(new_content)
            
        print(f"Successfully updated {file_path}. Last ID used: {current_id-1}")
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

if __name__ == "__main__":
    update_file('/Users/masud/nour-beauty/src/single-blog-page.html', 401)
