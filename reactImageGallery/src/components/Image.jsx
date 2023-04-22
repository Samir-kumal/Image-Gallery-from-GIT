import React, { useState } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring'

const Image = (props) => {
  const [animationProps, set] = useSpring(() => ({ scale: 1, opacity:1, zIndex: 0  }));
  const [isOver, SetisOver] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseOnEnter = () =>{
    set({ scale: 1.05, opacity: 0.7 })
    SetisOver(true);
  }
  const handleMouseOnLeave = () =>{
    set({ scale: 1, opacity: 1 })
    SetisOver(false);
  }
  const handleMouseClick = (id,download) =>{
    props.handleMessage(true);
    props.imageContent(id)
    props.imageDownload(download);
    // console.log(id);

  }

  

  
  return (
    <>
    <animated.div 
    style={{
      transform: animationProps.scale.interpolate((scale) => `scale(${scale})`),
      opacity: animationProps.opacity,
      zIndex: animationProps.zIndex,
    }}
    onMouseEnter={() => handleMouseOnEnter() }
    onMouseLeave={() => handleMouseOnLeave() }
    onClick={()=> handleMouseClick(props.urls.regular,props.links.download)}
  >
    <div>
    { isOver &&  <span className='absolute right-2 top-2   grid grid-cols-2  gap-2'>
      {/* <img src="https://img.icons8.com/color/48/null/filled-like.png"/> */}
        <button className='px-2 py-1 rounded  bg-white'><img src="https://img.icons8.com/material-outlined/24/000000/filled-like.png"/></button>
        <button className='px-2 py-1 rounded  bg-white'><img src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"/></button>
      </span> }
    
    

    <img src={props.urls.small} alt="" loading='lazy'  className='rounded-xl h-52 object-cover w-full ' />

    </div>
    
    
    </animated.div>
    </>
  )
}

export default Image