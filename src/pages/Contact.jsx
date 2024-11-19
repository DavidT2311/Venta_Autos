import React from "react";
import ContactModule from "./Contact.module.css/";
import FormContact from "../components/FormContact";
import Iframe from "../components/IframeContact";
import ListaDeUbicaciones from "../components/LocationContact";
import Info from "../components/InfoContact"
import LogoR from "../assets/LogoR.png";

const Contact = () => {
  return (
    <>
      <div className={ContactModule.pp}>
        <h1 className={ContactModule.title}>¡Contáctanos!</h1>
        
        <div>
          <ListaDeUbicaciones />
        </div>
        <div>
          <FormContact />
        </div>
        <div>
            <img src={LogoR} alt="" className={ContactModule.logo}/>
        </div>
        <div>
          <Iframe
            location={
              "https://i0.wp.com/inversionisto.com/wp-content/uploads/2022/07/terreno-9400-mt2-santiago.png?fit=833%2C598&ssl=1&resize=1280%2C950"
            }
          />
        </div>
        <div >
          <Info/>
          <br /><br />
        </div>
      </div>
    </>
  );
};

export default Contact;
