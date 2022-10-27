import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/UserContexts";

const CheckOut = () => {
  const data = useLoaderData();
  const { title, price } = data;
  const { theme } = useContext(AuthContext);

  return (
    <div>
      <h1 className="mt-4 text-3xl md:text-5xl text-center font-bold">
        Check Out Course
      </h1>
      <div
        className={`text-center mt-10 ${
          theme === "dark" ? "bg-indigo-500" : "bg-slate-200"
        } shadow-md rounded-lg mx-5 md:mx-10 py-5`}
      >
        <p className="font-bold text-3xl">{title}</p>
        <p className="text-lg  font-serif">
          <b>Price:</b> ${price}
        </p>
      </div>
    </div>
  );
};

export default CheckOut;
