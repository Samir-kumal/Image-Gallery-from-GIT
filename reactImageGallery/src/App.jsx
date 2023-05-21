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
  const [isloading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  useEffect(() => {
    const FetchApi = async () => {
      setIsLoading(true);
      setIsError(null);
      try {
        const Response = await SearchService.Search(search);
        if (!Response.ok) {
          throw new Error("Something Went wrong");
        }
        const data = await Response.json();
        setImages(data.results);
      } catch (error) {
        setIsError(error.message);
      }
      setIsLoading(false);
    };

    FetchApi();

    console.log("error " + isError);
    console.log("loading " + isloading);
  }, [search]);


  // useEffect(()=>{
  //   const handleScroll = () => {
  //     var scrollY = window.scrollY || window.pageYOffset;

  //     // Print the scroll index y to the console
  //     console.log("Scroll index y:", scrollY);
  //     if (scrollY === 2000) {
  //       const FetchApi = async () => {
  //         setIsLoading(true);
  //         console.log("hello");
  //         setIsError(null);
  //         try {
  //           const Response = await SearchService.Search(search);
  //           if (!Response.ok) {
  //             throw new Error("Something Went wrong");
  //           }
  //           const data = await Response.json();
  //           setImages(data.results);
  //         } catch (error) {
  //           setIsError(error.message);
  //         }
  //         setIsLoading(false);
  //       };

  //       FetchApi();
      
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //   window.removeEventListener("scroll", handleScroll);

  //   }
  // },[]);



  let content = null;
  if (isloading) {
    content = (
      <div className="w-full h-80 bg-[#151313]">
        <h1 className="text-6xl text-white">Loading...</h1>
      </div>
    );
  } else if (!isloading && Images.length === 0) {
    content = <h1 className="text-6xl text-white">No Results!</h1>;
  } else if (!isloading && isError) {
    content = <h1 className="text-6xl text-white">No Results!</h1>;
  }

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
