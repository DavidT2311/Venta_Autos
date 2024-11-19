import React, { useEffect, useState } from "react";
//Style
import startModule from "./Start.module.css";
//Assets
import Fondojfif from "../assets/Fondo.jfif";
//Components
import Card from "../components/Card";
//Services
import getProducts from "../services/getProducts";
//Button
import Button from "../components/Button";
//Font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
          <p className={startModule.p}>Automoviles</p>
          <span>41.156 Ofertas</span>
          <input className={startModule.input_search} type="text" />
        </section>
        <section className={startModule.container_products}>
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
              .slice(0, 6)}
          </section>
          <Button text="Mostrar mas" classes="yellow"></Button>
        </section>

        <section className={startModule.container_services}>
          <article className={startModule.services}>
            <h1 className={startModule.h1}>
              Somos un concecionario de compra y venta de autos usados multimarc
              con presencia en Antioquia, Eje cafetero y bucaramanga
            </h1>
            <h3 className={startModule.h3}>Somos</h3>
            <Button text="Saber mas" classes="yellow" />
          </article>
        </section>
        <FontAwesomeIcon icon={faCar} className={startModule.service_icon} />
        <FontAwesomeIcon icon={faShop} className={startModule.shop_icon} />
      </main>
    </>
  );
};

export default start;
