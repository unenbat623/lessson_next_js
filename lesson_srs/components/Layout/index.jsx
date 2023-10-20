import React, { children } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children, setSearchTitle }) => {
  return (
    <>
      <Navbar setSearchTitle={setSearchTitle} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
