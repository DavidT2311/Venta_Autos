import React from "react";
import StylePage from "./Contact.module.css/";
import FormContact from "../components/FormContact";
import Iframe from "../components/IframeContact";


const Contact = () =>{
    return(
    <>
    <h1 className={StylePage.title}>¡Contáctanos!</h1>
    <div>
        <FormContact/>
    </div>
    <div>
        <Iframe
        location={"https://www.google.com/maps/@6.3440117,-75.5969972,11.4z?hl=es&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"}/>
    </div>
    
    </>
    
    )

}



export default Contact;