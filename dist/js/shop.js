import { addProducts } from '../js/ShopComponent/AddProducts.js';
import { filterProducts } from '../js/ShopComponent/FilterProducts.js';
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

/* TODO handle categories filter


  // const categoriesButton = [
  //   ...document.querySelectorAll('.menu__categories-item'),
  // ];

  // categoriesButton.forEach(button =>
  //   button.addEventListener('click', () => {
  //     const btn = button.dataset.categories;

  //     let prdd = products.filter(produ => produ.categories === btn);
  //     addProducts(prdd);
  //   }),
  // );

*/
