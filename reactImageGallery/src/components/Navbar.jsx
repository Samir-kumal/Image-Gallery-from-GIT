import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useLocation } from "react-router-dom";

const Navbar = (props) => {
  const img = {
    height: 50,
    width: 50,
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);

  let menuRef = useRef();
  let menuRefSub = useRef();

  // useEffect(() => {
  //   let handler = (e) => {
  //     if (window.innerWidth < 1021 && !menuRef.current.contains(e.target)) {
  //       setIsOpen(false);
  //     }
  //     if (!menuRefSub.current.contains(e.target)) {
  //       setIsOpenSub(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);

  //   window.addEventListener("beforeunload", () => setIsOpen(true));
  //   window.addEventListener("beforeunload", () => setIsOpenSub(false));

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });
  useEffect(() => {
    let handler = (e) => {
      if (window.innerWidth < 1021 && menuRef && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
      if (menuRefSub && menuRefSub.current && !menuRefSub.current.contains(e.target)) {
        setIsOpenSub(false);
      }
    };
    document.addEventListener("mousedown", handler);

    window.addEventListener("beforeunload", () => setIsOpen(true));
    window.addEventListener("beforeunload", () => setIsOpenSub(false));

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [menuRef, menuRefSub]);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1021) setIsOpen(true);
      if (window.innerWidth < 1021) setIsOpen(false);
      if (window.innerWidth > 1021) setIsOpenSub(true);
      if (window.innerWidth < 1021) setIsOpenSub(false);
    };
    handleResize(); // Run the function once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const [searchInput, setSearchInput] = useState("");
  const location = useLocation();

  const handleSearch_function = (value) => {
    // setSearchInput(e.target.value)
    props.onSearch(value)
    // console.log(value)
  }

  if (location.pathname === "/") {
    return(
    <nav
      className="w-full h-24 bg-[#151313] relative flex items-center justify-between px-2"
      ref={menuRef}
    >
      <div className="logo">
        <NavLink to={"/"}>
          {" "}
          <img src={logo} alt="" height={img.height} width={img.width} />
        </NavLink>
      </div>
      {}

      {isOpen && (
        <div className={`menuItems  p-2  w-max ${isOpen ? "open" : ""}`}>
          <ul className=" gap-12 lg:flex md:inline lg:static text-white ">
            <li ref={menuRefSub}>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/Images"}>IMAGES</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={"/Explore"}>EXPLORE</NavLink>
            </li>
            <li>
              <NavLink to={"/Contacts"}>CONTACTS</NavLink>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="menuButton lg:invisible md:visible"
      >
        <svg
          width="40"
          height="33"
          viewBox="0 0 50 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1.5"
            x2="40"
            y2="1.5"
            stroke="white"
            stroke-width="3"
          />
          <line
            x1="1"
            y1="31.5"
            x2="40"
            y2="31.5"
            stroke="white"
            stroke-width="3"
          />
          <line
            x1="0.999369"
            y1="16.5206"
            x2="40"
            y2="16.5"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </button>
    </nav>
  );}
  return(
    <nav
      className="w-full h-24 bg-[#151313] relative flex items-center justify-between px-2"
      ref={menuRef}
    >
      <div className="logo">
        <NavLink to={"/"}>
          {" "}
          <img src={logo} alt="" height={img.height} width={img.width} />
        </NavLink>
      </div>
      {}

      <Search handleSearch={handleSearch_function} />
      {isOpen && (
        <div className={`menuItems  p-2 z-20 opacity-80  w-max ${isOpen ? "open" : ""}`}>
          <ul className=" gap-12 lg:flex z-20  md:inline lg:static text-white ">
            <li ref={menuRefSub}>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/Images"}>IMAGES</NavLink>
            </li>
            <li>
              <NavLink to={"/About"}>ABOUT</NavLink>
            </li>
            <li>
              <NavLink to={"/Explore"}>EXPLORE</NavLink>
            </li>
            <li>
              <NavLink to={"/Contacts"}>CONTACTS</NavLink>
            </li>
          </ul>
        </div>
      )}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="menuButton lg:invisible md:visible"
      >
        <svg
          width="40"
          height="33"
          viewBox="0 0 50 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="1.5"
            x2="40"
            y2="1.5"
            stroke="white"
            stroke-width="3"
          />
          <line
            x1="1"
            y1="31.5"
            x2="40"
            y2="31.5"
            stroke="white"
            stroke-width="3"
          />
          <line
            x1="0.999369"
            y1="16.5206"
            x2="40"
            y2="16.5"
            stroke="white"
            stroke-width="3"
          />
        </svg>
      </button>
    </nav>

  )
};

export default Navbar;
