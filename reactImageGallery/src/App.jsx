import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState ,useEffect } from "react";
import About from "./About";
import Home from "./Home";
import Content from "./components/Content";
import SearchService from "./services/SearchService";

function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("Bike");
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

  useEffect(() => {
    const FetchApi = async () => {
      setIsLoading(true);
      setIsError(false);
     try {
      const Response = await SearchService.Search(search);
      const data = await Response.json();
      setImages(data.results);
      // if (Images.length > 0) {
      //   setIsLoading(false)
      // } else {
      //   setIsLoading(true)
      // }
      console.log(search)

      setIsLoading(false);

     } catch (error) {
      setIsLoading(false);
      setIsError(true);
      
     }
    };

    FetchApi();
  }, [search]);


 

  return (
    <BrowserRouter>
    
      <Navbar value={search} onSearch={(value)=> handleSearch(value)} />
      <Routes>
        <Route path="/Home" element ={<Home onSearch ={(value)=> handleSearch(value)}/>}/>
        <Route path="/About" element={<About />} />
      </Routes> 
      {isloading && <h1 className="text-6xl text-white">Loading...</h1>} 
      {!isloading &&isError && <h1 className="text-6xl text-white">No Results!</h1>}
      {!isloading && !isError && Images.length >0
      &&
      <Content Images = {Images} />
    }
      <Footer />
    </BrowserRouter>
  );
}

export default App;
