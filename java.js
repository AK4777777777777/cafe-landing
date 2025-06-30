const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});


