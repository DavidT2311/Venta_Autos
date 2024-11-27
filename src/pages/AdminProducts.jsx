import { main } from "motion/react-client";
import React from "react";
//Style
import adminModule from "./AdminProducts.module.css";
//Font-Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
//Redux
import { useDispatch, useSelector } from "react-redux";

const AdminProducts = () => {
  const { email } = useSelector((state) => state.user);
  return (
    <>
      <header className={adminModule.header}>
        <h1 className={adminModule.dashboard}>Dashboard</h1>
        <div to={"login"} className={adminModule.logout_container}>
          <span className={adminModule.logout_text}>{email}</span>
          <FontAwesomeIcon
            icon={faCircleUser}
            size="3x"
            className={adminModule.logout_icon}
          />
        </div>
      </header>
      <main className={adminModule.main}>
        <h1 className={adminModule.products}>Productos</h1>
      </main>
    </>
  );
};

export default AdminProducts;
