import React from "react";
import { Instagram, Sms } from "../../images";

const Contact = () => {
  return (
    <div className="flex lg:flex flex-col justify-between bg-[#1A1A29] lg:px-32 px-10 py-20 text-white mt-20 text-[14px]">
      <div className="flex flex-col gap-2">
        <p className="text-[32px] text-[#7562E0] font-semibold">Connect with me:</p>
        <p>Want to know more? Please contact me</p>
        <div className="flex gap-3">
          <Instagram />
          <Sms />
        </div>
      </div>
      <div className="mr-20 w-full pt-10">
        <p className="text-[20px] font-medium">Contact me, let's make magic together</p>
        <form className="flex flex-col gap-4 mt-5">
            <input type="text" className="p-5 bg-[#F5F5F5] text-white rounded bg-opacity-[0.11]" id="name" name="name" placeholder="Name:" />
            <input type="email" id="email" className="p-5 bg-[#F5F5F5] rounded bg-opacity-[0.11]" name="email" placeholder="Email:" />
            <textarea placeholder="Message:" className="p-5 bg-[#F5F5F5] text-white rounded bg-opacity-[0.11]" rows='5'></textarea>
            <button className="py-3 bg-[#7562E0] rounded w-[124px]">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
