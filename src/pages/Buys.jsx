import React, { useEffect, useRef, useState } from "react";
//Styles
import buysModule from "./Buys.module.css";
//Components
import Card from "../components/Card";
import PaginationComponent from "../components/Pagination";
import FilterInput from "../components/FilterInput";
import FilterSelect from "../components/FilterSelect";
import BuysCart from "../components/BuysCart";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faDollar } from "@fortawesome/free-solid-svg-icons";
//productsSlice
import { fetchProducts } from "../redux/slices/productsSlice";
//Redux
import { useDispatch, useSelector } from "react-redux";

const Buys = () => {
  //Mostrar carrito de compras
  const [show, setShow] = useState(false);

  //Redux - productsSlice
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //Elementos para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 6;
  const firstIndexSlice = lastIndexSlice - 6;

  //Lista de filtrado de elementos
  const [carsFilterList, setCarsFilterList] = useState(products);

  //Elementos para los select
  const [categories, setCategories] = useState([]);

  //Referencia de los inputs --Seccion de filtros superior
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const rateRef = useRef(null);

  //Referencia de los inputs --Seccion de filtros lateral
  const minPrice = useRef(null);
  const maxPrice = useRef(null);
  const minRate = useRef(null);
  const maxRate = useRef(null);
  const minBought = useRef(null);
  const maxBought = useRef(null);

  //Carga inicial de la pagina
  useEffect(() => {
    if (loading == "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  //Cargar los datos en el select
  useEffect(() => {
    getCategories();
  }, [products]);

  //Detectar cambios en los direfentes inputs
  useEffect(() => {
    filters();
  }, [titleRef, categoryRef, products]);

  //Generar lista con las categorias sin repetir
  const getCategories = () => {
    let list = [];
    products.map((item) => list.push(item.category));
    setCategories([...new Set(list)]);
  };

  //Filtros para todos los inputs de la barra superior
  const filters = () => {
    let filterList = products;

    //Seccion superior de filtros - Filtro para el titulo
    if (titleRef) {
      filterList = filterList.filter((item) =>
        item.title.toLowerCase().includes(titleRef.current.value.toLowerCase())
      );
    }

    //Seccion superior de filtros - Filtro para el titulo
    if (categoryRef && categoryRef.current.value != 0) {
      filterList = filterList.filter(
        (item) =>
          item.category.toLowerCase() ===
          categoryRef.current.value.toLowerCase()
      );
    }

    //Seccion superior de filtros - Filtro para el titulo
    if (rateRef && rateRef.current.value != 0) {
      console.log(rateRef.current.value);
      filterList = filterList.filter(
        (item) =>
          parseFloat(rateRef.current.value) <= item.rating.rate &&
          parseFloat(rateRef.current.value) + 1 > item.rating.rate
      );
    }

    //Seccion lateral de filtros - Filtro para el precio minimo
    if (minPrice && minPrice.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(minPrice.current.value) <= item.price
      );
    }

    //Seccion lateral de filtros - Filtro para el precio maximo
    if (maxPrice && maxPrice.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(maxPrice.current.value) >= item.price
      );
    }

    //Seccion lateral de filtros - Filtro para el calificacion minima
    if (minRate && minRate.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(minRate.current.value) <= item.rating.rate
      );
    }

    //Seccion lateral de filtros - Filtro para el calificacion maxima
    if (maxRate && maxRate.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(maxRate.current.value) >= item.rating.rate
      );
    }

    //Seccion lateral de filtros - Filtro para el minimo comprado
    if (minBought && minBought.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(minBought.current.value) <= item.rating.count
      );
    }

    //Seccion lateral de filtros - Filtro para el maximo comprado
    if (maxBought && maxBought.current.value != "") {
      filterList = filterList.filter(
        (item) => parseFloat(maxBought.current.value) >= item.rating.count
      );
    }

    setCurrentPage(1);
    setCarsFilterList(filterList);
  };

  return (
    <>
      <main className={buysModule.main}>
        <h1 className={buysModule.title}>Vehiculos disponibles</h1>
        {/* Seccion secundaria de filtros */}
        <section className={buysModule.ordering_section}>
          <h2 className={buysModule.ordering_title}>Ordenamiento</h2>
          {/* Titulo del filtro ordernar por precio */}
          <article className={buysModule.ordering_sutitle_container}>
            <FontAwesomeIcon icon={faTags} size="1x" color="white" fade />
            <p className={buysModule.ordering_subtitle}>Ordenar por precio</p>
          </article>
          {/* Filtro para ordenar por precio minimo y precio maximo */}
          <FilterInput
            title="Precio minimo"
            name="minPrice"
            type="number"
            reference={minPrice}
            action={filters}
          />
          <FilterInput
            title="Precio maximo"
            name="maxPrice"
            type="number"
            reference={maxPrice}
            action={filters}
          />

          {/* Titulo del filtro ordernar por calificacion */}
          <article className={buysModule.ordering_sutitle_container}>
            <FontAwesomeIcon icon={faStar} size="1x" color="white" spin />
            <p className={buysModule.ordering_subtitle}>
              Ordenar por calificacion
            </p>
          </article>
          {/* Filtro para ordenar por calificacion minima y calificacion maxima */}
          <FilterInput
            title="Calificacion minima"
            name="maxRate"
            type="number"
            reference={minRate}
            action={filters}
          />
          <FilterInput
            title="Calificacion maxima"
            name="maxRate"
            type="number"
            reference={maxRate}
            action={filters}
          />

          {/* Titulo del filtro ordernar por calificacion */}
          <article className={buysModule.ordering_sutitle_container}>
            <FontAwesomeIcon icon={faDollar} size="1x" color="white" bounce />
            <p className={buysModule.ordering_subtitle}>
              Ordenar por comprados
            </p>
          </article>
          {/* Filtro para ordenar por compra minima y compra maxima */}
          <FilterInput
            title="Minimo comprado"
            name="minBought"
            type="number"
            reference={minBought}
            action={filters}
          />
          <FilterInput
            title="Maximo comprado"
            name="maxBought"
            type="number"
            reference={maxBought}
            action={filters}
          />
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
            <BuysCart show={show} setShow={setShow} />
          </section>
        </section>

        {/* Seccion principal */}
        <section className={buysModule.main_section}>
          {carsFilterList.length == 0 && products.length > 1 ? (
            <NotFound />
          ) : (
            ""
          )}
          {products.length == 0 ? <Loader /> : ""}
          {carsFilterList
            .map((product, index) => (
              <Card
                key={product.id}
                product={product}
                action={dispatch}
                setShow={setShow}
              />
            ))
            .slice(firstIndexSlice, lastIndexSlice)}
        </section>
        {/* Seccion para la paginacion */}
        <section className={buysModule.pagination}>
          {products.length == 0 ? (
            ""
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
