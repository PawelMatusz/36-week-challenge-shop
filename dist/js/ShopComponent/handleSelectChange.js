import { addProducts } from './AddProducts.js';

export const handleSelectChange = products => {
  const key = document.querySelector('.products__sort-select').value;
  const sortedProducts = products.sort((a, b) => {
    if (b[key] < a[key]) {
      return 1;
    } else if (b[key] > a[key]) {
      return -1;
    } else {
      return 0;
    }
  });
  addProducts(sortedProducts);
};
