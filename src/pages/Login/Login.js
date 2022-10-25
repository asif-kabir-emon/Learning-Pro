import React from "react";
import { Link } from "react-router-dom";
// import { FaGoogle } from "@react-icons/all-files/fa/FaGoogle";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import googleIcon from "../../assets/icons/googleIcon.png";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-slate-200">
      <div className="hero-content flex flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login Now </h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered border-2"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered border-2"
                />
                <label className="label">
                  <Link className="label-text-alt text-lg link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4 mb-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <hr className="border-2 border-black mr-2" />
            <div className="flex justify-center">
              <div className="my-4 mx-4">
                <button className="btn bg-blue-500 hover:bg-blue-500 border-blue-600 normal-case text-lg">
                  <img
                    src={googleIcon}
                    alt=""
                    srcset=""
                    className=" h-5 mr-1"
                  />{" "}
                  <span>Google</span>
                </button>
              </div>
              <div className="my-4 mx-4">
                <button className="btn btn-black normal-case text-lg">
                  <FaGithub className="mr-1"> </FaGithub> GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
