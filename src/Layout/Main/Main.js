import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../Shared/Sidebar/Sidebar";
import TopBarMenu from "../../Shared/TopBarMenu/TopBarMenu";

const Main = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-primary h-screen">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-9">
        <TopBarMenu></TopBarMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
