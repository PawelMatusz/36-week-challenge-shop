import { addProducts } from './ShopComponent/AddProducts.js';
import { filterProducts } from './ShopComponent/FilterProducts.js';
import { getProducts } from './ShopComponent/GetProducts.js';
import { handleSelectChange } from './ShopComponent/HandleSelectChange.js';
import { filterByCategories } from './ShopComponent/FilterByCategories.js';

const sortSelect = document.querySelector('.products__sort-select');
const filterPrice = document.querySelector('.filter__price-button');
const buttons = document.querySelectorAll('[data-categories]');

getProducts().then(data => {
  const { products } = data;
  addProducts(products);

  filterPrice.addEventListener('click', () => filterProducts(products));

  sortSelect.addEventListener('change', () => handleSelectChange(products));

  buttons.forEach(button =>
    button.addEventListener('click', () => filterByCategories(products, button))
  );
});
