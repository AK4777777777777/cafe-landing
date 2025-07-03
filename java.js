const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.hamburger-menu');
const closeIcon = document.querySelector('.close-icon-HB');
const mobileLinks = document.querySelectorAll('.mobile-only-a');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  document.body.classList.add('no-scroll');
});

closeIcon.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  document.body.classList.remove('no-scroll');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log('Link clicked'); // 💡 Debug check
    mobileMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});
