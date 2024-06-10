import React from "react";

const About = () => {
  const skills = [
    { lang1: "Html", lang2: "CSS", lang3: "JavaScript" },
    { lang1: "ReactJS", lang2: "Material UI", lang3: "TailwindCSS" },
    { lang1: "NodeJS", lang2: "MongoDB", lang3: "ExpressJS" },
  ];
  return (
    <div className="lg:px-32 px-10 lg:py-20 py-10 text-white mt-20 bg-[#1A1A29] text-[14px]">
      <p className="text-[24px] font-semibold underline underline-offset-8 decoration-4 decoration-[#7562E0] tracking-wider">About Me:</p>
      <p className="mt-10 lg:w-1/2 w-full leading-loose">
        Dedicated and performance-driven developer with a pro-active approach
        and determination to successfully finish all assigned projects within
        budget and schedule. Effective team player offering extraordinary
        analytical skills and most importantly, the ability to think critically.
      </p>
      <div className="mt-4 w-full">
        <p className="font-semibold tracking-wider">Technologies I've Worked With:</p>
        <div className="flex flex-row">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col gap-1 lg:mr-8 mr-4  py-2">
                 <p>{skill.lang1}</p>
                 <p>{skill.lang2}</p>
                 <p>{skill.lang3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
