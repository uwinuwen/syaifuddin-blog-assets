const searchBtn = document.getElementById('search-btn');
const searchOverlay = document.getElementById('search-overlay');
const closeSearch = document.getElementById('close-search');
const mobileSearchBar = document.getElementById('mobile-search-bar');
const mobileMenu = document.getElementById('mobile-menu');
const mobileBtn = document.getElementById('mobile-menu-button');

// Toggle Search
searchBtn.addEventListener('click', () => {
  if (window.innerWidth >= 768) {
    searchOverlay.style.display = 'flex';
    searchOverlay.querySelector('input').focus();
  } else {
    mobileMenu.style.display = 'none';
    mobileSearchBar.style.display = 'block';
  }
});

// Close Desktop Search
closeSearch.addEventListener('click', () => {
  searchOverlay.style.display = 'none';
});

// Mobile Menu Toggle
mobileBtn.addEventListener('click', () => {
  mobileSearchBar.style.display = 'none';
  mobileMenu.style.display = (mobileMenu.style.display === 'block') ? 'none' : 'block';
});
