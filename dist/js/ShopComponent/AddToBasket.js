import { ShopSelectors } from './ShopSelectors.js';

const shopBasket = document.querySelector(ShopSelectors.shopBasket);
const basketCardContainer = document.querySelector(ShopSelectors.basketCard);
shopBasket.innerHTML = '';
export const addToBasket = e => {
  if (e.target.classList.contains('fa-shopping-basket')) {
    const product = e.target.parentElement.parentElement;

    let basketCard = basketCardContainer.cloneNode(true);
    const basketPhoto = basketCard.querySelector('.shop__basket-photo'),
      basketDescription = basketCard.querySelector('.shop__basket-description'),
      basketPrice = basketCard.querySelector('.shop__basket-price');

    basketPhoto.src = product.querySelector('.product__card-photo').src;
    basketDescription.textContent = product.querySelector(
      '.product__card-description'
    ).textContent;
    basketPrice.textContent = product.querySelector(
      '.product__card-price'
    ).textContent;
    shopBasket.appendChild(basketCard);
  } else return;
};
