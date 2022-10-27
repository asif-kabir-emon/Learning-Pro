import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/Others/ErrorPage/ErrorPage";
import Terms from "../pages/Others/Terms/Terms";
import Register from "../pages/Register/Register";
import CourseSummary from "../pages/CourseSummary/CourseSummary";
import CoursesLayout from "../layout/CoursesLayout";
import CheckOut from "../pages/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <CoursesLayout></CoursesLayout>,
        children: [
          {
            path: "/",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:4000/courses"),
          },
          {
            path: "/courses",
            element: <Courses></Courses>,
            loader: () => fetch("http://localhost:4000/courses"),
          },
          {
            path: "/courses/category/:id",
            element: <Courses></Courses>,
            loader: ({ params }) =>
              fetch(`http://localhost:4000/category/${params.id}`),
          },
          {
            path: "/course/:id",
            element: <CourseSummary></CourseSummary>,
            loader: ({ params }) =>
              fetch(`http://localhost:4000/course/${params.id}`),
          },
          {
            path: "/course-out/:id",
            element: (
              <PrivateRoute>
                <CheckOut></CheckOut>
              </PrivateRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:4000/course/${params.id}`),
          },
        ],
      },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/terms", element: <Terms></Terms> },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
]);

export default routes;
