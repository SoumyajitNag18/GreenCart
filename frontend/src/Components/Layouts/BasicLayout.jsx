import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{padding:"2rem 0rem"}}>
      {children}
      </div>
      <Footer />
    </>
  );
};

export default BasicLayout;
