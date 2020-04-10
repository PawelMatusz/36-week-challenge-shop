import { addProducts } from './AddProducts.js';

export const filterByCategories = (products, button) => {
  let prod = products.filter(product =>
    product.categories.includes(button.dataset.categories)
  );
  addProducts(prod);
};
