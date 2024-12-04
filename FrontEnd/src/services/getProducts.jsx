const getProducts = async () => {
  try {
    const data = await fetch("http://127.0.0.1:3000/getProducts");
    if (!data.ok) throw new Error("Ocurrio un error obteniendo los productos");

    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getProducts;
