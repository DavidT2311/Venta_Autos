import React, { useEffect, useRef, useState } from "react";
//Styles
import buysModule from "./Buys.module.css";
//Components
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
import FilterInput from "../components/FilterInput";
import FilterSelect from "../components/FilterSelect";
//Services
import getProducts from "../services/getProducts";
import BuysCart from "../components/BuysCart";

const Buys = () => {
  const [carsList, setCarList] = useState([]);
  //Elementos para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 6;
  const firstIndexSlice = lastIndexSlice - 6;

  //Lista de filtrado de elementos
  const [carsFilterList, setCarsFilterList] = useState(carsList);

  //Referencia de los inputs
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const rateRef = useRef(null);

  //Elementos para los select
  const [categories, setCategories] = useState([]);

  //Filtros para todos los inputs de la barra superior
  const filters = () => {
    let filterList = carsList;

    if (titleRef) {
      filterList = filterList.filter((item) =>
        item.title.toLowerCase().includes(titleRef.current.value.toLowerCase())
      );
    }

    if (categoryRef && categoryRef.current.value != 0) {
      filterList = filterList.filter((item) =>
        item.category
          .toLowerCase()
          .includes(categoryRef.current.value.toLowerCase())
      );
    }

    if (rateRef && rateRef.current.value != 0) {
      filterList = filterList.filter(
        (item) =>
          parseFloat(rateRef.current.value) <= item.rating.rate &&
          parseFloat(rateRef.current.value) + 1 > item.rating.rate
      );
    }

    setCurrentPage(1);
    setCarsFilterList(filterList);
  };

  const getCategories = () => {
    let list = [];
    carsList.map((item) => list.push(item.category));
    setCategories([...new Set(list)]);
  };

  //Carga inicial de la pagina
  useEffect(() => {
    getProducts().then((data) => {
      setCarList(data);
      setCarsFilterList(data);
    });
  }, []);

  //Cargar los datos en el select
  useEffect(() => {
    getCategories();
  }, [carsList]);

  //Detectar cambios en los direfentes inputs
  useEffect(() => {
    filters();
  }, [titleRef, categoryRef, carsList]);

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
          <section className={buysModule.intern_filter_section}>
            {/* Filtro buscar por titulo */}
            <FilterInput
              title="Buscar por titulo"
              name="titleInput"
              type="text"
              reference={titleRef}
              action={filters}
            />
            {/* Filtro buscar por categoria */}
            <FilterSelect
              title="Buscar por categoria"
              name="categorySelect"
              options={categories}
              reference={categoryRef}
              action={filters}
            />
            {/* Filtro buscar por calificacion */}
            <FilterSelect
              title="Buscar por calificacion"
              name="rateSelect"
              options={[1, 2, 3, 4, 5]}
              reference={rateRef}
              action={filters}
            />
            <BuysCart />
          </section>
        </section>

        {/* Seccion principal */}
        <section className={buysModule.main_section}>
          {carsFilterList.length == 0 && carsList.length > 1 ? (
            <span>No se encontraron resultados</span>
          ) : (
            ""
          )}
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
        {/* Seccion para la paginacion */}
        <section className={buysModule.pagination}>
          {carsList.length == 0 ? (
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
