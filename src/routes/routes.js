import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Others/ErrorPage/ErrorPage";
import Terms from "../pages/Others/Terms/Terms";
import Register from "../pages/Register/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <div>Home</div> },
      { path: "/courses", element: <div>Home</div> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/terms", element: <Terms></Terms> },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);

export default routes;
