//Components
import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
//React-Router-Dom
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
