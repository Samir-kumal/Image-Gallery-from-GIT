import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthProvider";
import { GoogleLogin } from "@react-oauth/google";
import { useFormik } from "formik";

import * as Yup from "yup";

const SigninPage = ({ handleShow }) => {
  const { getUserData, handleGoogleSigninToken } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string().required("Password Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:5000/login", values).then((res) => {
        const response = res.data;
        console.log(response.data);

        if (response.status === "ok") {
          getUserData(response.data);
          alert("Login successful");
          if (response.data) {
            localStorage.setItem("token", response.data);
          }
          handleShow(false);
        }
      });
    },
  });

  return (
    <div className="fixed rounded-2xl h-[85%] w-[60%] z-50 ">
      <div className="relative flex  h-full w-full flex-col-reverse xl:flex-row lg:flex-row md:flex-row flex items-center justify-center">
        <button
          onClick={() => handleShow(false)}
          className="bg-white z-[70] w-8 h-8 absolute top-0 left-0  font-bold text-2xl rounded-xl"
        >
          X
        </button>
        <div className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 w-full bg-white rounded-xl">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-black xl:w-1/2">
            <div className=" ">
              <p className="text-2xl">Login|</p>
              <p>please login to continue|</p>
            </div>
            <div className="my-6 w-full flex items-center justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  location.href = "/";

                  handleGoogleSigninToken(credentialResponse.credential);
                }}
                onError={() => {
                  console.log("login failed");
                }}
              />
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-sm">
                  Or login via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form onSubmit={formik.handleSubmit}>
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
                    className={
                      formik.touched.email && formik.errors.email
                        ? `inline-block w-full rounded-full bg-white border-2 border-red-600 p-2.5 leading-none text-black placeholder-indigo-300 shadow`
                        : `inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-300 shadow`
                    }
                    placeholder="Enter Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                  )}
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
                    className={
                      formik.touched.password && formik.errors.password
                        ? `inline-block w-full rounded-full bg-white border-2 border-red-600 p-2.5 leading-none text-black placeholder-indigo-300 shadow`
                        : `inline-block w-full rounded-full bg-white p-2.5 leading-none text-black placeholder-indigo-300 shadow`
                    }
                    placeholder="Type Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600">{formik.errors.password}</p>
                  )}
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
      </div>
    </div>
  );
};

export default SigninPage;
