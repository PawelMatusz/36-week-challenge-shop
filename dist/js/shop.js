import { addProducts } from './addproducts.js';
import { filterProducts } from './filterproducts.js';

fetch('./dist/json/product.json')
  .then(resp => resp.json())
  .then(resp => {
    const products = resp.products;

    filterProducts(products);

    document
      .querySelector('.filter__price-button')
      .addEventListener('click', () => filterProducts(products));
  })
  .catch(err => 'error');
