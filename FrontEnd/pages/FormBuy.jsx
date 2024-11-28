import React, {useState} from "react";
import { useNavigate } from "react-router";
import FormBuyModule from "./FormBuy.module.css";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import CardInCart from "../components/CardInCart";


//Componentes
import Form from "../components/FormBuy"


const FormBuy = () => {
  const { cartProducts, totalPrice } = useSelector(
    (state) => state.cartProducts
  );
  
  const navigate = useNavigate();

  const handleModify = () => {
    Swal.fire({
      title: `No es posible modificar desde esta pagina

      Desea ir a la pagina de productos?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(navigate("/products"), "Estas en la pagina de productos");
      } 
      
    });

  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleProducts = cartProducts.slice(currentIndex, currentIndex + 2);
    
  const nextSlide = () => {
    if (currentIndex + 2 < cartProducts.length) {
      setCurrentIndex(currentIndex + 2);
    }
  };
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 2);
    }
  };
  
    return (
        <>
        <div className={FormBuyModule.containerP}>
        <Form />
        
        <div className={FormBuyModule.pago}>
        <p className={FormBuyModule.price}>Total a pagar: <strong>${totalPrice.toFixed(2)}</strong></p>
        
        <div className={FormBuyModule.carouselContainer}>
            <button
              className={FormBuyModule.arrow}
              onClick={prevSlide}
              disabled={currentIndex === 0}
            >
              &#8593; 
            </button>

            <Modal.Body
              className={FormBuyModule.carousel}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {visibleProducts.map((item, index) => (
                <CardInCart key={index} product={item} action={handleModify} />
              ))}
            </Modal.Body>

            <button
              className={FormBuyModule.arrow}
              onClick={nextSlide}
              disabled={currentIndex + 2 >= cartProducts.length}
            >
              &#8595; 
            </button>
          </div>
        </div>
        </div>
        
        </>
    )
}

export default FormBuy;