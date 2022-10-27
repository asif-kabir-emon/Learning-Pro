import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const data = useLoaderData();

  return (
    <div className="pt-6">
      <p className="text-3xl md:text-2xl lmd:font-bold lg:font-normal text-center md:pl-6">
        Total Courses found: {data.length}
      </p>
      <div className="mt-6 mx-4 md:pl-6 flex justify-center ">
        <div className=" grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {data.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
