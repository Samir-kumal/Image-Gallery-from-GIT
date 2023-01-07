import React from 'react'
import { useSpring, animated } from 'react-spring'

const Image = (props) => {
  const [animationProps, set] = useSpring(() => ({ scale: 1 }))
  return (
    <animated.div 
    style={{
      transform: animationProps.scale.interpolate((scale) => `scale(${scale})`),
    }}
    onMouseEnter={() => set({ scale: 1.05 })}
    onMouseLeave={() => set({ scale: 1 })}
  >
    
      <img src={props.urls.small} alt="" loading='lazy' className='rounded h-52 object-cover w-full ' />
    </animated.div>
  )
}

export default Image