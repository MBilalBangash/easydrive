import React from "react";
import Navbar from "../navber/Navber";
import Footer from "../home/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
      {children}
     <Footer/>
    </div>
  );
};

export default Layout;
