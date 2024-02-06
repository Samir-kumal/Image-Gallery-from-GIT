import React, {useState} from 'react'
import useFetch from '../../hooks/useFetch'
import { NavLink } from 'react-router-dom'
import ExploreImageCard from './ExploreImageCard'
import { useDataProvider } from '../../context/DataProvider';
const ImageCard = React.memo(({value}) => {
    const {data, setSearch} = React.useCallback(useFetch(value, 1), [value])
    const {handleSearch} = useDataProvider()
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (value)=>{
        // setSearch(value)
        setIsOpen(true)
    }
    const handleClose = ()=>{
        setIsOpen(false)
    }

  return (
   
    <>
    <div  className=' bg-black rounded-lg w-[300px] h-[300px] flex flex-col justify-end'>
        {data?.pages[0].map((image)=>(
         
            <button onClick={handleClick}  key={image.id} className='flex  rounded-md  relative items-center justify-center w-full h-full'>
                <img src={image.urls.regular} className=' object-cover rounded-md w-full h-full'/>
               <p className='absolute text-white font-bold z-10'> {value}</p>
               <div className='inset-0 absolute bg-black/40 rounded-md'></div>
            </button>
        ))}
        {/* {data?.pages[0].page[0].id} */}
    </div>
   { isOpen && <div className='inset-0 fixed overflow-y-auto z-50 bg-black/50 '>
            <button onClick={handleClose} className='bg-white w-12 h-12 absolute '>Close</button>
            <div className='h-fit w-fit m-auto flex items-center justify-center '>
            <ExploreImageCard searchValue = {value} />
            </div>
    </div>}
    </>

  )
}
);

export default ImageCard;