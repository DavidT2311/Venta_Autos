import React from "react";
import FormBuyModule from "./FormBuy.module.css";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import CardInCart from "../components/CardInCart";

//Componentes
import Form from "../components/FormBuy"

const FormBuy = () => {
  const { cartProducts, totalProducts, totalPrice } = useSelector(
    (state) => state.cartProducts
  );
  
  const handleModify = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No es posible modificar desde la pagina de pago",
      footer: '<a href=products>Ir a productos?</a>'
    });
  navigate("/formbuy"); 
  }
    
  
    return (
        <>
        <div className={FormBuyModule.containerP}>
        <Form />
        
        <div className={FormBuyModule.pago}>
        <p>Total a pagar: <strong>${totalPrice.toFixed(2)}</strong></p>
        
          <Modal.Body
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: "50px",
          }}
          >
          {cartProducts.map((item, index) => (
            <CardInCart key={index} product={item} action={handleModify} />
          ))}
        </Modal.Body>
        </div>
        </div>
        
        </>
    )
}



export default FormBuy;
