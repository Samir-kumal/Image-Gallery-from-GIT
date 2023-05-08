import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Home from "./Home";
import Content from "./components/Content";
import SearchService from "./services/SearchService";
import ExplorePage from "./pages/ExplorePage";

function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("Random");
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };
  // Define a callback function to receive the search input from Home component
  //  const handleSearchFromHome = (searchInput) => {
  //   handleSearch(searchInput);
  //   console.log(searchInput)
  //   console.log(Images)

  // };

  // let promiseMade = false;
  const [promiseMade, setPromise] = useState(false);

  useEffect(() => {
    const FetchApi = async () => {
      try {
        const Response = await SearchService.Search(search);
        const data = await Response.json();
        setImages(data.results);
        // if (Images.length > 0) {
        //   setIsLoading(false)
        // } else {
        //   setIsLoading(true)
        // }
        // if (data.results.length === 0) {
        // console.log(data.results.length)
        // return <h1 className="text-6xl text-white">No Results!</h1>

        // } else {
        //   console.log("hello");

        // }
        setIsLoading(true);

        if (Response.ok) {
          setPromise(true);
          console.log(data.results[1]);

          // setIsLoading(false);
        } else {
          setIsError(true);
        }
      } catch (error) {
        setIsError(true);
        setPromise(false);
      }
      setIsLoading(false);
    };

    FetchApi();
    console.log("promise " + promiseMade);

    console.log("error " + isError);
    console.log("loading " + isloading);
  }, [search]);

  const onTagClickHandler = (tagValue) => {
    setSearch(tagValue);
  };

  return (
    <BrowserRouter>
      <Navbar value={search} onSearch={(value) => handleSearch(value)} />
      <Routes>
        <Route
          path="/"
          element={<Home onSearch={(value) => handleSearch(value)} />}
        />
        <Route path="/About" element={<About />} />
        <Route path ="/Explore" element= {<ExplorePage/>}/>
      </Routes>
      {isloading && <h1 className="text-6xl text-white">Loading...</h1>}
      {!isloading && isError && (
        <h1 className="text-6xl text-white">No Results!</h1>
      )}
      {!isloading && !isError && Images.length > 0 && (
        <Content Images={Images} tagValueHandler={onTagClickHandler} />
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
