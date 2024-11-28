import { main, tr } from "motion/react-client";
import React, { useEffect } from "react";
//Style
import adminproductsModule from "./AdminProducts.module.css";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
//BootStrap
import { Container, Table } from "react-bootstrap";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productsSlice";

const AdminProducts = () => {
  //Redux - userSlice
  const dispatch = useDispatch();
  const { token, email, name, role, avatar } = useSelector(
    (state) => state.user
  );

  const { products, loading } = useSelector((state) => state.products);

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
              <tbody className={adminproductsModule.table_body}>
                {products.map((item, index) => (
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
                ))}
              </tbody>
            </table>
          </article>
        </section>
      </main>
    </Container>
  );
};

export default AdminProducts;
