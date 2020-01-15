import { addProducts } from './addproducts.js';
import { filterProducts } from './filterproducts.js';

fetch('./dist/json/product.json')
  .then(resp => resp.json())
  .then(resp => {
    const products = resp.products;
    addProducts(products);
    filterProducts(products);
  })

  .catch(err => 'error');
