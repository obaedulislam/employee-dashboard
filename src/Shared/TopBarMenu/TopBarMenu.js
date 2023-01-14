import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import calender from "../../assets/calender.png";
import notification from "../../assets/notification.png";
import user from "../../assets/user.jpg";

const TopBarMenu = () => {
  return (
    <div className="top-menu py-3 px-20 bg-white flex items-center justify-between shadow">
      <div className="left-menu flex items-center py-1  px-4 border rounded border-[#dddcdc] w-[40%]">
        <BsSearch className="text-[#A49999] text-2xl mr-3"></BsSearch>
        <input
          type="text"
          placeholder="Search"
          className="b-0 focus:outline-none w-full leading-3 text-[#A49999] uppercase tracking-wider text-sm"
        />
      </div>
      <div className="right-menu flex items-center justify-end">
        <ul className="flex items-center gap-x-10">
          <li>
            <NavLink>
              <img className="w-6 h-6" src={calender} alt="" />
            </NavLink>
          </li>
          <li className="relative">
            <NavLink>
              <img className="w-6 h-6 " src={notification} alt="" />
              <div className="absolute -bottom-[5px] right-[0px] w-3 h-3 rounded-full bg-accent -z-0"></div>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img className="w-12 h-12 rounded-full" src={user} alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBarMenu;
