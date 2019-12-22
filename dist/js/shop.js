const getProducts = function() {
  let productsList = new XMLHttpRequest();
  productsList.onload = function() {
    let visibleProduct = 5;
    if (productsList.status === 200) {
      const products = JSON.parse(this.responseText);

      for (let i = 0; i < products.products.length; i++) {
        const productsIndex = document.querySelector('.products__index');
        const productCard = document.createElement('div');
        const productImage = document.createElement('img');
        const productDescription = document.createElement('p');
        const productPrice = document.createElement('p');
        const addCart = document.createElement('button');
        productCard.setAttribute('class', 'product__card');
        productImage.setAttribute('class', 'product__card-photo');
        productImage.setAttribute('src', `${products.products[i].image}`);
        productDescription.setAttribute('class', 'product__card-description');
        productDescription.textContent = `${products.products[i].description}`;
        productPrice.setAttribute('class', 'product__card-price');
        productPrice.textContent = `${products.products[i].price}`;
        productCard.appendChild(productImage);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);

        productsIndex.appendChild(productCard);

        if (i === visibleProduct) return;
      }
    } else if (productsList.status === 404) {
      throw 'err';
    }
  };

  productsList.open('GET', `dist/json/product.json`, true);
  productsList.send(null);
};

getProducts();
