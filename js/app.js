const overlay = document.querySelector('.overlay');
const searchBoxToggleBtn = document.querySelector('.header__search-icon--1200');
const searchBox = document.querySelector('.header__search-box--1200');

const toggleSearchBoxHandler = () => {
  overlay.classList.toggle('hidden');
  searchBox.classList.toggle('hidden');
};

searchBoxToggleBtn.addEventListener('click', toggleSearchBoxHandler);
overlay.addEventListener('click', toggleSearchBoxHandler);
