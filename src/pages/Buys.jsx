import React, { useEffect, useRef, useState } from "react";
//Styles
import buysModule from "./Buys.module.css";
//Components
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
//Services
import getProducts from "../services/getProducts";
import FilterInput from "../components/FilterInput";

const Buys = () => {
  const [carsList, setCarList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 6;
  const firstIndexSlice = lastIndexSlice - 6;
  //Filtrado de elementos
  const [carsFilterList, setCarsFilterList] = useState(carsList);
  //Referencia de los inputs
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const rateRef = useRef(null);

  const filters = () => {
    let filteredCars = carsList;

    if (titleRef) {
      filteredCars = filteredCars.filter((car) =>
        car.title.toLowerCase().includes(titleRef.current.value.toLowerCase())
      );
    }

    if (categoryRef) {
      filteredCars = filteredCars.filter((car) =>
        car.category
          .toLowerCase()
          .includes(categoryRef.current.value.toLowerCase())
      );
    }

    setCarsFilterList(filteredCars);
  };

  useEffect(() => {
    filters();
  }, [titleRef, categoryRef, carsList]);

  useEffect(() => {
    getProducts().then((data) => {
      setCarList(data);
      setCarsFilterList(data);
    });
  }, []);

  return (
    <>
      <main className={buysModule.main}>
        <h1 className={buysModule.title}>Vehiculos disponibles</h1>
        {/* Seccion secundaria de filtros */}
        <section className={buysModule.ordering_section}>
          <h2 className={buysModule.ordering_title}>Ordenamiento</h2>
        </section>

        {/* Seccion principal de filtos */}
        <section className={buysModule.filter_section}>
          <h2 className={buysModule.filter_title}>Filtros</h2>
          <section className={buysModule.internt_filter_section}>
            {/* Filtro buscar por titulo */}
            <FilterInput
              title="Buscar por titulo"
              name="tituloInput"
              type="text"
              reference={titleRef}
              action={filters}
            />
            {/* Filtro buscar por categoria */}
            <FilterInput
              title="Buscar por categoria"
              name="tituloInput"
              type="text"
              reference={categoryRef}
              action={filters}
            />
            {/* Filtro buscar por calificacion */}
            <FilterInput
              title="Buscar por calificacion"
              name="tituloInput"
              type="text"
              reference={rateRef}
              action={filters}
            />
          </section>
        </section>

        {/* Seccion principal */}
        <section className={buysModule.main_section}>
          {console.log(carsFilterList)}
          {carsFilterList
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
          {carsFilterList.length == 0 ? (
            <span>Cargando...</span>
          ) : (
            <PaginationComponent
              key={0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              quantityOfProducts={carsFilterList.length}
              quantityProductsPerPage={6}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Buys;
