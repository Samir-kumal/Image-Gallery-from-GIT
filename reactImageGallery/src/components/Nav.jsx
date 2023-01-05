import React from "react";
import Logo from "../assets/logo-pic.png";
import { Menu } from '@headlessui/react'
import { Fragment } from 'react'
const Nav = () => {
  const image = {
    height: 90,
    width: 90,
  };

  return (
    <nav className="h-max lg:w-[100%] md:w-full sm:w-[100%]  flex justify-between items-center bg-gray-400">
      <img
        src={Logo}
        alt="image-logo"
        height={image.height}
        width={image.width}
      />
      <div className="searchbox h-max bg-black flex p-1">
        <label htmlFor="search-text">
         
          <i className="fa fa-search"></i>
        </label>
        <input type="text" className="search-text" placeholder="SEARCH.." />
        <button className="pl-2">
          <svg
            width="26"
            height="26"
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
      // MENU ITEMS FOR THE PAGE------------------------------------------------------------------------------------------

      <div className="list  p-2 h-12 lg:w-[36rem] bg- sm:w-[15rem] flex sm:flex-col translate-x-[6rem]  bg-[#151313] relative    ">
        <ul className=" flex text-white sm:flex-col lg:flex-row  lg:static md:absolute sm:absolute flex-start ">

          
          //-----------------------------------1ST DROPDOWN----------------------------------------------
          <Menu as="li" className=" parent w-max  w-32 h-max   ">
            <Menu.Button
              
             
            >
              <a href="#" className="o">
                HOME
              </a>
            </Menu.Button>
          
              <Menu.Items as="ul"  className=" bg-[#151313]  w-[8rem] absolute child flex flex-col bg-pink-400 translate-y-4 text-xs p-2 leading-6  ">
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">CAROUSEL</a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">SLIDER DETAILS</a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">MULTI SLIDESHOW</a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">IMAGE</a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">SLIDER </a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"><a href="#">VIDEO</a></li>
                <li className="opacity:0.5 hover:bg-white hover:text-black"> <a href="#">SLIDESHOW</a></li>
              </Menu.Items>
          
          </Menu>
          //-----------------------2ND DROPDOWN ---------------------------------------------------
          <Menu as="li" className=" w-40 h-max">
            <Menu.Button  >
              <a href="#">PORTFOLIO</a>
            </Menu.Button>
          
              <Menu.Items as="ul"  className="dropdown2 bg-[#151313] absolute w-[11rem] bg-pink-600 translate-y-4 text-xs p-2 leading-6">
                <li className="hover:bg-white  hover:text-black"><a href="#">HORIZONTAL 1 COLUMN</a></li>
                <li className="hover:bg-white  hover:text-black"><a href="#">HORIZONTAL 2 COLUMN</a></li>
                <li className="hover:bg-white  hover:text-black"><a href="#">HORIZONTAL3 COLUMN</a></li>
                <li className="hover:bg-white  hover:text-black"><a href="#">MASONRY 1</a></li>
                <li className="hover:bg-white  hover:text-black"><a href="#">MASONRY 2</a> </li>
                <li className="hover:bg-white  hover:text-black"><a href="#">COLUMN GRID</a>
                </li>
                < Menu as ="li" className="dropdown3 h-[2rem]">
                 <Menu.Button className="hover:bg-white hover:text-black w-full"><a href="#">SINGLE</a></Menu.Button> 
                  <Menu.Items as="ul" className = "translate-x-[9.5rem] translate-y-[-1.5rem] bg-blue-300">
                    <li className="bg-[#151313] hover:bg-white hover:text-black"><a href="#">CAROUSEL</a></li>
                    <li className="bg-[#151313] hover:bg-white hover:text-black"><a href="#">FULLSCREEN SLIDER</a></li>
                    <li className="bg-[#151313] hover:bg-white hover:text-black"><a href="#">COLUMN 1</a></li>
                    <li className="bg-[#151313] hover:bg-white hover:text-black"><a href="#">COLUMN 2</a></li>
                  </Menu.Items>
                </Menu>
              </Menu.Items>
         
          </Menu>
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
      <div className="menuIcon pl-2 lg:invisible xl:invisible 2xl:invisible sm:visible ">
        <button onClick={()=>alert("hello")}>
        <svg width="40" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" y1="1.5" x2="40" y2="1.5" stroke="white" stroke-width="3"/>
<line x1="1" y1="31.5" x2="40" y2="31.5" stroke="white" stroke-width="3"/>
<line x1="0.999369" y1="16.5206" x2="40" y2="16.5" stroke="white" stroke-width="3"/>
</svg>

        </button>
      </div>
      
    </nav>
  );
};

export default Nav;
