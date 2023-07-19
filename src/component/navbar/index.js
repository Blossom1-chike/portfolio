import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About me", "Projects", "Contacts"];
  return (
    <div className="flex flex-row px-28 py-6 justify-between items-center bg-[#181824]">
      <p className="text-[20px] text-[#7562E0]">&lt;Blossom Chikezie /&gt;</p>
      <div className="flex flex-row gap-10 text-white">
        {navItems.map((item, index) => (
          <a href=" " key={index}>{item}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
