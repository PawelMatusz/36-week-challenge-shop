import { addProducts } from './AddProducts.js';
import { ShopSelectors } from './ShopSelectors.js';

export const handleSelectChange = products => {
  const key = document.querySelector(ShopSelectors.sort).value;
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
