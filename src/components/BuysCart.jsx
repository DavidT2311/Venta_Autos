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
import { useSelector } from "react-redux";

const BuysCart = ({ totalProducts }) => {
  const [show, setShow] = useState(false);
  const { cartProducts } = useSelector((state) => state.cartProducts);

  const handleShowCartPage = () => {
    setShow(true);
    console.log(cartProducts);
  };

  return (
    <>
      <motion.article
        className={buyscartModule.article}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={handleShowCartPage}
      >
        <span>{totalProducts}</span>
        <span className={buyscartModule.text}>Ver carrito</span>
        <FontAwesomeIcon icon={faCartShopping} size="2x" color="mediumpurple" />
      </motion.article>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Productos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProducts.map((item, index) => (
            <CardInCart key={index} product={item} />
          ))}
        </Modal.Body>
        <Modal.Footer>
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
