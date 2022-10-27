import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContexts";
import toast from "react-hot-toast";

const Register = () => {
  const { createAccount, updateUserProfile, verifyEmail, theme } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(name, photoURL, email, password);

    createAccount(email, password)
      .then(() => {
        setError("");
        handleUpdateProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Successfully Registered. Verify Your Email");
      })
      .catch((error) => {
        setError(error.message);
        toast.error("Failed to Register");
      });
  };

  const handleUpdateProfile = (name, photo) => {
    updateUserProfile({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        console.log("Name and Password Updated Successfully");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "text-black" : "bg-slate-200"
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Please Register Now
          </h1>
        </div>
        <div className="mt-6 rounded-lg w-full max-w-sm shadow-2xl bg-base-100">
          <div className="px-5 py-3">
            <form onSubmit={handleRegister}>
              <p className="text-red-700 text-base text-center mb-2">{error}</p>
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

              <div className="form-control mt-2">
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    onClick={handleAccepted}
                    className="checkbox checkbox-md checkbox-accent text-black"
                  />
                  <span className="label-text ml-1 text-base">
                    Accept
                    <Link to="/terms" className="text-blue-600">
                      Tearms and Conditions
                    </Link>
                  </span>
                </label>
              </div>

              <div className="form-control mt-4">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!accepted}
                >
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
