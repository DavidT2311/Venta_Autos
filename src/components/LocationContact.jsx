import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationContactModule from './LocationContact.module.css';




//separar componentes
//manejar los maps globales

const ListaDeUbicaciones = () => {
  return (
    <div className={LocationContactModule.ubicacioneslista}>
        <h1>Nuestras sedes</h1>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />Sabaneta
      </p>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />Medellin
      </p>
      <p>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />Bello
      </p>
      
      
    </div>
  );
};

export default ListaDeUbicaciones;