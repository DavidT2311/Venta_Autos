import React from "react";
import IframeContactMoudle from "./IframeContact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';




const Iframe = ({location}) =>{
    return(
        <>
          
        
        <FontAwesomeIcon className={IframeContactMoudle.icon} icon={faMapMarkerAlt} size="2x" />
        <span className={IframeContactMoudle.nombre}>Ubicacion</span>
      
            
            <img className={IframeContactMoudle.imagen2} src={location} alt=""  />

        
            
       
        </>
    )
}

export default Iframe

