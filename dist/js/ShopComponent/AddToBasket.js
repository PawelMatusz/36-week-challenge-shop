import { ShopSelectors } from './ShopSelectors.js';
import { RemoveFromBasket } from './RemoveFromBasket.js';

const basket = document.querySelector(ShopSelectors.shopBasket);
const basketCardContainer = document.querySelector(ShopSelectors.basketCard);
basket.innerHTML = '';

export const addToBasket = e => {
  const productsBag = [];
  if (e.target.classList.contains('fa-shopping-basket')) {
    const product = e.target.closest(ShopSelectors.productCard);
    productsBag.push(product.dataset.id);

    if (productsBag.find(item => item === product.dataset.id)) {
      console.log(e.target);
      const btn = e.target;
      btn.classList.remove('fa-shopping-basket');
      btn.classList.add('fa-check-circle');
    }

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

    basketCard.addEventListener('click', e =>
      RemoveFromBasket(e, basketCard, productsBag, product)
    );
  } else return;
};
