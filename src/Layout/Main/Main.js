import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 bg-primary">
        <Sidebar></Sidebar>
      </div>
      <div className="col-span-9">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
