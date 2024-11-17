//Router Dom Link
import { Link } from "react-router-dom";
//Module
import footerModule from "./Footer.module.css";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Button from "./Button";

export const Footer = () => {
  return (
    <div className={footerModule.div}>
      <footer className={footerModule.footer}>
        {/* <button className={footerModule.button}> */}
        <Link to="/Nosotros" className={footerModule.link}>
          <Button text="Contactenos" classes="blue" />
        </Link>
        {/* </button> */}
        <p className={footerModule.p}>
          @ | Todos los derechos reservados a Jhoider Rua, David Torres, Nickol
          Moreno, Guzman
        </p>
        <section className={footerModule.section}>
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            color="white"
            className={footerModule.icon}
          />
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            color="white"
            className={footerModule.icon}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            size="2x"
            color="white"
            className={footerModule.icon}
          />
        </section>
      </footer>
    </div>
  );
};

export default Footer;
