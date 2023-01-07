import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Navbar from "./components/Navbar";
// import Content from './components/Content'
import Image from "./components/Image";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { data } from "autoprefixer";
const ACCESS_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
function App() {
  const [Images, setImages] = useState([]);
  const [search, setSearch] = useState("bikes");
  const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${search}&client_id=${ACCESS_KEY}`;
  const [displayedImages, setDisplayedImages] = useState([]);

  const handleSearch = (searchInput) => {
    // update the search state with the searchInput value
    setSearch(searchInput);
  };

  // const FetchApi = async ()=> {
  //   const Response = await fetch(URL)
  //   const data = await Response.json();
  //   console.log(data[0]);
  // }

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
    <div className="App p-0 w-full h-max">
      <Navbar value={search} onSearch={handleSearch} />
      {/* <div className='grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-2 mr-2'> */}
      
        <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ml-8 mt-10 ">
          {Images.map((image) => (
            <Image key={image.id} {...image} />
          ))}
        </div>
{/*       
        <div className=" h-100vh bg-slate-700">
          <h1 className="text-white -z-30  font-bold text-6xl top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 absolute">Loading.....</h1>
        </div> */}
      
      <Footer />
    </div>
  );
}

export default App;
