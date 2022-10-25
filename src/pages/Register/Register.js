import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="hero-content flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register Now </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered border-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Photo URL"
                  className="input input-bordered border-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered border-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered border-2"
                />
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
            <div className="mt-2">
              Already Have Account? Please
              <Link to="/login" className="text-primary ml-1 underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
