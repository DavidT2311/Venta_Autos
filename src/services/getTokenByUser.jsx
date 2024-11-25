const getTokenByUser = async (user) => {
  try {
    const data = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!data.ok) throw new Error("Ha ocurrido un error obteniendo el usuario");

    const json = await data.json();
    return { json, email: user.email };
  } catch (e) {
    console.log(e);
  }
};

export default getTokenByUser;
