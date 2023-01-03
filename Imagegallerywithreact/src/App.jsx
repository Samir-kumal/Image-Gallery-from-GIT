import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Content from './components/content'
import Image from './components/Image'
import Footer from './components/footer'
import { useEffect } from 'react'
const ACCESS_KEY = "UHVanN5z494b1Du8Rn7XuIg_4kvORb-mGSAcbZGVXJ8";
const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`
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
      setImages(data)
    }

    FetchApi()
  },[])

  return (
    <>
    <h1>{Images.length}</h1>
      <Navbar/> 
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-2 mr-2'>
       {Images.map((image)=>(
        <Image key={image.id} {...image}/>
       ))}
      </div>
      <Footer/>
    </>
  )
}

export default App
