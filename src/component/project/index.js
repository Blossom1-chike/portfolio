import React from "react";
import { ESNS } from "../../images";
import { projects } from "../../data/project";

const Projects = () => {
  return (
    <div className="lg:px-32 px-10 text-white mt-20 text-[14px]">
      <p className="text-[24px] font-semibold underline underline-offset-8 decoration-4 text-[#7562E0] decoration-white tracking-wider">
        Projects
      </p>
      <div className="pt-10 pb-20">
        <p>
          I have had the privilege to contribute my skills and expertise as a
          web developer to a variety of live projects that showcase my
          proficiency in creating dynamic and user-centric web solutions. Here
          are a few of my live, real world projects.
        </p>
        <div className="flex lg:flex-row flex-col gap-5">
          {projects.map((project, index) => (
            <div className="mt-10 lg:w-1/2 md:w-1/2 flex flex-col gap-4">
              {/* <img src={ESNS} className="w-[200px]" alt="Emergency Situation Notification System" /> */}
              <p className="text-[24px] text-[#7562E0]">{project.title}</p>
              <p>
               {project.description}
              </p>
              <div className="flex gap-4">
                <button className="px-5 py-2 rounded bg-[#7562E0]">View Live</button>
                <button className="px-4 py-2 rounded border border-1 border-[#7562E0]">Github Repo</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
