import React from "react";
import { useState, useEffect } from "react";
import Search from "./components/Search";
import SigninPage from "./pages/Auth/SigninPage";
import { useDataProvider } from "./context/DataProvider";
import Content from "./components/Content";

const Home = () => {
  // const [searchInput, setSearchInput] = useState('')
  const [isError, setIsError] = useState();
  const { Images, setImages, search, setSearch, isloading, setIsLoading } =
    useDataProvider();

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  let content = null; 
  if (isloading) {
    content = (
      <div className="w-full h-[100vh] flex items-center justify-center bg-[#151313]">
        <h1 className="text-6xl text-white">Loading...</h1>
      </div>
    );
  } else if (!isloading && Images.length === 0) {
    content =   <div className="w-full h-[100vh] flex items-center justify-center bg-[#151313]">
      <h1 className="text-6xl text-white">No Results!</h1>
    </div>;
  } else if (!isloading && isError) {
    content = <h1 className="text-6xl text-white">No Results!</h1>;
  }

  const onTagClickHandler = (tagValue) => {
    setSearch(tagValue);
  };
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  return (
    <>
      {show && (
        <div className="relative w-full flex justify-center items-center h-[80vh]">
          <SigninPage handleShow={setShow} />
        </div>
      )}

      <div className="mt-4">
        <div className="Container w-full h-80 flex items-center flex-col gap-28 justify-center ">
          <h1 className="text-center text-6xl font-serif text-white ">
            Search For Images
          </h1>
          {/* <Search handleSearch={handleSearch_function} /> */}
          <Search handleSearch={(value) => handleSearch(value)} />
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
