const createProductsService = async (product) => {
  try {
    const response = await fetch("http://localhost:3000/createProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const json = await response.json();
    if (!response.ok) {
      throw new Error("Ocurrió un error al crear el producto.");
    } else {
      console.log(`guardado con exito`);
    }
    console.log(json);
  } catch (error) {
    console.error("Error en createProducts:", error);
    throw error;
  }
};

export default createProductsService;
