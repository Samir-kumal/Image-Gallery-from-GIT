import React from 'react'
import logo from "../assets/logo.png"
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    const img = {
        height:50,
        width:50,
    }
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSub, setIsOpenSub] = useState(false);
    
    let menuRef = useRef();
    let menuRefSub = useRef();

    useEffect(()=>{
     let handler =(e)=>{
        if (window.innerWidth < 1021 && !menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
        if (!menuRefSub.current.contains(e.target)) {
          setIsOpenSub(false);
        }
      }
    document.addEventListener("mousedown", handler);
   
    window.addEventListener("beforeunload", () => setIsOpen(true));
    window.addEventListener("beforeunload", () => setIsOpenSub(false));


    return()=>{
      document.removeEventListener("mousedown",handler);
    }



    });
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth > 1021) setIsOpen(true);
        if (window.innerWidth < 1021) setIsOpen(false);
        if (window.innerWidth > 1021) setIsOpenSub(true);
        if (window.innerWidth < 1021) setIsOpenSub(false);
      };
      handleResize(); // Run the function once on mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e) => {
    setSearchInput(e.target.value)
    props.onSearch(e.target.value)
    console.log("hello")
  }
  const getData = ()=>{
    
  } 

 
  
    

  return (
    <nav className='w-full h-24 bg-[#151313] relative flex items-center justify-between px-2' ref={menuRef} >
        <div className="logo">
           <NavLink to={"/"}> <img src={logo} alt="" height={img.height} width = {img.width} /></NavLink>
        </div>
        <div className="Search flex">
           
            <input className='search-bar p-2' onChange={handleSearch}  type="text" placeholder='search' />
           
            <button  className=' p-1'>
               <svg
            width="30"
            height="30"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.1641 32.7044H34.8153L33.9828 31.9017C36.8965 28.5123 38.6507 24.1121 38.6507 19.3253C38.6507 8.6518 29.9989 0 19.3253 0C8.6518 0 0 8.6518 0 19.3253C0 29.9989 8.6518 38.6507 19.3253 38.6507C24.1121 38.6507 28.5123 36.8965 31.9017 33.9828L32.7044 34.8153V37.1641L47.57 52L52 47.57L37.1641 32.7044V32.7044ZM19.3253 32.7044C11.9222 32.7044 5.94626 26.7284 5.94626 19.3253C5.94626 11.9222 11.9222 5.94626 19.3253 5.94626C26.7284 5.94626 32.7044 11.9222 32.7044 19.3253C32.7044 26.7284 26.7284 32.7044 19.3253 32.7044Z"
              fill="white"
            />
          </svg>
            </button>
        </div>
       {isOpen &&( <div className={`menuItems  p-2  w-max ${isOpen ? "open" : ""}`} >
            <ul className=' gap-12 lg:flex md:inline lg:static text-white '>
                <li ref={menuRefSub}><NavLink to={"/Home"}>HOME</NavLink>
               {/* {isOpenSub &&(<ul className='absolute bg-slate-700'>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pictures</a></li>
                    <li><a href="#">Heroes</a></li>
                  </ul>)} */}
                </li>
                <li><NavLink to={"/Images"}>IMAGES</NavLink></li>
                <li><NavLink to={"/About"}>ABOUT</NavLink></li>
                <li><NavLink to={"/News"}>NEWS</NavLink></li>
                <li><NavLink to={"/Contacts"}>CONTACTS</NavLink></li>
            </ul>
        </div>)}
        <button onClick={()=>setIsOpen((prev)=>!prev)} className='menuButton lg:invisible md:visible' >
        <svg width="40" height="33" viewBox="0 0 50 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="1" y1="1.5" x2="40" y2="1.5" stroke="white" stroke-width="3"/>
<line x1="1" y1="31.5" x2="40" y2="31.5" stroke="white" stroke-width="3"/>
<line x1="0.999369" y1="16.5206" x2="40" y2="16.5" stroke="white" stroke-width="3"/>
</svg>
        </button>
    </nav>
  )
}

export default Navbar
