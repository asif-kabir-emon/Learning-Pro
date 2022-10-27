import React, { createRef } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { ArrowDownCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import Pdf from "react-to-pdf";

const CourseSummary = () => {
  const course = useLoaderData();
  const {
    _id,
    image_url,
    title,
    details,
    instructor,
    price,
    total_enrolled,
    rating,
    duration,
  } = course;

  const ref = createRef();

  return (
    <div>
      <div className="p-5 mb-20 w-full" ref={ref}>
        <div className="px-6 py-4">
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center my-4">
            <div className="font-bold text-5xl mb-2">{title}</div>
            <Pdf targetRef={ref} filename="code-example.pdf" scale={0.6}>
              {({ toPdf }) => (
                <button onClick={toPdf}>
                  <div className="flex items-center">
                    <button onClick={toPdf}>
                      <ArrowDownCircleIcon className="h-10"></ArrowDownCircleIcon>
                    </button>
                    <span className="ml-1 text-lg">Download Details</span>
                  </div>
                </button>
              )}
            </Pdf>
          </div>

          <img className="w-full" src={image_url} alt="" />

          <div className="my-5 flex items-center">
            <div className="avatar mr-2">
              <div className="w-7 rounded-full">
                <img src={instructor.img} alt="" />
              </div>
            </div>
            <span className="text-lg ">{instructor.name}</span>
          </div>

          <p className="my-2 text-sm flex items-center">
            Course Rating:
            <StarIcon className="h-5 text-yellow-400 mx-1"></StarIcon>
            {rating.number}
          </p>

          <p className="my-2 text-sm ">Course Duration: {duration}</p>

          <p className="text-gray-700 mt-4 text-base text-justify">{details}</p>

          <p className="my-4 text-xl text-emerald-600">
            Totol Enrolled: {total_enrolled}
          </p>
          <p className="font-bold text-2xl text-emerald-600">
            Course Price: ${price}
          </p>
        </div>
        <div className="px-5 pt-4 pb-2">
          <Link to={`/course-out/${_id}`}>
            <button className="btn btn-info w-full">Get premium access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
