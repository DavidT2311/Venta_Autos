import React from "react";
//CCS
import ContactModule from "./Contact.module.css/";
//components
import FormContact from "../components/FormContact";
import Iframe from "../components/IframeContact";
import ListaDeUbicaciones from "../components/LocationContact";
import Info from "../components/InfoContact"
//img
import LogoR from "../assets/LogoR.png";
//em el evento recibbe la ciudad busca esa ciudad y si la encuentra la guarda en el usestate la ubi
//iframe le pasamos esa ubicacion al iframe 
//se envia a lista de ciudades el evento y segun donde le de click llama a el evento y le pasa la ciudad correspondiente
const Contact = () => {

  return (

    <>
      <div className={ContactModule.body}>
        <h1 className={ContactModule.title}>¡Contáctanos!</h1>
        <ListaDeUbicaciones />
        <img src={LogoR} alt="" className={ContactModule.logo}/>
        <FormContact />
        <Info/>
        <Iframe location={"https://i0.wp.com/inversionisto.com/wp-content/uploads/2022/07/terreno-9400-mt2-santiago.png?fit=833%2C598&ssl=1&resize=1280%2C950"}/>
        </div>
    </>
  );
};

export default Contact;
