const getUser = async (token) => {
  try {
    const data = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data.ok)
      throw new Error("Ha ocurrido un error obteniendo los usuarios");
    const json = await data.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getUser;
