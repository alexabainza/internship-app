import React, { useState } from "react";
import logo from "../../assets/Carbs.svg";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  const { loading, error } = useSelector((state) => state.user);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    setErrorMessage("");
    setErrors({
      ...errors,
      [e.target.id]: "",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${key.replace(/_/g, " ")} is required`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        newErrors.message = data.message;
        setErrorMessage(data.message);
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/results");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <section className="lg:pt-20 md:pt-16 sm:pt-20 pt-20 min-h-screen">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className=" lg:w-1/4 md:w-1/2 sm:w-full w-full bg-white rounded-lg py-4 shadow border-red-600">
          <div className="space-y-4 md:space-y-6 sm:p-8">
            <div className="flex flex-col items-center justify-center ">
              <img
                className="flex items-center mr-2 h-15 w-15"
                src={logo}
                alt="logo"
              />
              <p className="text-center  font-semibold leading-tight tracking-tight text-gray-900 text-xl">
                Login first to continue
              </p>
            </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-700 text-sm">{errors.email}</p>
                )}
              </div>
              <div className="relative">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={handleChange}
                  />
                  {showPassword ? (
                    <FaEyeSlash
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={toggleShowPassword}
                      size={20}
                    />
                  ) : (
                    <FaEye
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
                      onClick={toggleShowPassword}
                      size={20}
                    />
                  )}
                  {errors.password && (
                    <p className="text-red-700 text-sm">{errors.password}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between my-1">
                <div className="flex items-start"></div>
                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                disabled={isLoading}
                type="submit"
                className="w-full my-0 text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              {errorMessage && (
                <p className="text-red-700 text-sm">{errorMessage}</p>
              )}{" "}
              <Divider />
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
