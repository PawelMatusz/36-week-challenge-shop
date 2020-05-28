export function getMinPrice() {
  let minInputValue = parseFloat(
    document.querySelector('.filter__price-value--min').value
  );
  return minInputValue || 0;
}
