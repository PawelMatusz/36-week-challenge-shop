const productsURL = './dist/json/product.json';

export const getProducts = async () => {
  try {
    const response = await fetch(productsURL);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
