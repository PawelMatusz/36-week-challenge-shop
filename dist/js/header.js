const menuIcon = document.querySelector('.nav__icon');
const header = document.querySelector('.header');
const menuItem = document.querySelectorAll('.header__nav-link');

menuIcon.addEventListener('click', function() {
  header.classList.toggle('is-nav-open');
});

menuItem.forEach(function(item) {
  item.addEventListener('click', () => {
    menuIcon.classList.remove('is-nav-open');
  });
});

window.addEventListener('scroll', () => {
  if (scrollY > 70) {
    header.classList.add('is-scroll');
  } else {
    header.classList.remove('is-scroll');
  }
});
