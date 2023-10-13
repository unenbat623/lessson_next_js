import React, { children } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Kebab from "../Kebab";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Kebab />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
