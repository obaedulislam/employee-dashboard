import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import menuicon from "../../assets/menuicon.png";
import logo from "../../assets/logo.png";
import setting from "../../assets/setting.png";

import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { MdCircle, MdOutlineLogout } from "react-icons/md";

const Sidebar = () => {
  const [subMenu, setSubMenu] = useState(false);
  const [subMenuItem, setSubMenuItem] = useState("");

  const handleSubMenuClick = () => {
    setSubMenu(!subMenu);
    setSubMenuItem("subMenuList");
  };

  const normalButton =
    "w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex";
  const activeButton =
    "w-full py-2.5 pl-16 font-semibold text-center bg-[#eeeeee33] hover:bg-[#eeeeee33] duration-200 text-lg text-white flex";
  const dropdownMenu =
    "flex justify-start items-center w-full py-2.5 pl-10 font-semibold text-center bg-[#eeeeee33]  hover:bg-[#eeeeee33] duration-200 text-lg text-white ";

  return (
    <div className="vh-full">
      <Link
        to="/"
        className="text-3xl text-white font-semibold p-10 flex items-center"
      >
        <img className="w-10 h-10 mr-2" src={logo} alt="" />
        <span>NextGen IT</span>
      </Link>
      <div className="dashboard-menu  pb-10">
        <div className="dashboard-menu-item">
          <ul>
            <li className="p-0 md:mt-0 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink
                to="/attendance"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Attendance</span>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink
                to="/leaves"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Leaves</span>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink
                to="/expense"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Expense</span>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink
                to="/notice"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Notice</span>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink
                to="/departments"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                <span>Departments</span>
              </NavLink>
            </li>

            <li>
              <ul className="text-white my-4 ">
                <li>
                  <NavLink
                    id="subMenuList"
                    onClick={handleSubMenuClick}
                    className={({ isActive }) =>
                      isActive && subMenu ? dropdownMenu : normalButton
                    }
                  >
                    {subMenu ? (
                      <FaAngleDown></FaAngleDown>
                    ) : (
                      <FaAngleRight></FaAngleRight>
                    )}
                    <img className="h-7 w-7 ml-2" src={setting} alt="" />
                    <span className="ml-4 text-lg">Setting</span>
                  </NavLink>

                  <ul
                    className={`${
                      subMenu ? "block  ml-10 leading-8" : "hidden"
                    }`}
                  >
                    <li>
                      <NavLink
                        to="/"
                        className="flex justify-start items-center lg:pl-20 my-1 hover:text-gray-300 "
                      >
                        <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                        Approval
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="flex justify-start items-center lg:pl-20 my-1 hover:text-gray-300 "
                      >
                        <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                        Leave
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="flex justify-start items-center lg:pl-20 my-1 hover:text-gray-300 "
                      >
                        <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                        Office Setting
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="flex justify-start items-center lg:pl-20 my-1 hover:text-gray-300 "
                      >
                        <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                        My Subscription
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="p-0  ">
              <NavLink
                to="/logout"
                className={({ isActive }) =>
                  isActive ? activeButton : normalButton
                }
              >
                <MdOutlineLogout className="w-8 h-8  mr-4"></MdOutlineLogout>
                <span>Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
