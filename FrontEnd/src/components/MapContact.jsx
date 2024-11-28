import React from "react";
import MapContactMoudle from "./MapContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";





const Map = ({ selectedMap }) => {
  return (
    <div className={MapContactMoudle.container}>
      <h2 className={MapContactMoudle.nombre}><FontAwesomeIcon
        className={MapContactMoudle.icon}
        icon={faMapMarkerAlt}
        size="2x"
      />Mapa de {selectedMap.name}</h2>
      <iframe
      className={MapContactMoudle.imagen2}
        
        src={selectedMap.url}
        
      ></iframe>
    
    </div>
    
  );
};

export default Map;