import { displayList } from './DisplayList.js';
import { ShopSelectors } from './ShopSelectors.js';

let current_page = 1;
let rows = 6;
const productsIndex = document.querySelector(ShopSelectors.productsIndex);

export const SetupPagination = (items, wrapper, rows_per_page) => {
  wrapper.innerHTML = '';

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    wrapper.appendChild(btn);
  }
};

const PaginationButton = (page, items) => {
  let button = document.createElement('button');
  button.innerText = page;
  button.classList.add('products__pagination-button');

  if (current_page === page) button.classList.add('active');

  button.addEventListener('click', function() {
    current_page = page;
    displayList(items, productsIndex, rows, current_page);

    let current_btn = document.querySelector('button.active');
    current_btn.classList.remove('active');

    button.classList.add('active');
  });

  return button;
};
