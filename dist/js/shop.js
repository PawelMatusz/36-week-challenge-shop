import { addProducts } from './ShopComponent/AddProducts.js';
import { filterProducts } from './ShopComponent/FilterProducts.js';
import { getProducts } from './ShopComponent/GetProducts.js';
import { handleSelectChange } from './ShopComponent/HandleSelectChange.js';
import { filterByCategories } from './ShopComponent/FilterByCategories.js';

const sortSelect = document.querySelector('.products__sort-select');
const filterPrice = document.querySelector('.filter__price-button');
const buttons = document.querySelectorAll('[data-categories]');

let items = [];
getProducts().then(data => {
  const { products } = data;
  items = products;
  addProducts(items.slice(0, 6));
});

filterPrice.addEventListener('click', () => filterProducts(items.slice(0, 6)));

sortSelect.addEventListener('change', () =>
  handleSelectChange(items.slice(0, 6))
);

buttons.forEach(button =>
  button.addEventListener('click', () =>
    filterByCategories(items.slice(0, 6), button)
  )
);
