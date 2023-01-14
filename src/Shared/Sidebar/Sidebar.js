import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  return (
    <div className="vh-full">
      <h1 className="text-3xl text-white font-semibold p-10 flex items-center">
        <img className="w-10 h-10 mr-2" src={logo} alt="" />
        <span>NextGen IT</span>
      </h1>
      <div className="dashboard-menu  pb-10">
        <div className="dashboard-menu-item">
          <ul>
            <li className="p-0 md:mt-0 ">
              <NavLink to="/" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Dashboard</span>
                </button>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink to="/attendance" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Attendance</span>
                </button>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink to="/dashboard" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Leaves</span>
                </button>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink to="/dashboard" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Expense</span>
                </button>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink to="/dashboard" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Notice</span>
                </button>
              </NavLink>
            </li>
            <li className="p-0  ">
              <NavLink to="/dashboard" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex ">
                  <img className="w-8 h-6 mr-4" src={menuicon} alt="" />
                  <span>Departments</span>
                </button>
              </NavLink>
            </li>

            <li>
              <ul className="text-white my-4 ">
                <li>
                  <NavLink
                    id="subMenuList"
                    onClick={handleSubMenuClick}
                    className=" flex justify-start items-center w-full py-2.5 pl-10 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white "
                  >
                    {subMenu ? (
                      <FaAngleDown></FaAngleDown>
                    ) : (
                      <FaAngleRight></FaAngleRight>
                    )}
                    <img className="h-7 w-7 ml-2" src={setting} alt="" />
                    <span className="ml-4 text-lg">Setting</span>
                  </NavLink>

                  <ul className="list-disc ml-10 leading-8">
                    <li className="flex justify-start items-center lg:pl-20 my-1">
                      <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                      Approval
                    </li>
                    <li className="flex justify-start items-center lg:pl-20 my-1">
                      <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                      Leave
                    </li>
                    <li className="flex justify-start items-center lg:pl-20 my-1">
                      <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                      Office Setting
                    </li>
                    <li className="flex justify-start items-center lg:pl-20 my-1">
                      <MdCircle className="w-2 h-2 mr-2"></MdCircle>
                      My Subscription
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="p-0  ">
              <NavLink to="/dashboard" className="p-0 ">
                <button className="w-full py-2.5 pl-16 font-semibold text-center hover:bg-[#eeeeee33] duration-200 text-lg text-white flex items-center">
                  <MdOutlineLogout className="w-8 h-8  mr-4"></MdOutlineLogout>
                  <span>Logout</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
