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
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
          <br />
          <input className={startModule.input} type="text" />
          <FontAwesomeIcon
            className={startModule.search}
            icon={faMagnifyingGlass}
            size="2x"
          />
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
              En nuestro concesionario, nos enorgullece ofrecer una experiencia
              de compra única y personalizada para cada uno de nuestros
              clientes. Contamos con una amplia gama de vehículos nuevos y
              seminuevos, de las mejores marcas y con garantía de calidad.
              Nuestro equipo de expertos está siempre disponible para brindarte
              asesoramiento profesional y ayudarte a encontrar el coche que
              mejor se ajuste a tus necesidades, preferencias y presupuesto.
              Además, ofrecemos opciones de financiamiento flexibles para que
              puedas llevarte el automóvil de tus sueños de manera fácil y
              accesible. Ven a nuestro concesionario y descubre por qué somos la
              opción preferida para quienes buscan un servicio de excelencia y
              vehículos de calidad.
            </h1>
            <h3 className={startModule.h3}>Somos</h3>
            <Button text="Saber mas" classes="yellow" />
            <FontAwesomeIcon
              icon={faCar}
              size="2x"
              className={startModule.icon}
            />
            <FontAwesomeIcon
              icon={faShop}
              size="2x"
              className={startModule.icon}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              color="white"
              className={startModule.icon}
            />
          </article>
        </section>
      </main>
    </>
  );
};

export default start;
