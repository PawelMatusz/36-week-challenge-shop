const productsURL = './dist/json/products.json';

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
