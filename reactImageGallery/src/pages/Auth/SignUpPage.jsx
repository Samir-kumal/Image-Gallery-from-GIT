import React, { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues({
      firstName: "",
      lastName: "",
      phoneNo: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    axios
      .post("http://localhost:5000/register", inputValues)
      .then((res) => console.log(res))
      // .then((data) => {
      //   console.log(data);
      // });

    // console.log(inputValues);
  };
  return (
    <div className=" rounded-2xl h-full items-center justify-center w-full  z-50">
      <div className="relative flex   h-full w-full flex-col-reverse xl:flex-row lg:flex-row md:flex-row">
        <div className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 w-full ">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div className="my-16">
              <p className="text-center font-bold text-4xl">Sign Up</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-white p-1 text-black hover:bg-gray-200 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign up with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm">
                  Or Sign up via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="firstName" >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your first name"
                    value={inputValues.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your last name"
                    value={inputValues.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="phoneNo">
                    Phone No
                  </label>
                  <input
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your phone no"
                    value={inputValues.phoneNo}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="mb-2.5 block font-extrabold" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    placeholder="Enter your confirm Password"
                    value={inputValues.confirmPassword}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="my-10">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-orange-600 px-5 py-3 hover:bg-orange-800"
                  >
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="h-[138vh] justify-center items-center w-1/2 bg-blue-600 hidden xl:flex lg:flex md:flex">
          <img
            src="https://1937169732.rsc.cdn77.org/images/block1_11689.jpg?1694105265"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
