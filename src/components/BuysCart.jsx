import react, { useState } from "react";
//Styles
import buyscartModule from "./BuysCart.module.css";
//Components
import Button from "./Button";
import CardInCart from "./CardInCart";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
//Motion
import { motion } from "framer-motion";
//Bootstrap - Modal
import Modal from "react-bootstrap/Modal";
//Redux - cartSlice
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteProductFromCart,
  clearCart,
} from "../redux/slices/cartSlice";

const BuysCart = ({ show, setShow }) => {
  //Redux - carSlice
  const { cartProducts, totalProducts } = useSelector(
    (state) => state.cartProducts
  );
  const dispatch = useDispatch();

  return (
    <>
      <motion.article
        className={buyscartModule.article}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => setShow(true)}
      >
        <div className={buyscartModule.total_products_container}>
          <span className={buyscartModule.total_products}>{totalProducts}</span>
        </div>
        <span className={buyscartModule.text}>Ver carrito</span>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="mediumpurple" />
      </motion.article>

      <Modal size="xl" show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "50px",
          }}
        >
          {cartProducts.map((item, index) => (
            <CardInCart key={index} product={item} action={dispatch} />
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button
            text="Limpiar carrito"
            classes="yellow"
            handleEvent={() => dispatch(clearCart())}
          />
          <Button
            text="Cerrar"
            classes="red"
            handleEvent={() => setShow(false)}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BuysCart;
