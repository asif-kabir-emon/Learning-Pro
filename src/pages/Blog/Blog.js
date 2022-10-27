import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContexts";

const Blog = () => {
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
            what is cors?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            Cross-origin resource sharing is a mechanism that allows restricted
            resources on a web page to be requested from another domain outside
            the domain from which the first resource was served. A web page may
            freely embed cross-origin images, stylesheets, scripts, iframes, and
            videos.
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
            Why are you using firebase? What other options do you have to
            implement authentication?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            Firebase helps you develop high-quality apps with user
            authentication system by which a new user can register or login to
            their account. It supports authentication using passwords, phone
            numbers, popular federated identity providers like Google, Facebook
            and Twitter, and more.
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
            How does the private route work?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in).
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
            What is Node? How does Node work?
          </h3>
          <p className="text-xs md:text-base px-3 py-5">
            Node. js is a JavaScript runtime environment that achieves low
            latency and high throughput by taking a “non-blocking” approach to
            serving requests. In other words, Node. js wastes no time or
            resources on waiting for I/O requests to return.
            <br />
            <br />
            Node is completely event-driven. Basically the server consists of
            one thread processing one event after another. A new request coming
            in is one kind of event. The server starts processing it and when
            there is a blocking IO operation, it does not wait until it
            completes and instead registers a callback function.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
