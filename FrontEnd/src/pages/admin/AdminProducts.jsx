import React, { useState, useEffect } from "react";
import { div, main, tr } from "motion/react-client";
import React, { useEffect } from "react";
import FormCreateProduct from "../../components/CreateProduct";
//Style
import adminproductsModule from "./AdminProducts.module.css";
//Components
import PaginationComponent from "../../components/Pagination";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
//BootStrap
import { Container, Table } from "react-bootstrap";
//Auto-Animate
import { useAutoAnimate } from "@formkit/auto-animate/react";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";


const AdminProducts = () => {
  //Redux - userSlice
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { token, email, name, role, avatar } = useSelector(
    (state) => state.user
  );

  //Elementos para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 4;
  const firstIndexSlice = lastIndexSlice - 4;

  //Auto-animate
  const [parent] = useAutoAnimate();
  const { products, loading 
    
  } = useSelector((state) => state.products);

  useEffect(() => {
    if (loading == "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  return (      
    <Container>
      <header className={adminproductsModule.header}>
        <span className={adminproductsModule.header_title}>Dashboard</span>
        <div className={adminproductsModule.logout_container}>
          <span className={adminproductsModule.logout_text}>{name}</span>
          <FontAwesomeIcon
            icon={faCircleUser}
            size="3x"
            color="white"
            className={adminproductsModule.logout_icon}
          />
        </div>
      </header>
      <main className={adminproductsModule.main}>
        <h1 className={adminproductsModule.products_title}>Productos</h1>
        <section className={adminproductsModule.products_section}>
          <article>
          <FormCreateProduct T={"Agregar producto"} TxtBtn={"Agregar nuevo producto"} TxtBtnIn={"Crear producto"}/>
            {/* Aca va la barra de buscar y el boton de agregar */}
          </article>
          <article>
            <table className={adminproductsModule.table}>
              <thead>
                <tr className={adminproductsModule.table_header}>
                  <th className={adminproductsModule.tb_title}>Titulo</th>
                  <th className={adminproductsModule.tb_title}>Categoria</th>
                  <th className={adminproductsModule.tb_title}>Descripcion</th>
                  <th className={adminproductsModule.tb_title}>Calificacion</th>
                  <th className={adminproductsModule.tb_title}>Comprados</th>
                  <th className={adminproductsModule.tb_title}>Acciones</th>
                </tr>
              </thead>
              <tbody className={adminproductsModule.table_body} ref={parent}>
                {products
                  .map((item, index) => (
                    <tr key={index}>
                      <td className={adminproductsModule.tb_body}>
                        {item.title}
                      </td>
                      <td className={adminproductsModule.tb_body}>
                        {item.category}
                      </td>
                      <td className={adminproductsModule.tb_body}>
                        {item.description}
                      </td>
                      <td
                        className={`${adminproductsModule.tb_body} ${adminproductsModule.tb_number}`}
                      >
                        {item.rating.rate}
                      </td>
                      <td
                        className={`${adminproductsModule.tb_body} ${adminproductsModule.tb_number}`}
                      >
                        {item.rating.count}
                      </td>
                      <td className={adminproductsModule.tb_body}></td>
                    </tr>
                  ))
                  .slice(firstIndexSlice, lastIndexSlice)}
              </tbody>
            </table>
          </article>
        </section>
        <section className={adminproductsModule.pagination_section}>
          <PaginationComponent
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            quantityOfProducts={products.length}
            quantityProductsPerPage={4}
            reference={parent}
          />
        </section>
      </main>
    </Container>
  );
};

export default AdminProducts;
