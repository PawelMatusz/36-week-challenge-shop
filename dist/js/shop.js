import { addProducts } from './addproducts.js';

fetch('./dist/json/product.json')
  .then(resp => resp.json())
  .then(resp => {
    addProducts(resp);
  })
  .catch(err => 'error');
