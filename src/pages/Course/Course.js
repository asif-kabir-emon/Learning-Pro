import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../context/UserContexts";

const Course = ({ course }) => {
  const { _id, image_url, title, details, rating, price } = course;
  const { theme } = useContext(AuthContext);
  return (
    <div
      className={`md:w-96 lg:w-80 2xl:w-96 bg-base-100 shadow-xl rounded-lg ${
        theme === "dark" ? "text-black" : "text-black"
      }`}
    >
      <div>
        <img
          src={image_url}
          alt="Shoes"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify">
          {details.length > 100 ? (
            <>
              {details.slice(0, 100) + " ... "}
              <Link to={`/course/${_id}`} className=" text-blue-400">
                Read more
              </Link>
            </>
          ) : (
            <>{details}</>
          )}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="flex items-center">
            <StarIcon className="h-5 text-yellow-500"></StarIcon>
            <span className="p-0 m-0 pl-1">{rating.number}</span>
            <span className="p-0 m-0 pl-2">{rating.badge}</span>
          </span>
          <span>Price: ${price}</span>
        </div>
        <div className="card-actions mt-3 justify-center">
          <Link to={`/course/${_id}`} className="w-full">
            <button className="btn btn-info w-full">Read In Deatil</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
