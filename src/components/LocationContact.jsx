import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationContactModule from './LocationContact.module.css';

export const Ubicacion = ({ nombre }) => {
  return (
    <div className={LocationContactModule.ubicacioncontainer}>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      <span className="ubicacionnombre">{nombre}</span>
    </div>
  );
};

const ListaDeUbicaciones = () => {
  return (
    <div className={LocationContactModule.ubicacioneslista}>
        <h1>Nuestras sedes</h1>
      <Ubicacion nombre={"Sabaneta"} />
      <Ubicacion nombre={"Medellin"} />
      <Ubicacion nombre={"Bello"} />
      
    </div>
  );
};

export default ListaDeUbicaciones;