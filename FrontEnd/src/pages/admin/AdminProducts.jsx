import React, { useState, useEffect } from "react";
import FormCreateProduct from "../../components/CreateProduct";
import FormEditProduct from "../../components/FormEditProduct";
//Style
import adminproductsModule from "./AdminProducts.module.css";
//Components
import PaginationComponent from "../../components/Pagination";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
//BootStrap
import { Button, Container } from "react-bootstrap";
//Auto-Animate
import { useAutoAnimate } from "@formkit/auto-animate/react";
//Cookies
import { useCookies, CookiesProvider } from "react-cookie";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/slices/productsSlice";

const AdminProducts = () => {
  //Redux - userSlice
  const [showUpdate, setShowUpdate] = useState(false);
  const [product, setProduct] = useState(null);
  const { products, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  //Cookies
  const [cookies, setCookies] = useCookies(["User"]);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  //Elementos para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndexSlice = currentPage * 4;
  const firstIndexSlice = lastIndexSlice - 4;

  //Auto-animate
  const [parent] = useAutoAnimate();

  //Obtener datos del token
  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  }

  useEffect(() => {
    if (cookies.User) {
      const { username } = parseJwt(cookies.User.token);
      setUsername(username);
      setToken(cookies.User.token);
    }
  }, []);

  useEffect(() => {
    if (loading == "idle") dispatch(fetchProducts());
  }, [loading, dispatch]);

  const handleUptadeProduct = (product) => {
    setProduct(product);
    setShowUpdate(true);
  };
  return (
    <CookiesProvider>
      {token ? (
        <Container>
          <header className={adminproductsModule.header}>
            <span className={adminproductsModule.header_title}>Dashboard</span>
            <div className={adminproductsModule.logout_container}>
              <span className={adminproductsModule.logout_text}>
                {username}
              </span>
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
                <FormCreateProduct
                  T={"Agregar producto"}
                  TxtBtn={"Agregar nuevo producto"}
                  TxtBtnIn={"Crear producto"}
                />
              </article>
              <article>
                <table className={adminproductsModule.table}>
                  <thead>
                    <tr className={adminproductsModule.table_header}>
                      <th className={adminproductsModule.tb_title}>Titulo</th>
                      <th className={adminproductsModule.tb_title}>
                        Categoria
                      </th>
                      <th className={adminproductsModule.tb_title}>
                        Descripcion
                      </th>
                      <th className={adminproductsModule.tb_title}>Precio</th>
                      <th className={adminproductsModule.tb_title}>
                        Calificacion
                      </th>
                      <th className={adminproductsModule.tb_title}>
                        Comprados
                      </th>
                      <th className={adminproductsModule.tb_title}>Acciones</th>
                    </tr>
                  </thead>
                  <tbody
                    className={adminproductsModule.table_body}
                    ref={parent}
                  >
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
                            {item.price}
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
                          <td
                            className={`${adminproductsModule.tb_body} ${adminproductsModule.tb_number}`}
                            style={{ justifyContent: "center" }}
                          >
                            <Button
                              style={{ marginRight: "10px" }}
                              variant="warning"
                              size="sm"
                              onClick={() => handleUptadeProduct(item)}
                            >
                              <FontAwesomeIcon icon={faPencil} size="1x" />
                            </Button>
                            <Button
                              variant="danger"
                              size="sm"
                              onClick={() => dispatch(deleteProduct(item._id))}
                            >
                              <FontAwesomeIcon icon={faTrash} size="1x" />
                            </Button>
                          </td>
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
            <FormEditProduct
              showUpdate={showUpdate}
              setShowUpdate={setShowUpdate}
              product={product}
            />
          </main>
        </Container>
      ) : (
        ""
      )}
    </CookiesProvider>
  );
};

export default AdminProducts;
