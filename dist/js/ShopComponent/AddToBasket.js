import { ShopSelectors } from './ShopSelectors.js';

export const addToBasket = (e, newCard) => {
  const shopBasket = document.querySelector(ShopSelectors.shopBasket);
  if (e.target.classList.contains('fa-shopping-basket')) {
    let newItem = newCard.cloneNode(true);
    shopBasket.appendChild(newItem);
  }
  console.log(newCard);
};
