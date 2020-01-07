export const addProducts = resp => {
  for (let i = 0; i < resp.products.length; i++) {
    const productsIndex = document.querySelector('.products__index');
    const productCard = document.createElement('div');
    const productImage = document.createElement('img');
    const productDescription = document.createElement('p');
    const productPrice = document.createElement('p');
    const addCart = document.createElement('button');
    productCard.setAttribute('class', 'product__card');
    productCard.setAttribute('data-price', `${resp.products[i].value}`);
    productImage.setAttribute('class', 'product__card-photo');
    productImage.setAttribute('src', `${resp.products[i].image}`);
    productDescription.setAttribute('class', 'product__card-description');
    productDescription.textContent = `${resp.products[i].description}`;
    productPrice.setAttribute('class', 'product__card-price');
    productPrice.textContent = `${resp.products[i].price}`;
    productCard.appendChild(productImage);
    productCard.appendChild(productDescription);
    productCard.appendChild(productPrice);
    productsIndex.appendChild(productCard);
  }
};
