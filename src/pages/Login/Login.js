import React from "react";
import { Link } from "react-router-dom";
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
                <label className="label">
                  <Link className="label-text-alt text-lg link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>

            <div className="mt-2">
              Don't Have Account? Please
              <Link to="/register" className="text-primary ml-1 underline">
                Register
              </Link>
            </div>

            <hr className="h-1 bg-slate-800 mt-6 mx-2" />
            <p className="text-center text-lg font-bold mt-2">Login using</p>

            <div className="flex justify-center">
              <div className="my-2 mx-3">
                <button className="btn bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 normal-case text-lg">
                  <img
                    src={googleIcon}
                    alt=""
                    srcset=""
                    className=" h-5 mr-2"
                  />
                  <span>Google</span>
                </button>
              </div>
              <div className="my-2 mx-3">
                <button className="btn btn-black normal-case text-lg">
                  <FaGithub className="mr-2"> </FaGithub> GitHub
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
