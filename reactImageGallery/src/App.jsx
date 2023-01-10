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

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  useEffect(() => {
    const FetchApi = async () => {
      const Response = await SearchService.Search(search);
      const data = await Response.json();
      setImages(data.results);
      console.log(data.total);
    };

    FetchApi();
  }, [search]);


 

  return (
    <BrowserRouter>
    
      <Navbar value={search} onSearch={handleSearch} />
      <Routes>
        <Route path="/Home" element ={<Home onSearch ={handleSearch}/>}/>
        <Route path="/About" element={<About />} />
      </Routes>  
      <Content Images = {Images} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
