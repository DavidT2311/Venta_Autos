const getProducts = async () => {
  try {
    const data = await fetch("https://fakestoreapi.com/products");
    if (!data.ok) throw new Error("Ocurrio un error obteniendo los productos");

    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getProducts;
