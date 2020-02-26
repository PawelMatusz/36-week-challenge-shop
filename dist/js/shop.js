import { addProducts } from '../js/ShopComponent/addproducts.js';
import { filterProducts } from '../js/ShopComponent/filterproducts.js';
import { getProducts } from './ShopComponent/getProducts.js';
import { handleSelectChange } from './ShopComponent/handleSelectChange.js';

const sortSelect = document.querySelector('.products__sort-select');
const filterPrice = document.querySelector('.filter__price-button');

getProducts().then(data => {
  const { products } = data;
  addProducts(products);

  filterPrice.addEventListener('click', () => filterProducts(products));

  sortSelect.addEventListener('change', () => handleSelectChange(products));
});
