import { addToBasket } from './AddToBasket.js';
import { ShopSelectors } from './ShopSelectors.js';
const productCard = document.querySelector(ShopSelectors.productCard);
const productsIndex = document.querySelector(ShopSelectors.productsIndex);

export const displayList = (items, wrapper, rows_per_page, page) => {
  wrapper.innerHTML = '';
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    let newCard = productCard.cloneNode(true);
    const productPhoto = newCard.querySelector('.product__card-photo');
    const productDescription = newCard.querySelector(
      '.product__card-description'
    );
    const productPrice = newCard.querySelector('.product__card-price');

    productPhoto.src = item.image;
    productDescription.innerHTML = item.description;
    productPrice.innerHTML = item.price;
    productsIndex.appendChild(newCard);
    newCard.addEventListener('click', e => addToBasket(e, newCard));
  }
};
