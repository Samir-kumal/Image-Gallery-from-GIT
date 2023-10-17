import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Home from "./Home";
import Content from "./components/Content";
import ExplorePage from "./pages/ExplorePage";
import { useDataProvider } from "./context/DataProvider";

function App() {
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

  console.log("rendered")

  return (
    <BrowserRouter>
      <Navbar value={search} onSearch={(value) => handleSearch(value)} />
      <Routes>
        <Route
          path="/"
          element={<Home onSearch={(value) => handleSearch(value)} />}
        />
        <Route path="/About" element={<About />} />
        <Route path="/Explore" element={<ExplorePage />} />
      </Routes>
      {content}
      {!isloading && Images.length > 0 && (
        <Content Images={Images} tagValueHandler={onTagClickHandler} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
