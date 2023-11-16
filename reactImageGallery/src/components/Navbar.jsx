import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import { useDataProvider } from "../context/DataProvider";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../context/AuthProvider";

const Navbar = (props) => {
  const img = {
    height: 130,
    width: 130,
  };
  const { handleShow, userData } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSub, setIsOpenSub] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { Images, setImages, search, setSearch, isloading, setIsLoading } =
    useDataProvider();
  const { setUserData } = useAuth();

  let menuRef = useRef();
  let menuRefSub = useRef();
  let profileRef = useRef();

  const handleLogout = () => {
    window.location.href = "/";
    localStorage.clear();
    alert("logged out successfully");
    setUserData(null);
  };

  useEffect(() => {
    let handler = (e) => {
      if (
        window.innerWidth < 1021 &&
        menuRef &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
      if (
        menuRefSub &&
        menuRefSub.current &&
        !menuRefSub.current.contains(e.target)
      ) {
        setIsOpenSub(false);
      }
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsProfileMenuOpen(false);
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
    setSearch(value);
    // console.log(value)
  };

  if (location.pathname === "/") {
    return (
      <nav
        className="w-full h-24 bg-[#ffffff] relative flex items-center justify-between px-2 border-b-2"
        ref={menuRef}
      >
        <div className="logo p-8">
          <NavLink to={"/"}>
            {" "}
            <img src={logo} alt="" height={img.height} width={img.width} />
          </NavLink>
        </div>
        {}

        {isOpen && (
          <div className={`menuItems w-max ${isOpen ? "open" : ""}`}>
            <ul className=" gap-12 lg:flex md:inline lg:static text-black  bg-white p-2 px-4 w-full">
              <li ref={menuRefSub} className="hover:opacity-50">
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
              <li></li>
            </ul>
          </div>
        )}

        {userData ? (
          <div  className="flex-col  w-fit 2xl:static xl:static lg:static absolute right-16   items-center justify-center">
            {/* <div className=" flex items-center  justify-center mb-4"> */}
            <button ref={profileRef}
              onClick={() => {
                setIsProfileMenuOpen((prev) => !prev);
                if (window.innerWidth < 1021) {
                  setIsOpen(false);

                }
              }}
              className="lg:flex xl:flex  h-12 w-12    items-center justify-center bg-white rounded-full"
            >
              <img
                className="rounded-full h-full w-full"
                src={userData.picture}
                alt=""
              />
            </button>
            {/* </div> */}
            {isProfileMenuOpen && (
              <div className="border-[1px] absolute right-1">
                <ul className="text-black p-2 bg-white">
                  <li>Welcome,{userData.fname || userData.name}</li>
                  <li>profile</li>
                  <li>settings</li>
                  <li>
                    {" "}
                    <button onClick={handleLogout}>logout</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={() => handleShow(true)}
            className="text-black border-[0.5px] p-[9px] w-24  right-16 lg:static xl:static absolute border-none bg-[#DBF0F0] "
          >
            Login
        
          </button>
        )}

        <button
          onClick={() => {
            setIsOpen((prev) => !prev);
            setIsProfileMenuOpen(false)
          }}
          className="menuButton block lg:hidden xl:hidden 2xl:hidden"
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
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="1"
              y1="31.5"
              x2="40"
              y2="31.5"
              stroke="black"
              strokeWidth="3"
            />
            <line
              x1="0.999369"
              y1="16.5206"
              x2="40"
              y2="16.5"
              stroke="black"
              strokeWidth="3"
            />
          </svg>
        </button>
      </nav>
    );
  }
  return (
    <nav
      className="w-full h-24 bg-[#f4f1f1] relative flex items-center  justify-between px-2"
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
        <div className={`menuItems  ${isOpen ? "open" : ""}`}>
          <ul className=" gap-12 lg:flex z-20 w-full bg-slate-300  md:inline lg:static text-white ">
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
            {/* <li>
              <NavLink to={"/Contacts"}>CONTACTS</NavLink>
            </li> */}
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
            strokeWidth="3"
          />
          <line
            x1="1"
            y1="31.5"
            x2="40"
            y2="31.5"
            stroke="white"
            strokeWidth="3"
          />
          <line
            x1="0.999369"
            y1="16.5206"
            x2="40"
            y2="16.5"
            stroke="white"
            strokeWidth="3"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
