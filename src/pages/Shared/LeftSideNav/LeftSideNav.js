import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/course-category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="pt-6 pl-6">
      <p className="text-xl lg:text-3xl font-bold lg:font-normal mb-2">
        Course Category
      </p>
      {categories.map((category) => (
        <div key={category.id}>
          <Link
            to={`/courses/category/${category.id}`}
            className="text-base text-blue-900"
          >
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LeftSideNav;
