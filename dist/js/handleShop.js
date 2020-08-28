import { addProducts } from './ShopComponent/AddProducts.js';
import { filterProducts } from './ShopComponent/FilterProducts.js';
import { getProducts } from './ShopComponent/GetProducts.js';
import { handleSelectChange } from './ShopComponent/HandleSelectChange.js';
import { filterByCategories } from './ShopComponent/FilterByCategories.js';
import { addSupToButton } from './ShopComponent/AddSupToButton.js';
import { ShopSelectors } from './ShopComponent/ShopSelectors.js';

const sortSelect = document.querySelector(ShopSelectors.sort),
  filterPrice = document.querySelector(ShopSelectors.price),
  buttons = document.querySelectorAll(ShopSelectors.categoriesButtons);

let items = [];

getProducts().then(products => {
  items.push(...products);
  addProducts(products);
  addSupToButton(items, buttons);
});

filterPrice.addEventListener('click', () => filterProducts(items));

sortSelect.addEventListener('change', () => handleSelectChange(items));

buttons.forEach(button => {
  button.addEventListener('click', () => filterByCategories(items, button));
});
