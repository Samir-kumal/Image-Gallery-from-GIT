import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useSpring, animated } from 'react-spring'

const Image = (props) => {
  const [animationProps, set] = useSpring(() => ({ scale: 1, opacity:1, zIndex: 0  }))

 const onImageClick = ()=> {
    alert("hell0")
  }
  
  return (
    <animated.div 
    style={{
      transform: animationProps.scale.interpolate((scale) => `scale(${scale})`),
      opacity: animationProps.opacity,
      zIndex: animationProps.zIndex,
    }}
    onMouseEnter={() => set({ scale: 1.05, opacity: 0.7 })}
    onMouseLeave={() => set({ scale: 1, opacity: 1 })}
    onClick={() => {
      set({ scale: 2 , opacity: 1 , zIndex: 10})
      props.onClick(props.id)
    }}
  >
    
    
      <img src={props.urls.small} alt="" loading='lazy' onClick={onImageClick} className='rounded h-52 object-cover w-full ' />
    </animated.div>
  )
}

export default Image