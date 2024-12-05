import React from "react";
import MapContactModule from "./MapContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";





const Map = ({ selectedMap }) => {
  return (
    <div className={MapContactModule.container}>
      <h2 className={MapContactModule.nombre}><FontAwesomeIcon
        className={MapContactModule.icon}
        icon={faMapMarkerAlt}
        size="2x"
      />Mapa de {selectedMap.name}</h2>
      <iframe
      className={MapContactModule.imagen2}
        
        src={selectedMap.url}
        
      ></iframe>
    
    </div>
    
  );
};

export default Map;