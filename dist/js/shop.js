import { addProducts } from './ShopComponent/AddProducts.js';
import { filterProducts } from './ShopComponent/FilterProducts.js';
import { getProducts } from './ShopComponent/GetProducts.js';
import { handleSelectChange } from './ShopComponent/HandleSelectChange.js';

const sortSelect = document.querySelector('.products__sort-select');
const filterPrice = document.querySelector('.filter__price-button');

getProducts().then(data => {
  const { products } = data;
  addProducts(products);

  filterPrice.addEventListener('click', () => filterProducts(products));

  sortSelect.addEventListener('change', () => handleSelectChange(products));
});
