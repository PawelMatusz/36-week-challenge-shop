import { ShopSelectors } from './ShopSelectors.js';
import { RemoveFromBasket } from './RemoveFromBasket.js';

const basket = document.querySelector(ShopSelectors.shopBasket);
const basketCardContainer = document.querySelector(ShopSelectors.basketCard);
basket.innerHTML = '';

export const addToBasket = e => {
  if (e.target.classList.contains('fa-shopping-basket')) {
    const product = e.target.closest(ShopSelectors.productCard);

    let basketCard = basketCardContainer.cloneNode(true);
    const basketPhoto = basketCard.querySelector(ShopSelectors.basketPhoto),
      basketDescription = basketCard.querySelector(
        ShopSelectors.basketDescription
      ),
      basketPrice = basketCard.querySelector(ShopSelectors.basketPrice);

    basketPhoto.src = product.querySelector(ShopSelectors.productPhoto).src;
    basketDescription.textContent = product.querySelector(
      ShopSelectors.productDescription
    ).textContent;
    basketPrice.textContent = product.querySelector(
      ShopSelectors.productPrice
    ).textContent;

    basketCard.dataset.id = product.dataset.id;

    basket.appendChild(basketCard);

    basketCard.addEventListener('click', e => RemoveFromBasket(e, basketCard));
  } else return;
};
