const Selectors = {
  icon: '[data-nav-icon]',
  header: '[data-header]',
  item: '[data-nav-link]',
  shopButton: '[data-shop-button]',
  shopMenu: '[data-shop-menu]',
  newsletterForm: '[data-newsletter-form]',
  newsletterInputEmail: '[data-newsletter-email]',
  newsletterbutton: '[data-newsletter-button]',
};

const navIcon = document.querySelector(Selectors.icon),
  header = document.querySelector(Selectors.header),
  navItem = document.querySelectorAll(Selectors.item),
  shopButton = document.querySelector(Selectors.shopButton),
  shopMenu = document.querySelector(Selectors.shopMenu),
  newsletterForm = document.querySelector(Selectors.newsletterForm),
  newsletterInputEmail = document.querySelector(Selectors.newsletterInputEmail);

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

newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  if (newsletterInputEmail.value.length >= 3) {
    alert(`${newsletterInputEmail.value} zapisany do newslettera!!!`);
  } else {
    alert('Kolego wypełniłeś błędnie nasz super formularz');
  }
});
