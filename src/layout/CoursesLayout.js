import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../context/UserContexts";
import LeftSideNav from "../pages/Shared/LeftSideNav/LeftSideNav";

const CoursesLayout = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="">
      <div className="md:grid md:grid-cols-12 flex flex-col-reverse">
        <div
          className={`col-span-12 md:col-span-3 xl:col-span-2 ${
            theme === "dark" ? " bg-indigo-500" : "bg-slate-100"
          } md:min-h-screen pb-3`}
        >
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-12 md:col-span-9 xl:col-span-10 mb-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default CoursesLayout;
