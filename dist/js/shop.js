import { addProducts } from '../js/ShopComponent/addproducts.js';
import { filterProducts } from '../js/ShopComponent/filterproducts.js';

fetch('./dist/json/product.json')
  .then(resp => resp.json())
  .then(resp => {
    const products = resp.products;
    addProducts(products);
    document
      .querySelector('.filter__price-button')
      .addEventListener('click', () => filterProducts(products));
  })
  .catch(err => 'error');
