import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationContactModule from './LocationContact.module.css';
import Map from './MapContact'
import Button from './Button';

const Maps = [
  { name: "Sabaneta", url: "https://www.google.com/maps?q=Sabaneta,+Antioquia&output=embed" },
  { name: "Medellín", url: "https://www.google.com/maps?q=Medellin,+Antioquia&output=embed"},
  { name: "Bello", url: "https://www.google.com/maps?q=Bello,+Antioquia&output=embed"}
];

const ListaDeUbicaciones = () => {
  const [selectedMap, setSelectedMap] = useState(Maps[0]); 
  
  return (
    <div className={LocationContactModule.ubicacioneslista}>
        <h1>Nuestras sedes</h1>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><Button classes="green"  text={"Sabaneta"}  handleEvent={() => setSelectedMap(Maps[0])} />
      </p>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><Button classes="blue"   text={"Medellín"}  handleEvent={() => setSelectedMap(Maps[1])} />
      </p>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><Button classes="yellow" text={"Bello"}     handleEvent={() => setSelectedMap(Maps[2])} />
      </p>
      <Map selectedMap={selectedMap} />
      
    </div>
  );
};

export default ListaDeUbicaciones;