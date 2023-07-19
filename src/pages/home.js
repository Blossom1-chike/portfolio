import React from "react";
import { PageLayout } from "../component";
import Introduction from "../component/introduction";
import About from "../component/about";

const Home = () => {
  return (
    <PageLayout>
      <div className="bg-[#181824]">
        <Introduction />
        <About />
      </div>
    </PageLayout>
  );
};
export default Home;
