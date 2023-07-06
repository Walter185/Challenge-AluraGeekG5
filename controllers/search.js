document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase();
  
      if (searchTerm.trim() === '') {
        clearResults();
        return;
      }

      fetch('http://localhost:3000/producto')
        .then(response => response.json())
        .then(data => {
          const filteredProducts = data.filter(product => product.name.toLowerCase().includes(searchTerm));
  
          renderResults(filteredProducts);
        })
        .catch(error => console.error('Error:', error));
    });
  
    function renderResults(products) {
      searchResults.innerHTML = '';
  
      if (products.length === 0) {
        searchResults.innerHTML = '<li>No se encontraron productos.</li>';
      } else {
        products.forEach(product => {
          const li = document.createElement('li');
          li.textContent = product.name;
          searchResults.appendChild(li);
        });
      }
    }
    function clearResults() {
        searchResults.innerHTML = '';
      }
  });
  