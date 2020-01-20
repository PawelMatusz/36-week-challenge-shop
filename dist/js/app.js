const menuIcon = document.querySelector('.nav__icon');
const navbar = document.querySelector('.header__nav--mobile');
const menuItem = document.querySelectorAll('.header__nav-item--mobile ');

menuIcon.addEventListener('click', function() {
  this.classList.toggle('open');
  if (this.classList.contains('open')) {
    navbar.style.display = 'block';
  } else {
    navbar.style.display = 'none';
  }
});

menuItem.forEach(function(item) {
  item.addEventListener('click', () => {
    navbar.style.display = 'none';
    menuIcon.classList.remove('open');
  });
});
