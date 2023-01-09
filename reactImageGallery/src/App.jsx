import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { data } from "autoprefixer";
import About from "./About";
import Home from "./Home";

const ACCESS_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("Bike");
  const URL = `https://api.unsplash.com/search/photos?page=2&per_page=30&query=${search}&client_id=${ACCESS_KEY}`;

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  useEffect(() => {
    const FetchApi = async () => {
      const Response = await fetch(URL);
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
        <Route path="/Home" element ={<Home/>}/>
        <Route path="/About" element={<About />} />
      </Routes>

     <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ml-8 mt-10 ">
        {Images.map((image) => (
          <Image key={image.id} {...image} />
        ))}
      </div>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
