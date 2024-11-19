import React from "react";
import ContactModule from "./Contact.module.css/";
import FormContact from "../components/FormContact";
import Iframe from "../components/IframeContact";
import ListaDeUbicaciones from "../components/LocationContact";


const Contact = () =>{
    return(
    <>
    <h1 className={ContactModule.title}>¡Contáctanos!</h1>
    <img src="logo" alt="" />
    <div>
        <ListaDeUbicaciones/>
    </div>
    <div>
        <FormContact/>
    </div>
    <div>
        <Iframe
        location={"https://i0.wp.com/inversionisto.com/wp-content/uploads/2022/07/terreno-9400-mt2-santiago.png?fit=833%2C598&ssl=1&resize=1280%2C950"}/>
    </div>
    
    </>
    
    )

}



export default Contact;