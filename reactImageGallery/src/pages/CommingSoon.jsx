import React from 'react'

import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const CommingSoon = () => {
    return (
      <>
          <div className={"w-full h-[80vh]  flex flex-row  justify-center items-center"}>
         

              <div className = "flex flex-col ">
              <img width="96" height="96" src="https://img.icons8.com/badges/96/coming-soon.png" alt="coming-soon"/>
                  <p className='text-xl font-semibold'>  Comming Soon...</p>
              </div>
          </div>
      </>
    )
}
export default CommingSoon
