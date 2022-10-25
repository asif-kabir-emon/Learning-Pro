import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <div>Home</div> },
      { path: "/home", element: <div>Home</div> },
      { path: "/login", element: <Login></Login> },
    ],
  },
]);

export default routes;
