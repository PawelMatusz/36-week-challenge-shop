const Selectors = {
  icon: '[data-nav-icon]',
  header: '[data-header]',
  item: '[data-nav-link]',
  shopButton: '[data-shop-button]',
  shopMenu: '[data-shop-menu]',
};

const navIcon = document.querySelector(Selectors.icon);
const header = document.querySelector(Selectors.header);
const navItem = document.querySelectorAll(Selectors.item);
const shopButton = document.querySelector(Selectors.shopButton);
const shopMenu = document.querySelector(Selectors.shopMenu);

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
