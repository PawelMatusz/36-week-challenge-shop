// import { addProducts } from './addproducts.js';

export const filterProducts = products => {
  productsIndex.innerHTML = '';
  const filteredProducts = products.filter(
    product => product.value >= minInput && product.value <= maxInput,
  );
  console.log(filteredProducts);
  const productsIndex = document.querySelector('.products__index');
  const productCard = document.querySelector('.product__card');
  productCard.outerHTML = '';
  filteredProducts.forEach(product => {
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
document.querySelector('.filter__price-button').addEventListener('click', e => {
  e.preventDefault();
  const minInput = document.querySelector('.filter__price-value--min').value;
  const maxInput = document.querySelector('.filter__price-value--max').value;
});
