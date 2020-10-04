import { ShopSelectors } from './ShopSelectors.js';

export const RemoveFromBasket = (e, basketCard, productsBag, product) => {
  const buttonRemoveOfProduct = product.children[4].children[0];
  if (e.target.classList.contains('fa-times-circle')) {
    e.preventDefault();
    basketCard.outerHTML = '';
    if (productsBag.find(item => item === basketCard.dataset.id)) {
      console.log(basketCard, product.children[4]);
      buttonRemoveOfProduct.classList.remove('fa-check-circle');
      buttonRemoveOfProduct.classList.add('fa-shopping-basket');
    }
  } else return;
};
