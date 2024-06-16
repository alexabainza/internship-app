import React, { useState, useEffect, useRef } from "react";
import { lightTheme } from "../../styles/theme";
import Dropdown from "../../components/Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../../firebase";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
const SetupCompany = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [preview, setPreview] = useState("");
  const fileInputRef = useRef(null);
  const [userData, setUserData] = useState({
    company_name: "",
    company_address: "",
    industry: "",
    company_size: "",
    company_description: "",
    company_logo: "",
    company_email: "",
    company_contact_no: "",
    company_website: "",
    company_username: "",
    password: "",
  });

  const industry = [
    { label: "Advertising and Marketing", value: "1" },
    { label: "Aerospace", value: "2" },
    { label: "Agriculture", value: "3" },
    { label: "Computer and Technology", value: "4" },
    { label: "Construction", value: "5" },
    { label: "Energy", value: "6" },
    { label: "Entertainment", value: "7" },
  ];

  const companySize = [
    { label: "0-10 employees", value: "1" },
    { label: "11-50 employees", value: "2" },
    { label: "51-100 employees", value: "3" },
    { label: "101-500 employees", value: "4" },
    { label: "500-1000 employees", value: "5" },
    { label: "1000-5000 employees", value: "6" },
    { label: "5000-10000 employees", value: "7" },
    { label: "10000+ employees", value: "8" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (name, option) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: option.label,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/setup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess({ ...data.companyDetails }));
      navigate("/company-dashboard");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app); //knows which storage we want to get the file from
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setUserData((prevData) => ({
            ...prevData,
            company_logo: downloadURL,
          }))
        );
      }
    );
  };
  const handleRemoveImage = () => {
    setFile(undefined);
    setPreview("");
    setUserData((prevData) => ({
      ...prevData,
      company_logo: "",
    }));
    fileInputRef.current.click();
  };

  return (
    <div className="pt-28 min-h-screen shadow-xl pb-2 bg-white lg:px-16 md:px-8 sm:px-2 px-2 overflow-auto">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-end">
        Already have an account?
        <Link
          to="/company-login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 ms-2"
        >
          Login here
        </Link>
      </p>
      <h1 style={{ color: lightTheme.primary }} className="text-4xl font-bold">
        Setup Company Profile
      </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <section>
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
            style={{ color: lightTheme.primary }}
          >
            Company Information
          </h3>
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Company Name
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.company_name}
                name="company_name"
                placeholder="Company Name"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Company Address
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.company_address}
                name="company_address"
                placeholder="Company Address"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-full mt-2">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Logo
              </div>
              <div className="bg-white my-1 p-1 flex border rounded-md">
                <input
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="myFile"
                  name="filename"
                  accept="image/*"
                />
              </div>
              {preview && (
                <div className="my-4">
                  <p className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase mb-1">
                    Logo Preview
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={preview}
                      alt="Company Logo Preview"
                      className="w-32 h-32 object-cover border rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => fileInputRef.current.click()}
                      className="mt-2 text-white font-medium rounded-lg text-sm px-5 py-2.5"
                      style={{ backgroundColor: lightTheme.secondary }}
                    >
                      Replace image
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase mb-1">
              Industry
            </div>
            <Dropdown
              options={industry}
              onSelect={(option) => handleSelect("industry", option)}
            />
          </div>
          <div className="flex flex-col mb-1">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase mb-1">
              Company Size
            </div>
            <Dropdown
              options={companySize}
              onSelect={(option) => handleSelect("company_size", option)}
            />
          </div>
        </section>
        <section className="flex flex-col">
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
            style={{ color: lightTheme.primary }}
          >
            Company Profile
          </h3>
          <div className="flex gap-4">
            <div className="flex flex-col w-full mt-2">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Company Description
              </div>
              <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
                <textarea
                  onChange={handleChange}
                  value={userData.company_description}
                  name="company_description"
                  placeholder="Enter company description here"
                  required
                  className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
                  rows="6"
                />
              </div>
            </div>
          </div>
          {/* <div className="flex gap-4">
            <div className="flex flex-col w-full mt-2">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Logo
              </div>
              <div className="bg-white my-1 p-1 flex border rounded-md">
                <input
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="myFile"
                  name="filename"
                  accept="image/*"
                />
              </div>
              {preview && (
                <div className="mt-4">
                  <p className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase mb-1">
                    Logo Preview
                  </p>
                  <img
                    src={preview}
                    alt="Company Logo Preview"
                    className="w-32 h-32 object-cover border rounded-md"
                  />
                </div>
              )}
            </div>
          </div> */}
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Company Email
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.company_email}
                name="company_email"
                placeholder="Company Email"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Company Contact Number
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.company_contact_no}
                name="company_contact_no"
                placeholder="Company Contact Number"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col w-full ">
              <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
                Website
              </div>
              <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
                <input
                  onChange={handleChange}
                  value={userData.company_website}
                  name="company_website"
                  placeholder="Enter company website here"
                  required
                  className="p-1 px-2 appearance-none border-none outline-none w-full text-gray-800"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3
            className="font-semibold lg:text-xl sm:text-lg text-lg mt-4"
            style={{ color: lightTheme.primary }}
          >
            Company Credentials
          </h3>
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Username
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.company_username}
                name="company_username"
                placeholder="Username"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-bold h-6 text-gray-500 text-xs leading-8 uppercase">
              Password
            </div>
            <div className="bg-white my-1 p-1 flex border border-[#056480] rounded-md">
              <input
                onChange={handleChange}
                value={userData.password}
                name="password"
                type="password"
                placeholder="Company Password"
                required
                className="p-1 px-2 appearance-none outline-none border-none w-full text-gray-800"
              />
            </div>
          </div>
        </section>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 text-white  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            style={{ backgroundColor: lightTheme.secondary }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetupCompany;
