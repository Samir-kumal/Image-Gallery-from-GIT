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
  const { data ,search, isLoading, handleSearch } =
    useDataProvider();
  const { userData } = useAuth();
  const [loading, setLoading] = useState(true);

  let content = null;
  if (isLoading) {
    content = (
     <LoadingSpinner/>
    );
  } else if (!isLoading && data?.pages.length === 0) {
    content = (
      <div className="w-full h-[100vh] flex items-center justify-center bg-[#FFFFFF]">
        <h1 className="text-6xl text-black">No Results!</h1>
      </div>
    );
  } else if (!isLoading && isError) {
    content = <h1 className="text-6xl text-black">No Results!</h1>;
  }

  const onTagClickHandler = (tagValue) => {
    handleSearch(tagValue);
  };
  const [show, setShow] = useState(false);

  console.log("home page rendered", data?.pages[0].length, isLoading, "Search value",search);
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
          <Search   />
        </div>
      </div>
      {content}
      {!isLoading && data?.pages[0].length > 0 && (
        <Content data={data} tagValueHandler={onTagClickHandler} />
      )}
    </>
  );
};

export default Home;
