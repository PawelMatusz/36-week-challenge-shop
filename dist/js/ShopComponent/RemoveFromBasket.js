import { ShopSelectors } from './ShopSelectors.js';

export const RemoveFromBasket = (e, basketCard) => {
  if (e.target.classList.contains('shop__basket-button')) {
    e.preventDefault();
    basketCard.outerHTML = '';
  } else return;
};
