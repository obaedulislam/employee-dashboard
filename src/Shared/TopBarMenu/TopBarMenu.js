import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import calender from "../../assets/calender.png";
import notification from "../../assets/notification.png";
import user from "../../assets/user.jpg";

const TopBarMenu = () => {
  return (
    <div className="top-menu py-6 px-20 bg-white flex items-center justify-between">
      <div className="left-menu flex items-center py-1  px-4 border rounded border-[#dddcdc] w-[40%]">
        <BsSearch className="text-[#A49999] text-xl mr-3"></BsSearch>
        <input
          type="text"
          placeholder="Search"
          className="b-0 focus:outline-none  text-[#A49999] uppercase tracking-wider text-sm"
        />
      </div>
      <div className="right-menu flex items-center justify-end">
        <ul className="flex items-center gap-x-10">
          <li>
            <NavLink>
              <img className="w-6 h-6" src={calender} alt="" />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <img className="w-6 h-6" src={notification} alt="" />
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
