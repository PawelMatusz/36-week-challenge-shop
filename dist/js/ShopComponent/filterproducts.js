import { addProducts } from './AddProducts.js';

export const filterProducts = products => {
  let prod = products.filter(product => {
    return (
      product.value >= getMinPrice() && product.value <= getMaxPrice(products)
    );
  });

  addProducts(prod);
};

function getMinPrice() {
  let minInputValue = parseFloat(
    document.querySelector('.filter__price-value--min').value,
  );

  return minInputValue || 0;
}

function getMaxPrice(products) {
  let maxInputValue = parseFloat(
    document.querySelector('.filter__price-value--max').value,
  );
  let maxValue = Math.max(...products.map(product => product.value));

  return maxInputValue || maxValue;
}
