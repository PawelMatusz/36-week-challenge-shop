import { addProducts } from './AddProducts.js';
import { getMinPrice } from './GetMinPrice.js';
import { getMaxPrice } from './GetMaxPrice.js';

export const filterProducts = products => {
  let prod = products.filter(product => {
    return (
      product.value >= getMinPrice() && product.value <= getMaxPrice(products)
    );
  });

  addProducts(prod);
};
