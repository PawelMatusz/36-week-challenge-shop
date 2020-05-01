export const addToBasket = (e, newCard) => {
  const shopBasket = document.querySelector('.shop__basket-area');
  if (e.target.classList.contains('product__card-like')) {
    e.target.classList.toggle('product__card-like-is-active');
  }
  if (e.target.classList.contains('fa-shopping-basket')) {
    let newItem = newCard.cloneNode(true);
    shopBasket.appendChild(newItem);
  }
};
