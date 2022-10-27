import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import googleIcon from "../../assets/icons/googleIcon.png";
import { AuthContext } from "../../context/UserContexts";
import toast from "react-hot-toast";

const Login = () => {
  const {
    setUser,
    setLoading,
    loginWithEmailPassword,
    loginWithGoogle,
    loginWithGithub,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPassword(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        if (user.emailVerified) {
          toast.success("Successfully login");
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email address.");
        }
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Failed to login");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();

    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setError("");
        if (user.emailVerified) {
          toast.success("Successfully login");
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email address.");
        }
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Failed to login");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGithubLogin = (event) => {
    event.preventDefault();

    loginWithGithub()
      .then((result) => {
        const user = result.user;
        user.emailVerified = true;
        console.log(user);
        setError("");
        setUser(user);
        if (user.emailVerified) {
          toast.success("Successfully login");
          navigate(from, { replace: true });
        } else {
          toast.error("Please verify your email address.");
        }
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Failed to login");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex flex-col items-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Please Login Now</h1>
        </div>
        <div className="mt-6 rounded-lg w-full max-w-sm shadow-2xl bg-base-100">
          <div className="px-5 py-3">
            <form onSubmit={handleLoginSubmit}>
              <p className="text-red-700 text-base text-center mb-2">{error}</p>
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

            <hr className="h-1 bg-slate-500 mt-6 mx-3" />
            <p className="text-center text-lg font-bold mt-2">Login using</p>

            <div className="flex justify-center">
              <div className="my-2 mx-3">
                <button
                  onClick={handleGoogleLogin}
                  className="btn bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 normal-case text-lg"
                >
                  <img src={googleIcon} alt="" className=" h-5 mr-2" />
                  <span>Google</span>
                </button>
              </div>
              <div className="my-2 mx-3">
                <button
                  onClick={handleGithubLogin}
                  className="btn btn-black normal-case text-lg"
                >
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
