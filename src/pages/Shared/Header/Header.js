import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../../context/UserContexts";
import { UserCircleIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const { user, logOut, theme, setTheme } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

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
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      console.log(theme);
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    console.log(theme);
  };

  return (
    <div
      className={`flex items-center w-full py-3 ${
        theme === "dark" ? "bg-indigo-700" : "bg-slate-400"
      }`}
    >
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
        className={`text-center md:flex md:items-center md:text-lg w-full py-3 justify-center md:justify-end md:mr-5 md:mx-auto md:py-0 absolute md:static duration-100 ease-in ${
          open ? " top-12" : "top-[-200px]"
        }  ${theme === "dark" ? "bg-indigo-700" : "bg-slate-400"}`}
      >
        <li className="md:mx-3">
          <NavLink to="/courses">Courses</NavLink>
        </li>
        <li className="md:mx-3">
          <NavLink to="/faq">FAQ</NavLink>
        </li>
        <li className="md:mx-3">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        {user?.uid ? (
          <>
            <li className="mb-2 md:mb-0 md:my-0 md:mx-3 text-xl">
              <button
                onClick={handleLogOut}
                className={`btn btn-sm  ${
                  theme === "dark" ? "btn-secondary" : "btn-primary"
                }`}
              >
                Sign Out
              </button>
            </li>
            <li className="md:mx-3">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                {user?.photoURL ? (
                  <div className="avatar">
                    <div className="w-8 rounded-full ring ring-primary ">
                      <img src={user.photoURL} alt="" />
                    </div>
                  </div>
                ) : (
                  <UserCircleIcon className="h-9"></UserCircleIcon>
                )}
              </div>
            </li>
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
