import React, { useState } from "react";
import { Link } from "react-router-dom";

// HOOKS
import { useTheme } from '../../hook/useTheme'


// ICONS
import { RiDashboardFill } from "react-icons/ri";
import { RxPinLeft } from "react-icons/rx";
import { BsTelephoneFill } from "react-icons/bs";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const [open, setOpen] = useState(true);
  const { theme, setTheme } = useTheme();


  return (
    <div
      className={`bg-[rgb(32,45,105)] dark:bg-[#292929]   ${isVisible ? "block" : "hidden"
        } md:block  ${open ? "w-[270px]" : "w-20"
        } py-3 px-4 h-[100vh] flex flex-col relative  `}
    >
      <RxPinLeft
        className={`bg-none text-white  text-2xl absolute right-2 top-4 cursor-pointer ${!open && "rotate-180"
          } `}
        onClick={() => setOpen(!open)}
      />

      <div>
        <ul className="pt-2">
          <Link to="/">
            <li
              className="text-white  text-sm mt-10  flex items-center gap-x-6 cursor-pointer p-2  hover:bg-blue-400 hover:opacity-80  hover:w-[100%] hover:text-white rounded-md"
            >
              <span className="text-2xl block float-left">
                <RiDashboardFill />
              </span>
              <span
                className={` font-medium text-sm flex-1 duration-200   ${!open && "hidden"
                  }`}
              >
                Home
              </span>
            </li>
          </Link>
          <Link to="/contato" className="w-100%">
            <li className="text-white  text-sm flex items-center gap-x-6 cursor-pointer p-2  hover:bg-blue-400 hover:opacity-80 rounded-md hover:text-white ">
              <span className="text-xl block float-left">
                <BsTelephoneFill />
              </span>
              <span
                className={` font-medium text-sm flex-1 duration-200 ${!open && "hidden"
                  }`}
              >
                Contato
              </span>
            </li>
          </Link>
          <div className={`flex items-center  top-7 p-2 hover:bg-blue-400 hover:opacity-80 rounded-md hover:text-white`}>
            {theme === "light" ? (
              <button className="flex  text-white" onClick={() => setTheme("dark")}>
                <FaCloudMoon className=" cursor-pointer mr-5 text-white text-2xl" />
                <span
                  className={` font-medium text-sm flex-1 duration-200 text-white  ${!open && "hidden"
                    }`}
                >
                  Modo Dark
                </span>

              </button>
            ) : (
              <button
                className="flex dark:text-white  "
                onClick={() => setTheme("light")}
              >
                <FaCloudSun className="  cursor-pointer dark:text-white mr-5 text-2xl" />
                <span
                  className={` font-medium text-sm flex-1 duration-200  ${!open && "hidden"
                    }`}
                >
                  Modo Light
                </span>

              </button>
            )}
          </div>

        </ul>
      </div>


    </div>
  );
};

export default Sidebar;
