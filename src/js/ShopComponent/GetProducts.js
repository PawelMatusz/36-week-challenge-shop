import regeneratorRuntime from 'regenerator-runtime';

const productsURL =
  'https://raw.githubusercontent.com/PawelMatusz/36-week-challenge-shop/master/dist/json/products.json';

export const getProducts = async () => {
  try {
    const response = await fetch(productsURL);
    const data = await response.json();
    const { products } = await data;
    return products;
  } catch (err) {
    console.log(err);
  }
};
