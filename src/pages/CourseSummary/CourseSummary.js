import React, { createRef, useContext } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContexts";
import { ArrowDownCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import ReactToPdf from "react-to-pdf";
import "./CourseSummary.css";

const CourseSummary = () => {
  const { theme } = useContext(AuthContext);
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
    <div className="flex justify-center">
      <div className="image-size" ref={ref}>
        <div className={`p-5 mb-20 w-full`}>
          <div className="px-6 py-4 ">
            <div
              className={`flex flex-col-reverse md:flex-row justify-between md:items-center my-4 ${
                theme === "dark" ? " required: text-black" : "text-black"
              }`}
            >
              <div className="font-bold text-5xl mb-2">{title}</div>
              <ReactToPdf targetRef={ref} filename="course-detail.pdf">
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
              </ReactToPdf>
            </div>

            <img className="w-full" src={image_url} alt="Course_Photo" />

            <div
              className={`my-5 flex items-center ${
                theme === "dark" ? " required: text-black" : "text-black"
              }`}
            >
              <div className="avatar mr-2">
                <div className="w-7 rounded-full">
                  <img src={instructor.img} alt="" />
                </div>
              </div>
              <span className="text-lg ">{instructor.name}</span>
            </div>

            <p
              className={`my-2 text-sm flex items-center ${
                theme === "dark" ? " required: text-black" : "text-black"
              }`}
            >
              Course Rating:
              <StarIcon className="h-5 text-yellow-400 mx-1"></StarIcon>
              {rating.number}
            </p>

            <p
              className={`my-2 text-sm ${
                theme === "dark" ? "text-black" : "text-black"
              }`}
            >
              Course Duration: {duration}
            </p>

            <p
              className={`mt-4 text-lg text-justify ${
                theme === "dark" ? "text-black" : "text-black"
              }`}
            >
              {details}
            </p>

            <p className="my-4 text-xl text-emerald-700">
              Totol Enrolled: {total_enrolled}
            </p>
            <p className="font-bold text-2xl text-emerald-700">
              Course Price: ${price}
            </p>
          </div>
          <div className="px-5 pt-4 pb-2">
            <Link to={`/course-out/${_id}`}>
              <button
                className={`btn ${
                  theme === "dark" ? "btn-primary" : "btn-info"
                } w-full`}
              >
                Get premium access
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
