export const addToLike = e => {
  if (e.target.classList.contains('product__card-like')) {
    e.target.classList.toggle('product__card-like-is-active');
  }
};
