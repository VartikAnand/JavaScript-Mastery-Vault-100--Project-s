// JavaScript code for filtering functionality
window.addEventListener('DOMContentLoaded', function() {
    const categorySelect = document.getElementById('category');
    const items = document.querySelectorAll('.item');
  
    categorySelect.addEventListener('change', function() {
      const selectedCategory = categorySelect.value;
  
      items.forEach(function(item) {
        if (selectedCategory === 'all' || item.classList.contains(selectedCategory)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
  