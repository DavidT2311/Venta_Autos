const removeProduct = async (id) => {
  try {
    const data = await fetch(`http://localhost:3000/deleteProduct/${id}`, {
      method: "DELETE",
    });
    if (!data.ok) throw new Error("Ocurrio un error obteniendo los productos");

    const json = data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default removeProduct;
