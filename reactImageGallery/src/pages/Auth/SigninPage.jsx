import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
const SigninPage = ({ handleShow }) => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });
  const { getUserData } = useAuth();

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/login", inputValues).then((res) => {
      const response = res.data;
      console.log(response.data);

      if (response.status === "ok") {
        getUserData(response.data)
        alert("Login successful");
        if(response.data){

          localStorage.setItem("token", response.data);
        }
        handleShow(false);
      }
      // setuserToken()
    });
    // console.log(inputValues);
  };
  return (
    <div className="fixed rounded-2xl h-full w-[90%]  z-50">
      <div className="relative flex  h-full w-full flex-col-reverse xl:flex-row lg:flex-row md:flex-row">
        <button
          onClick={() => handleShow(false)}
          className="bg-white rounded-lg z-[60] w-10 h-10 absolute top-0 left-0 flex items-center justify-center font-bold text-2xl"
        >
          X
        </button>
        <div className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 w-full bg-black">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div>
              <p className="text-2xl">Login|</p>
              <p>please login to continue|</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign in with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-300 shadow "
                    placeholder="Enter Email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="mb-2.5 block font-extrabold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-300 shadow"
                    placeholder="Type Password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mt-4 flex w-full flex-col justify-between sm:flex-row">
                  {/* Remember me  */}
                  <div>
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember" className="mx-2 text-sm">
                      Remember me
                    </label>
                  </div>
                  {/* Forgot password  */}
                  <div>
                    <a href="#" className="text-sm hover:text-gray-200">
                      Forgot password
                    </a>
                  </div>
                </div>
                <div className="my-10 flex flex-col gap-y-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-600 px-5 py-3 hover:bg-orange-800"
                  >
                    Login
                  </button>
                  <NavLink to={"/Signup"}>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-white text-black px-5 border-2 border-orange-600 py-2 hover:bg-orange-800"
                    >
                      Signup
                    </button>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-full w-1/2 bg-blue-600 hidden xl:block lg:block md:block">
          <img
            src="https://images.pexels.com/photos/2523959/pexels-photo-2523959.jpeg"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
