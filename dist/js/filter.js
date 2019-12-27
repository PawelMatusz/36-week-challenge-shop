const filterProducts = function(e) {
  e.preventDefault();
  let productsList = new XMLHttpRequest();
  productsList.onload = function() {
    if (productsList.status === 200) {
      const products = JSON.parse(this.responseText);
      const maxValue = document.querySelector('.filter__price-value--max')
        .value;
      const minValue = document.querySelector('.filter__price-value--min')
        .value;
      const productsIndex = document.querySelector('.products__index');
      productsIndex.innerHTML = '';
      for (let k = 0; k < products.products.length; k++) {
        if (products.products[k].value >= minValue) {
          const productCard = document.createElement('div');
          const productImage = document.createElement('img');
          const productDescription = document.createElement('p');
          const productPrice = document.createElement('p');
          const addCart = document.createElement('button');
          productCard.setAttribute('class', 'product__card');
          productImage.setAttribute('class', 'product__card-photo');
          productImage.setAttribute('src', `${products.products[k].image}`);
          productDescription.setAttribute('class', 'product__card-description');
          productDescription.textContent = `${products.products[k].description}`;
          productPrice.setAttribute('class', 'product__card-price');
          productPrice.textContent = `${products.products[k].price}`;
          productCard.appendChild(productImage);
          productCard.appendChild(productDescription);
          productCard.appendChild(productPrice);

          productsIndex.appendChild(productCard);
        }
      }
    } else if (productsList.status === 404) {
      throw 'err';
    }
  };

  productsList.open('GET', `dist/json/product.json`, true);
  productsList.send(null);
};
document
  .querySelector('.filter__price-button')
  .addEventListener('click', filterProducts);
