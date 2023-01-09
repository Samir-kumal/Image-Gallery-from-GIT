import React from 'react'
import Search from './components/Search'

const Home = () => {
  return (
    <div className='mt-4'>
      <div className='Container w-full h-80 flex items-center flex-col gap-28 justify-center '>
        <h1 className='text-center text-6xl font-serif text-white '>Search For Images</h1>
          <Search/>
      </div>
    </div>
  )
}

export default Home
