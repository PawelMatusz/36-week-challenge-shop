// import { addProducts } from './addproducts.js';

export const filterProducts = products => {
  const minInput = document.querySelector('.filter__price-value--min').value;
  const maxInput = document.querySelector('.filter__price-value--max').value;
  const productsIndex = document.querySelector('.products__index');
  const productCard = document.querySelector('.product__card');
  productsIndex.innerHTML = '';
  let prod = products.filter(product => {
    return product.value >= minInput && product.value <= maxInput;
  });

  prod.forEach(product => {
    let newCard = productCard.cloneNode(true);
    const productPhoto = newCard.querySelector('.product__card-photo');
    const productDescription = newCard.querySelector(
      '.product__card-description',
    );
    const productPrice = newCard.querySelector('.product__card-price');

    productPhoto.src = product.image;
    productDescription.innerHTML = product.description;
    productPrice.innerHTML = product.price;

    productsIndex.appendChild(newCard);
  });
};
