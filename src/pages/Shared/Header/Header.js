import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../context/UserContexts";
import { UserCircleIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import Tooltip from "@mui/material/Tooltip";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  localStorage.setItem("theme", "light");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Successfully Log Out");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleTheme = () => {
    // eslint-disable-next-line no-lone-blocks
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    console.log(theme);
  };

  return (
    <div className="bg-slate-400 flex items-center w-full py-3">
      <NavLink to="/" className="btn btn-ghost normal-case text-xl lg:text-2xl">
        <img src="logo.png" alt="" className="w-6 lg:w-8 mr-2" />
        Learning Pro
      </NavLink>
      <div
        onClick={() => setOpen(!open)}
        className="h-7 w-7 md:hidden ml-auto mr-3"
      >
        {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
      </div>
      <ul
        className={`bg-slate-400 text-center md:flex md:items-center md:text-lg w-full py-3 justify-center md:justify-end md:mr-5 md:mx-auto md:py-0 absolute md:static duration-100 ease-in ${
          open ? " top-12" : "top-[-200px]"
        }`}
      >
        <li className="md:mx-3">
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li className="md:mx-3">
          <NavLink to="/courses">FAQ</NavLink>
        </li>
        <li className="md:mx-3">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        {user?.uid ? (
          <>
            <li className="md:mx-3 text-xl">
              <button onClick={handleLogOut} className="btn btn-primary btn-sm">
                Sign Out
              </button>
            </li>
            <Tooltip title={user?.displayName} arrow>
              {user?.photoURL ? (
                <div className="avatar">
                  <div className="md:mx-3 h-8 rounded-full ring ring-primary ">
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
              ) : (
                <UserCircleIcon className="md:mx-3 h-9"></UserCircleIcon>
              )}
            </Tooltip>
          </>
        ) : (
          <>
            <li className="md:mx-3">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="md:mx-3">
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        <li className="flex justify-center">
          <div className="md:mx-3 flex items-center">
            <SunIcon className="w-8 mr-1"></SunIcon>
            <input type="checkbox" className="toggle" onClick={handleTheme} />
            <MoonIcon className="w-6 ml-1"></MoonIcon>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
