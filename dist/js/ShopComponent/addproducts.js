// https://github.com/TylerPottsDev/vanillajs-pagination
import { SetupPagination } from './ShopPagination.js';
import { displayList } from './DisplayList.js';

let likesProducts = [];

export const addProducts = products => {
  const productsIndex = document.querySelector('.products__index');
  let rows = 6;
  let current_page = 1;
  const pagination_element = document.querySelector('.products__pagination');
  displayList(products, productsIndex, rows, current_page);
  SetupPagination(products, pagination_element, rows);
};
