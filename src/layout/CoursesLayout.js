import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";
// import Header from "../pages/Shared/Header/Header";
// import "./CoursesLayout.css";

const CoursesLayout = () => {
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 xl:col-span-2 hidden md:block bg-slate-100 min-h-screen">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-12 md:col-span-9 xl:col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default CoursesLayout;
