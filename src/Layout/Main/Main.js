import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import TopBarMenu from "../../Shared/TopBarMenu/TopBarMenu";

const Main = () => {
  return (
    <div className="flex ">
      <div className=" bg-primary w-[22%]">
        <Sidebar></Sidebar>
      </div>
      <div className="w-[78%]">
        <TopBarMenu></TopBarMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
