export const addSupToButton = (items, buttons) => {
  buttons.forEach(button => {
    let prod = items.filter(product =>
      product.categories.includes(button.dataset.categories)
    );
    if (button.dataset.categories !== 'all' && !button.dataset.color) {
      button.innerHTML += `<sup>${prod.length}</sup>`;
    } else if (button.dataset.categories === 'all' && !button.dataset.color) {
      button.innerHTML += `<sup>${items.length}</sup>`;
    }
  });
};
