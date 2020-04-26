// https://github.com/TylerPottsDev/vanillajs-pagination
const productCard = document.querySelector('.product__card');
const productsIndex = document.querySelector('.products__index');
const shopBasket = document.querySelector('.shop__basket-area');

const addToLike = function(e) {
  if (e.target.classList.contains('product__card-like')) {
    console.log(e.target.classList);
    e.target.classList.toggle('product__card-like-is-active');
  }
};

export const addProducts = products => {
  const pagination_element = document.querySelector('.products__pagination');
  let current_page = 1;
  let rows = 6;

  function DisplayList(items, wrapper, rows_per_page, page) {
    wrapper.innerHTML = '';
    page--;

    let start = rows_per_page * page;
    let end = start + rows_per_page;
    let paginatedItems = items.slice(start, end);

    for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      let newCard = productCard.cloneNode(true);
      const productPhoto = newCard.querySelector('.product__card-photo');
      const productDescription = newCard.querySelector(
        '.product__card-description'
      );
      const productPrice = newCard.querySelector('.product__card-price');
      const productAddLike = newCard.querySelector('.product__card-like');

      productPhoto.src = item.image;
      productDescription.innerHTML = item.description;
      productPrice.innerHTML = item.price;
      productsIndex.appendChild(newCard);
      newCard.addEventListener('click', e => addToLike(e));
    }
  }

  function SetupPagination(items, wrapper, rows_per_page) {
    wrapper.innerHTML = '';

    let page_count = Math.ceil(items.length / rows_per_page);
    for (let i = 1; i < page_count + 1; i++) {
      let btn = PaginationButton(i, items);
      wrapper.appendChild(btn);
    }
  }

  function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    button.classList.add('products__pagination-button');

    if (current_page === page) button.classList.add('active');

    button.addEventListener('click', function() {
      current_page = page;
      DisplayList(items, productsIndex, rows, current_page);

      let current_btn = document.querySelector('button.active');
      current_btn.classList.remove('active');

      button.classList.add('active');
    });

    return button;
  }
  DisplayList(products, productsIndex, rows, current_page);
  SetupPagination(products, pagination_element, rows);
};
