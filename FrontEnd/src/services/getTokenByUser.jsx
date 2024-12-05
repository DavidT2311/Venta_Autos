const getTokenByUser = async (user) => {
  try {
    const data = await fetch("http://localhost:3000/getTokenByUser", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!data.ok) throw new Error("Ha ocurrido un error obteniendo el usuario");

    const json = await data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getTokenByUser;
