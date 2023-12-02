import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import SigninPage from "./pages/Auth/SigninPage";
import { useDataProvider } from "./context/DataProvider";
import { useAuth } from "./context/AuthProvider";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { LoadingSpinner } from "./components/common/LoadingSpinner";

const Home = () => {
  // const [searchInput, setSearchInput] = useState('')
  const [isError, setIsError] = useState();
  const { Images, search, isloading } =
    useDataProvider();
  const { userData } = useAuth();
  const [loading, setLoading] = useState(true);

  let content = null;
  if (isloading) {
    content = (
     <LoadingSpinner/>
    );
  } else if (!isloading && Images.length === 0) {
    content = (
      <div className="w-full h-[100vh] flex items-center justify-center bg-[#FFFFFF]">
        <h1 className="text-6xl text-black">No Results!</h1>
      </div>
    );
  } else if (!isloading && isError) {
    content = <h1 className="text-6xl text-black">No Results!</h1>;
  }

  const onTagClickHandler = (tagValue) => {
    setSearch(tagValue);
  };
  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar handleShow={setShow} userData={userData} />
      {show && (
        <div className="relative w-full flex justify-center items-center h-[80vh]">
          <SigninPage handleShow={setShow} />
        </div>
      )}

      <div>
        <div className="Container w-full h-80 flex items-center flex-col gap-8 justify-center bg-white">
          <h1 className="text-center 2xl:text-6xl xl:text-6xl lg:text-6xl md:text-4xl text-3xl font-serif text-black">
            Search For Images
          </h1>
          {/* <Search handleSearch={handleSearch_function} /> */}
          <Search  />
        </div>
      </div>
      {content}
      {!isloading && Images.length > 0 && (
        <Content Images={Images} tagValueHandler={onTagClickHandler} />
      )}
    </>
  );
};

export default Home;
