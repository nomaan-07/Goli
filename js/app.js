const overlay = document.querySelector('.overlay');
const headerSearchBoxToggleBtn = document.querySelector('.header__search-icon--1200');
const headerSearchBox = document.querySelector('.header__search-box--1200');
const headerSearchInput1200 = document.querySelector('.header__search-input--1200');

const addHiddenClassByOverlay = () => {
  overlay.classList.add('hidden');
  headerSearchBox.classList.add('hidden');
};

const showSearchBox = () => {
  headerSearchInput1200.value = '';
  setTimeout(() => {
    headerSearchInput1200.focus();
  }, 0);
  overlay.classList.remove('hidden');
  headerSearchBox.classList.remove('hidden');
};

headerSearchBoxToggleBtn.addEventListener('click', showSearchBox);
overlay.addEventListener('click', addHiddenClassByOverlay);
