import React from "react";
import { FaBars } from "react-icons/fa";



const Header = ({ toggleSidebar }) => {
  return (
    <header className=" w-full h-16    bg-[rgb(32,45,105)] dark:bg-[#292929]  flex flex-row items-center justify-between px-6  ">
      <h1 className="text-white font-semibold text-3xl md:text-4xl">TIPSCODE</h1>
      <button onClick={toggleSidebar} className="text-2xl md:hidden">
        <FaBars className="text-white" />
      </button>
     
    </header>
  );
};

export default Header;
