import React, { useState } from "react";
import logo from "../../assets/Carbs.svg";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { loading, error } = useSelector((state) => state.user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(e.target.id, e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess({ ...data.userDetails }));
      navigate("/user-dashboard");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <section class="lg:mt-12 md:mt-16 sm:mt-20 mt-20 min-h-screen">
      <div class="flex flex-col items-center justify-center mx-auto sm:px-4 px-4">
        <div class=" w-1/2 bg-white rounded-lg py-4 px-2 shadow border-red-600">
          <div class="space-y-4 md:space-y-6 p-4">
            <div class="flex flex-col items-center justify-center ">
              <img
                class="flex items-center mr-2 h-15 w-15"
                src={logo}
                alt="logo"
              />
              <p class="text-center  font-semibold leading-tight tracking-tight text-gray-900 text-xl">
                Register first to continue
              </p>
            </div>
            <form class="space-y-4" onSubmit={handleSubmit}>
              <div className="flex justify-between gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="first_name"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="first_name"
                    name="first_name"
                    id="first_name"
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e. John"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="last_name"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="last_name"
                    name="last_name"
                    id="last_name"
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e. Doe"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="school"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    School
                  </label>
                  <input
                    type="text"
                    name="school"
                    id="school"
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="i.e. University of San Carlos"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="course"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Course
                  </label>
                  <input
                    type="text"
                    name="course"
                    id="course"
                    onChange={handleChange}
                    placeholder="i.e. Bachelor of Science in Computer Science"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="email"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your username
                  </label>
                  <input
                    type="textl"
                    name="username"
                    id="username"
                    onChange={handleChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label
                    for="password"
                    class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      onChange={handleChange}
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? (
                        <FaEyeSlash size={20} />
                      ) : (
                        <FaEye size={20} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled={isLoading}
                class="w-full my-0 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {isLoading ? "Loading..." : "Sign in "}{" "}
              </button>
              <Divider />
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </form>

            {error && <p className="text-red-500 mt-5">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
