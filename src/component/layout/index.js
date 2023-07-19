import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
