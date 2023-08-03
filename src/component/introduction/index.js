import React from "react";
import { EyeIcon, Profile } from "../../images";

const Introduction = () => {
  return (
    <div className="flex flex-row bg-[#1A1A29]">
      <div className="flex flex-col text-white px-32 pt-36 pb-10 ">
        <p className="text-[32px] font-semibold">Hello, i’m</p>
        <p className="text-[48px] font-semibold w-fit h-fit">Blossom C. Chikezie</p>
        <p className="w-1/2">
          FullStack developer, Web developer. I create impeccable web
          experiences for end-users in an effective manner.
        </p>
        <div className="mt-4 flex gap-5">
            <button className="py-2 px-4 rounded bg-[#7562E0] flex flex-row gap-1 items-center text-[14px]"><p>About me </p><Profile /></button>
            <button className="py-2 px-4 rounded border border-[#7562E0] flex flex-row gap-1 items-center text-[14px]"><p>Projects</p> <EyeIcon/></button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
