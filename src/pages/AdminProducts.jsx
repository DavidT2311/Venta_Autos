import { main } from "motion/react-client";
import React from "react";
//Style
import adminproductsModule from "./AdminProducts.module.css";

const AdminProducts = () => {
  return (
    <>
      <header className={adminproductsModule.header}>
        <h1 className={adminproductsModule.productos}>Dashboard</h1>
      </header>
      <main className={adminproductsModule.main}>
        <h1 className={adminproductsModule.dashboard}>Productos</h1>
      </main>
    </>
  );
};

export default AdminProducts;
