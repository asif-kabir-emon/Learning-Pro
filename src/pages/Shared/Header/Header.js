import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-400 flex items-center w-full py-2">
      <NavLink
        to="/"
        className="btn btn-ghost hover:none normal-case text-xl lg:text-2xl"
      >
        <img src="logo.png" alt="" srcset="" className="w-6 lg:w-8 mr-2" />
        Learning Pro
      </NavLink>
      <div
        onClick={() => setOpen(!open)}
        className="h-7 w-7 md:hidden ml-auto mr-3"
      >
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`bg-slate-400 md:flex w-full py-3 justify-center md:justify-end md:mr-5 md:mx-auto md:py-0 absolute md:static duration-100 ease-in ${
          open ? " top-12" : "top-[-200px]"
        }`}
      >
        <li className="md:mx-3 text-lg">
          <NavLink to="/home">Courses</NavLink>
        </li>
        <li className="md:mx-3 text-lg">
          <NavLink to="/home">FAQ</NavLink>
        </li>
        <li className="md:mx-3 text-lg">
          <NavLink to="/home">Blog</NavLink>
        </li>
        <li className="md:mx-3 text-lg">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="md:mx-3 text-lg">
          <NavLink to="/register">Register</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
