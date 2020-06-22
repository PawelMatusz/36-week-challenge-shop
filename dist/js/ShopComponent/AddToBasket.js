import { ShopSelectors } from './ShopSelectors.js';

export const addToBasket = (e, newCard) => {
  const shopBasket = document.querySelector(ShopSelectors.shopBasket);
  if (e.target.classList.contains('fa-shopping-basket')) {
    // let newItem = newCard.cloneNode(true);
    // shopBasket.appendChild(newItem);
  }
  console.log(newCard);
};

// które elementy mają data, querySelectorAll któ®e zawierają "this.data-product" czy el z tą samą data query selectorem basket===element i dodać
