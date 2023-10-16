import React, { children } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
// import MobileNavbar from "../MobileNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <MobileNavbar /> */}
      {children}
      <Footer />
    </>
  );
};
export default Layout;
