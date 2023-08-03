import React from "react";
import { Introduction, PageLayout, About, Projects, Footer } from "../component";
import Contact from "../component/contact";


const Home = () => {
  return (
    <PageLayout>
      <div>
        <Introduction />
        <About />
        <Projects />
        <Contact/>
      </div>
    </PageLayout>
  );
};
export default Home;
