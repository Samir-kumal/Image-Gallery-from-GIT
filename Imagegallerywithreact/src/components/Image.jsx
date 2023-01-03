import React from 'react'

const Image = (props) => {
  return (
    <div>
      <img src={props.urls.small} alt="" loading='lazy' className='h-52 object-cover w-full' />
    </div>
  )
}

export default Image
