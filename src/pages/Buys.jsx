import React, { useEffect, useState } from "react";
//Styles
import buysModule from "./Buys.module.css";
//Components
import NavBar from "../components/NavBar";
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
//Services
import getProducts from "../services/getProducts";

const Compras = () => {
  const [carsList, setCarList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 6;
  const firstIndexSlice = lastIndexSlice - 6;

  useEffect(() => {
    getProducts().then((data) => setCarList(data));
  }, []);

  return (
    <>
      <NavBar />
      <main className={buysModule.main}>
        <h1 className={buysModule.title}>Vehiculos disponibles</h1>
        {/* Seccion secundaria de filtros */}
        <section className={buysModule.ordering_section}>
          <h2 className={buysModule.ordering_title}>Ordenamiento</h2>
        </section>

        {/* Seccion principal de filtos */}
        <section className={buysModule.filter_section}>
          <h2 className={buysModule.filter_title}>Filtros</h2>
          {/* Filtro buscar por titulo */}
          <article></article>
          {/* Filtro buscar por categoria */}
          <article></article>
          {/* Filtro buscar por calificacion */}
          <article></article>
        </section>

        {/* Seccion principal */}
        <section className={buysModule.main_section}>
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
            .slice(firstIndexSlice, lastIndexSlice)}
        </section>
        <section className={buysModule.pagination}>
          {carsList.length == 0 ? (
            <span>Cargando...</span>
          ) : (
            <PaginationComponent
              key={0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              quantityOfProducts={carsList.length}
              quantityProductsPerPage={6}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Compras;
