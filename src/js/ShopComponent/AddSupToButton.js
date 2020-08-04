export const addSupToButton = (items, buttons) => {
  buttons.forEach(button => {
    const sup = document.createElement('sup');
    sup.classList.add('filter__sup');
    let prod = items.filter(product =>
      product.categories.includes(button.dataset.categories)
    );
    if (
      button.dataset.categories !== 'all' &&
      !button.dataset.color &&
      prod.length !== 0
    ) {
      sup.textContent = prod.length;
      button.appendChild(sup);
    } else if (
      button.dataset.categories === 'all' &&
      !button.dataset.color &&
      items.length !== 0
    ) {
      sup.textContent = items.length;
      button.appendChild(sup);
    }
  });
};
