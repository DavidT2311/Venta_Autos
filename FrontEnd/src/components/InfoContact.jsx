import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import InfoContactModule from './InfoContact.module.css';

const Info = () => {
  return (
    <div className={InfoContactModule.info}>
        <div className={InfoContactModule.picon}>
      <p className={InfoContactModule.p}>
        <FontAwesomeIcon icon={faWhatsapp} className={InfoContactModule.icon} />
        301245781
      </p>
      <p className={InfoContactModule.p}>
        <FontAwesomeIcon icon={faEnvelope} className={InfoContactModule.icon2} />
        Venta_Autos@gmail.com
      </p>
      </div>
      <div className={InfoContactModule.picon}>
      <p className={InfoContactModule.p}>
        <FontAwesomeIcon icon={faFacebook} className={InfoContactModule.icon3} />
        Venta Autos
      </p>
      <p className={InfoContactModule.p}>
        <FontAwesomeIcon icon={faInstagram} className={InfoContactModule.icon4} />
        @venta_autos
      </p>
      </div>
      
    </div>
  );
};

export default Info;