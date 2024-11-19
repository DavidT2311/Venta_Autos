import React from "react";
import StyleIframe from "./IframeContact.module.css"



const Iframe = ({location}) =>{
    return(
        <article>
            <iframe className={StyleIframe.iframe} src={location} frameborder="0"></iframe>
        </article>
    )
}

export default Iframe

