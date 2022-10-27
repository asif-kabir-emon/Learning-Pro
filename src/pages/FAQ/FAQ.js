import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContexts";

const FAQ = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex justify-center">
      <div className="w-3/4">
        <div
          className={`${
            theme === "dark" ? "bg-indigo-400 text-black" : "bg-gray-300"
          } rounded-md my-4`}
        >
          <h3
            className={`md:text-2xl font-bold ${
              theme === "dark" ? "bg-indigo-500" : "bg-gray-400"
            } m-0 rounded-t-md px-3 py-2`}
          >
            Is money Refundable after purchase?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            No, money is not refundable after purchase.
          </p>
        </div>
        <div
          className={`${
            theme === "dark" ? "bg-indigo-400 text-black" : "bg-gray-300"
          } rounded-md my-4`}
        >
          <h3
            className={`md:text-2xl font-bold ${
              theme === "dark" ? "bg-indigo-500" : "bg-gray-400"
            } m-0 rounded-t-md px-3 py-2`}
          >
            Is course has life-time access?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            Yes, after purchasing a course, it has life-time access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
