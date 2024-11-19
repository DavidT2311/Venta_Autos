import React, { useEffect, useState } from "react";
//Style
import startModule from "./Start.module.css";
//Imagen
import Fondojfif from "../assets/Fondo.jfif";
//Components
import Card from "../components/Card";
//Services
import getProducts from "../services/getProducts";

const start = () => {
  const [carsList, setCarList] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setCarList(data);
    });
  }, []);

  return (
    <>
      <main className={startModule.main}>
        <section className={startModule.header}>
          <img src={Fondojfif} alt="" className={startModule.img} />
        </section>
        <section className={startModule.products}>
          {carsList
            .map(
              (
                { id, title, price, description, category, image, rating },
                index
              ) => (
                <Card
                  key={id}
                  ID={id}
                  title={title}
                  price={price}
                  description={description}
                  category={category}
                  image={image}
                  rating={rating}
                />
              )
            )
            .slice(0, 4)}
        </section>

        <section className={startModule.service}>
          <article className={startModule.article}></article>
        </section>
      </main>
    </>
  );
};

export default start;
