import React from "react";
import IframeContactMoudle from "./IframeContact.module.css"



const Iframe = ({location}) =>{
    return(
        <article >
            <img className={IframeContactMoudle.imagen} src={location} alt="" />
        </article>
    )
}

export default Iframe

