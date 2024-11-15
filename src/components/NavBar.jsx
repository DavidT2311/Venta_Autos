//Styles
import navbarModule from "./Navbar.module.css";
//Assets
import LogoR from "../assets/LogoR.png";
//React-router
import { Link } from "react-router-dom";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <nav className={navbarModule.navbar}>
      <img src={LogoR} alt="Logo" />
      <ul className={navbarModule.menu}>
        <Link to="/">
          <li className={navbarModule.item}>Inicio</li>
        </Link>
        <Link to={"products/"}>
          <li className={navbarModule.item}>Productos</li>
        </Link>
        <Link to="#">
          <li className={navbarModule.item}>Nosotros</li>
        </Link>
        <Link to="#">
          <li className={navbarModule.item}>
            <FontAwesomeIcon
              icon={faHeart}
              size="2x"
              className={navbarModule.heart_icon}
            />
          </li>
        </Link>
      </ul>
      <div className={navbarModule.logout_container}>
        <span className={navbarModule.logout_text}>Salir</span>
        <FontAwesomeIcon
          icon={faCircleUser}
          size="3x"
          className={navbarModule.logout_icon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
