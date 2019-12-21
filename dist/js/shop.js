const getProducts = function() {
  let productsList = new XMLHttpRequest();
  productsList.onload = function() {
    let visibleProduct = 5;
    if (productsList.status === 200) {
      const products = JSON.parse(this.responseText);

      for (let i = 0; i < products.products.length; i++) {
        const productsIndex = document.querySelector('.products__index');
        const productCard = document.createElement('div');
        productCard.setAttribute('class', 'product__card');
        productCard.innerHTML = `<img class="product__card-photo" src=${products.products[i].image}></img>
      <p class="product__card-description">${products.products[i].description}</p>
      <p class="product__card-price">${products.products[i].price}</p>
      <button class="product__card-add">
      <span><img class="product__card-add-cart" src="/dist/img/cart.png" alt=""/></span>
      Add to Cart </button>`;
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
