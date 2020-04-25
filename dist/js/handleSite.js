const navIcon = document.querySelector('.nav__icon');
const header = document.querySelector('.header');
const navItem = document.querySelectorAll('.header__nav-link');
const shopButton = document.querySelector('.shop__button');
const shopMenu = document.querySelector('.shop__menu');

navIcon.addEventListener('click', () => {
  header.classList.toggle('is-nav-open');
});

navItem.forEach(item => {
  item.addEventListener('click', () => {
    header.classList.remove('is-nav-open');
  });
});

window.addEventListener('scroll', () => {
  if (scrollY > 70) {
    header.classList.add('is-scroll');
  } else {
    header.classList.remove('is-scroll');
  }
});

shopButton.addEventListener('click', () => {
  shopMenu.classList.toggle('is-menu-open');
});
