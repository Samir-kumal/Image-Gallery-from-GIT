import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getFormLabelUtilityClasses } from "@mui/material";

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email:"",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      phoneNo: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be atleast 8 or more")
        .required("Required"),
      confirmPassword: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required")
        .oneOf([Yup.ref("password")], "Passwords must Match"),
    }),
    onSubmit: (values) => {
      alert("signed up successfully");
      axios
        .post("https://image-gallery-backend-service.onrender.com/register", values)
        .then((res) => console.log(res));
      location.href = "/";
    },
  });

  return (
    <div className=" rounded-2xl h-full items-center justify-center w-full  z-50">
      <div className="relative flex   h-full w-full flex-col-reverse xl:flex-row lg:flex-row md:flex-row">
        <div className="h-full lg:w-1/2 md:w-1/2 xl:w-1/2 w-full ">
          <div className="mx-auto flex h-full w-2/3 flex-col justify-center text-white xl:w-1/2">
            <div className="my-16">
              <p className="text-center font-bold text-4xl">Sign Up</p>
            </div>
            <div className="my-6">
              <button className="flex w-full justify-center rounded-3xl border-none bg-gray-200 p-1 text-black hover:bg-gray-300 sm:p-2">
                <img
                  src="https://freesvg.org/img/1534129544.png"
                  className="mr-2 w-6 object-fill"
                />
                Sign up with Google
              </button>
            </div>
            <div>
              <fieldset className="border-t border-solid border-gray-600">
                <legend className="mx-auto px-2 text-center text-black text-sm">
                  Or Sign up via our secure system
                </legend>
              </fieldset>
            </div>
            <div className="mt-10">
              <form
                className="flex flex-col gap-y-3"
                onSubmit={formik.handleSubmit}
              >
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={
                      formik.touched.firstName && formik.errors.firstName
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your first name"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <p className="text-red-600">{formik.errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={
                      formik.touched.lastName && formik.errors.lastName
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your last name"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <p className="text-red-600">{formik.errors.lastName}</p>
                  )}
                </div>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
                    htmlFor="phoneNo"
                  >
                    Phone No
                  </label>
                  <input
                    type="number"
                    id="phoneNo"
                    name="phoneNo"
                    className={
                      formik.touched.phoneNo && formik.errors.phoneNo
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your phone no"
                    value={formik.values.phoneNo}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.phoneNo && formik.errors.phoneNo && (
                    <p className="text-red-600">{formik.errors.phoneNo}</p>
                  )}
                </div>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
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
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-600">{formik.errors.email}</p>
                  )}
                </div>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
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
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <p className="text-red-600">{formik.errors.password}</p>
                  )}
                </div>
                <div>
                  <label
                    className="mb-2.5 block font-extrabold text-black"
                    htmlFor="confirmPassword"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                        ? "inline-block w-full rounded-xl bg-white p-2.5 border-2 border-red-600 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                        : "inline-block w-full rounded-xl bg-white p-2.5 leading-none text-black placeholder-indigo-900 shadow placeholder:opacity-30"
                    }
                    placeholder="Enter your confirm Password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword && (
                      <p className="text-red-600">
                        {formik.errors.confirmPassword}
                      </p>
                    )}
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
