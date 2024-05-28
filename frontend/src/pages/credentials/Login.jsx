import React, { useState } from "react";
import logo from "../../assets/Carbs.svg";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <section class="lg:mt-12 md:mt-16 sm:mt-20 mt-20">
      <div class="flex flex-col items-center justify-center mx-auto sm:px-4 px-4">
        <div class=" lg:w-1/4 md:w-1/2 sm:w-full w-full bg-white rounded-lg py-4 lg:px-8 md:px-6 sm:px-4 px-4 shadow border-red-600">
          <div class="space-y-4 md:space-y-6 sm:p-8">
            <div class="flex flex-col items-center justify-center ">
              <img
                class="flex items-center mr-2 h-15 w-15"
                src={logo}
                alt="logo"
              />
              <p class="text-center  font-semibold leading-tight tracking-tight text-gray-900 text-xl">
                Login first to continue
              </p>
            </div>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute inset-y-0 right-0 px-4 text-sm cursor-pointer focus:outline-none dark:text-white"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.305 6.307a5.003 5.003 0 00-7.07 0l1.687 1.687A3.993 3.993 0 014 8.305V X 0"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3.855 5.16c0 3.624 2.895 6.48 6.143 6.48 3.248 0 6.143-2.856 6.143-6.48 0-3.624-2.895-6.48-6.143-6.48-3.248 0-6.143 2.856-6.143 6.48zM12 7.671a1 1 0 010 2.657h.793a1 1 0 100-2.657H12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </div>
              <div class="flex items-center justify-between my-1">
                <div class="flex items-start"></div>
                <a
                  href="#"
                  class="text-blue-600 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <Link
                to="/filter"
                type="submit"
                class="w-full my-0 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </Link>
              <Divider />
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
            <div className="flex flex-row gap-10 justify-center">
              <SocialIcon network="facebook" />
              <SocialIcon network="google" />
              <SocialIcon network="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
