const editProduct = async (id, product) => {
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
    if (!data.ok) throw new Error("Ocurrio un error obteniendo los productos");
    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default editProduct;
