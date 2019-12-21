const productsIndex = document.querySelector('.products__index');

function products() {
  req = new XMLHttpRequest();
  req.open('GET', 'products.json', true);
  req.send(null);
  req.responseType = 'json';
}

console.log(products);
