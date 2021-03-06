// https://github.com/TylerPottsDev/vanillajs-pagination
import { SetupPagination } from './ShopPagination.js';
import { displayList } from './DisplayList.js';
import { ShopSelectors } from './ShopSelectors.js';

export const addProducts = products => {
  const items = [];
  items.push(...products);
  const productsIndex = document.querySelector(ShopSelectors.productsIndex),
    pagination_element = document.querySelector(
      ShopSelectors.productsPagination
    );

  let rows = 6,
    current_page = 1;
  displayList(items, productsIndex, rows, current_page);
  SetupPagination(items, pagination_element, rows);
};
