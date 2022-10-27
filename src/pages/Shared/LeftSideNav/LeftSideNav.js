import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/UserContexts";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const { theme } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://learning-pro-server.vercel.app/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pt-6 pl-6">
      <p
        className={`text-xl lg:text-2xl font-bold lg:font-normal mb-2 ${
          theme === "dark"
            ? "text-rose-900 font-extrabold"
            : "text-black font-normal"
        }`}
      >
        Course Category
      </p>
      {categories.map((category) => (
        <div key={category.id}>
          <Link
            to={`/courses/category/${category.id}`}
            className={`text-base ${
              theme === "dark" ? "text-white" : "text-blue-900"
            }`}
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
