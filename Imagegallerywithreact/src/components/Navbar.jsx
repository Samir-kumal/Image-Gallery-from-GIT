import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav>
        <h3>
            Asperthick
        </h3>
        <div className="searchbox">
            <label  htmlFor="search-text"> <i className="fa fa-search"></i></label>
        <input type="text" className="search-text" placeholder="SEARCH.." />
        </div>
        <div className="list">
            <ul>
                <li className=" drp drp1" ><a href ="#">HOME</a>
                    <ul className="dropdown1">
                        <li><a href="#">CAROUSEL</a></li>
                        <li><a href="#">SLIDER DETAILS</a></li>
                        <li><a href="#">MULTI SLIDESHOW</a></li>
                        <li><a href="#">IMAGE</a></li>
                        <li><a href="#">SLIDER classNameIC</a></li>
                        <li><a href="#">VIDEO</a></li>
                        <li><a href="#">SLIDESHOW</a></li>
                    </ul>
                
                </li>   
                <li className=" drp drp2" ><a href="#">PORTFOLIO</a>
                    <ul className="dropdown2" >
                        <li><a href="#">HORIZONTAL 1 COLUMN</a></li>
                        <li><a href="#">HORIZONTAL 2 COLUMN</a></li>
                        <li><a href="#">HORIZONTAL3 COLUMN</a></li>
                        <li><a href="#">MASONRY 1</a></li>
                        <li><a href="#">MASONRY 2</a></li>
                        <li><a href="#">COLUMN GRID</a></li>
                        <li className="dropdown3"><a href="#">SINGLE</a>
                            <ul >
                                <li><a href="#">CAROUSEL</a></li>
                                <li><a href="#">FULLSCREEN SLIDER</a></li>
                                <li><a href="#">COLUMN 1</a></li>
                                <li><a href="#">COLUMN 2</a></li>
                            </ul>
                        
                        </li>
                    </ul>
                
                </li>
                <li className="drp"><a href="#">ABOUT</a></li>
                <li className="drp"><a href="#">NEWS</a></li>
                <li className="drp"><a href="#">CONTACTS</a></li>  
            </ul>
        </div>
        
        <div className="menu">
            <div className="menubar">
                <div className="bars">
    
                </div>
            </div>
        </div>
        <div className="menu">
            <a className="horn">
                <i className="fas fa-bullhorn"></i>
                
            </a>
        </div>
        <div className="dot_container">
            <div className="dot">

            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
