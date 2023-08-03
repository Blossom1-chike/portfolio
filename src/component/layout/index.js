import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <section className="bg-[#181824]">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
