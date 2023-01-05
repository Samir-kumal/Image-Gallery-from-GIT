import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
// import Navbar from './components/Navbar'
// import Content from './components/Content'
import Image from './components/Image'
import Footer from './components/Footer'
import { useEffect } from 'react'
const ACCESS_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
const search = "car"
const URL = `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${search}&client_id=${ACCESS_KEY}`
function App() {
  const [Images, setImages] = useState([]);
  // const FetchApi = async ()=> {
  //   const Response = await fetch(URL)
  //   const data = await Response.json();
  //   console.log(data[0]); 
  // }

  useEffect(()=>{
    const FetchApi = async () =>{
      const Response = await fetch(URL)
      const data = await Response.json();
      setImages(data.results)
    }


    FetchApi()
  },[])


 

  return (
    <>
      <Nav/> 
      {/* <div className='grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-2 mr-2'> */}
      {/* <div className='container grid  gap-3  ml-2 mr-2'>
       {Images.map((image)=>(
        <Image key={image.id} {...image}/>
       ))}
      </div> */}
      <Footer/>
    </>
  )
}

export default App
