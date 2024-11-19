import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import LocationContactModule from './LocationContact.module.css';

const Ubicacion = ({ nombre }) => {
  return (
    <div className={LocationContactModule.ubicacioncontainer}>
      <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
      <span className="ubicacion-nombre">{nombre}</span>
    </div>
  );
};

const ListaDeUbicaciones = () => {
  return (
    <div className={LocationContactModule.ubicacioneslista}>
        <h1>Nuestras sedes</h1>
      <Ubicacion nombre="Sabaneta" />
      <br />
      <Ubicacion nombre="Medellin" />
      <br />
      <Ubicacion nombre="Bello" />
      
    </div>
  );
};

export default ListaDeUbicaciones;