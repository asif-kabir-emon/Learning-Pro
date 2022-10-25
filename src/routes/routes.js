import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <div>Home</div> },
      { path: "/home", element: <div>Home</div> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);

export default routes;
