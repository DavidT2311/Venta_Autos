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

const Contact = () => {
  return (
    <>
      
        <h1 className={ContactModule.title}>¡Contáctanos!</h1>
        <ListaDeUbicaciones />
        <img src={LogoR} alt="" className={ContactModule.logo}/>
        <FormContact />
        <Info/>
        <Iframe location={"https://i0.wp.com/inversionisto.com/wp-content/uploads/2022/07/terreno-9400-mt2-santiago.png?fit=833%2C598&ssl=1&resize=1280%2C950"}/>
        
        
        
      
    </>
  );
};

export default Contact;
