import { ShopSelectors } from './ShopSelectors.js';

export const addToBasket = (e, newCard) => {
  const shopBasket = document.querySelector(ShopSelectors.shopBasket);
  if (e.target.classList.contains('product__card-like')) {
    e.target.classList.toggle('product__card-like-is-active');
  }
  if (e.target.classList.contains('fa-shopping-basket')) {
    let newItem = newCard.cloneNode(true);
    shopBasket.appendChild(newItem);
  }
};
