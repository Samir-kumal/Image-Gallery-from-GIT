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
import SignUpPage from "./pages/Auth/SignUpPage";

function App() {
  const { Images, setImages, search, setSearch, isloading, setIsLoading } =
    useDataProvider();

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Explore" element={<ExplorePage />} />
        <Route path="/Signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
