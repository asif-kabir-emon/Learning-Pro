import React from "react";
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";

const Course = ({ course }) => {
  const { image_url, title, details, rating, total_enrolled, price } = course;
  return (
    <div className="md:w-96 lg:w-80 2xl:w-96 bg-base-100 shadow-xl rounded-lg">
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
              <Link className=" text-blue-400">Read more</Link>
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
          <button className="btn btn-info w-full">Read In Deatils</button>
        </div>
      </div>
    </div>
  );
};

export default Course;
