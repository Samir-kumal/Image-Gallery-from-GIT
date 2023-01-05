import React from "react";
import Logo from "../assets/logo-pic.png";
import { useState } from "react";

const Navbar = () => {
  const image = {
    height: 90,
    width: 90,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  return (
    <nav className="h-16 w-full bg-slate-600 flex justify-between items-center  ">
      <img
        src={Logo}
        alt="image-logo"
        height={image.height}
        width={image.width}
      />
      <div className="searchbox h-max bg-black flex">
        <label htmlFor="search-text">
          {" "}
          <i className="fa fa-search"></i>
        </label>
        <input type="text" className="search-text" placeholder="SEARCH.." />
        <button>
          <svg
            width="42"
            height="42"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.1641 32.7044H34.8153L33.9828 31.9017C36.8965 28.5123 38.6507 24.1121 38.6507 19.3253C38.6507 8.6518 29.9989 0 19.3253 0C8.6518 0 0 8.6518 0 19.3253C0 29.9989 8.6518 38.6507 19.3253 38.6507C24.1121 38.6507 28.5123 36.8965 31.9017 33.9828L32.7044 34.8153V37.1641L47.57 52L52 47.57L37.1641 32.7044V32.7044ZM19.3253 32.7044C11.9222 32.7044 5.94626 26.7284 5.94626 19.3253C5.94626 11.9222 11.9222 5.94626 19.3253 5.94626C26.7284 5.94626 32.7044 11.9222 32.7044 19.3253C32.7044 26.7284 26.7284 32.7044 19.3253 32.7044Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="list bg-orange-400 p-2 h-12 ">
        <ul className="flex text-white ">
          <li className=" parent w-max bg-slate-900 w-36 h-max   ">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="bg-black"
            >
              <a href="#" className="o">
                HOME
              </a>
            </button>
            {isOpen && (
              <ul className="child flex flex-col bg-pink-400 translate-y-4 text-xs p-2 leading-6  ">
                <li>
                  <a href="#">CAROUSEL</a>
                </li>
                <li>
                  <a href="#">SLIDER DETAILS</a>
                </li>
                <li>
                  <a href="#">MULTI SLIDESHOW</a>
                </li>
                <li>
                  <a href="#">IMAGE</a>
                </li>
                <li>
                  <a href="#">SLIDER </a>
                </li>
                <li>
                  <a href="#">VIDEO</a>
                </li>
                <li>
                  <a href="#">SLIDESHOW</a>
                </li>
              </ul>
            )}
          </li>
          <li className="bg-slate-500 w-40 h-max">
            <button onClick={() => setIsOpen1((prev) => !prev)}>
              <a href="#">PORTFOLIO</a>
            </button>
            {isOpen1 && (
              <ul className="dropdown2 bg-pink-600 translate-y-4 text-xs p-2 leading-6">
                <li>
                  <a href="#">HORIZONTAL 1 COLUMN</a>
                </li>
                <li>
                  <a href="#">HORIZONTAL 2 COLUMN</a>
                </li>
                <li>
                  <a href="#">HORIZONTAL3 COLUMN</a>
                </li>
                <li>
                  <a href="#">MASONRY 1</a>
                </li>
                <li>
                  <a href="#">MASONRY 2</a>
                </li>
                <li>
                  <a href="#">COLUMN GRID</a>
                </li>
                <li className="dropdown3">
                  <a href="#">SINGLE</a>
                  <ul>
                    <li>
                      <a href="#">CAROUSEL</a>
                    </li>
                    <li>
                      <a href="#">FULLSCREEN SLIDER</a>
                    </li>
                    <li>
                      <a href="#">COLUMN 1</a>
                    </li>
                    <li>
                      <a href="#">COLUMN 2</a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
          </li>
          <li className="drp px-6">
            <a href="#">ABOUT</a>
          </li>
          <li className="drp px-6">
            <a href="#">NEWS</a>
          </li>
          <li className="drp px-6">
            <a href="#">CONTACTS</a>
          </li>
        </ul>
      </div>

      <div className="menu">
        <div className="menubar">
          <div className="bars"></div>
        </div>
      </div>
      <div className="menu">
        <a className="horn">
          <i className="fas fa-bullhorn"></i>
        </a>
      </div>
      <div className="dot_container">
        <div className="dot"></div>
      </div>
    </nav>
  );
};

export default Navbar;
