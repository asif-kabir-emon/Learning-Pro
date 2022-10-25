import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="text-center">
      <p className="mt-20 text-xl text-purple-800">Terms And Conditions</p>
      <br />
      <Link to="/register">
        <button className="btn btn-secondary">Back to register page</button>
      </Link>
    </div>
  );
};

export default Terms;
