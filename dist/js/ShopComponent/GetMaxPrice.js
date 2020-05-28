export function getMaxPrice(products) {
  let maxInputValue = parseFloat(
    document.querySelector('.filter__price-value--max').value
  );
  let maxValue = Math.max(...products.map(product => product.value));
  return maxInputValue || maxValue;
}
