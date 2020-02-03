const menuIcon = document.querySelector('.nav__icon');
const header = document.querySelector('.header');

menuIcon.addEventListener('click', function() {
  header.classList.toggle('is-nav-open');
});

menuItem.forEach(function(item) {
  item.addEventListener('click', () => {
    menuIcon.classList.remove('open');
  });
});
