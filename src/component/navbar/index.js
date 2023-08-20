import React, { useState } from "react";

const Navbar = () => {
  const navItems = ["Home", "About me", "Projects", "Contacts"];
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="flex flex-row lg:px-32 md:px-12 lg:py-6 py-5 px-10 justify-between items-center bg-[#181824]">
        <p className="lg:text-[20px] text-[#7562E0]">
          &lt;Blossom Chikezie /&gt;
        </p>
        <div className="lg:flex md:flex hidden lg:gap-10 md:gap-5 text-white">
          {navItems.map((item, index) => (
            <a href=" " key={index}>
              {item}
            </a>
          ))}
        </div>
        <span
          className="flex lg:hidden md:hidden text-white text-2xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          &#9776;
        </span>
      </div>

      {mobileMenu && (
        <div className="fixed z-100 height-full w-full bg-[#181824] top-0 left-0 p-5 inset-0 opacity-100 slide-in">
          <a
            href="javascript:void(0)"
            className="text-[24px] text-white flex justify-end items-end"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            &times;
          </a>
          <div className="flex flex-col text-white text-center gap-4">
            {navItems.map((item, index) => (
              <a href="#" className="text-[24px]" key={index}>
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
