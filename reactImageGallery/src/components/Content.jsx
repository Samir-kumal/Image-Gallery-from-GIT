import React, { useState, useEffect } from "react";
import Image from "./Image";


const content = (props) => {
  const [response, setResponse] = useState(false);
  const [imgContent, setImgContent] = useState("");
  // const [imgDownload, setImgDownload] = useState("");
  // const [id, setID] = useState("");

  const handleMessage = (data) =>{
    setResponse(data);
    
  }

  // const handleID = (id) =>{
  //   setID(id);
  //   console.log(id);
    

  // }

  const imageContent = (img) => {
    setImgContent(img);
  }
  // const imageDownload = (download) =>{
  //   setImgDownload(download);
  
    
  // }


  return (
    <>
   {response && 
   <div className='fixed m-auto overflow-auto rounded p-2 px-6 left-0 top-2/4 bottom-1/2 right-0 w-[80%] h-[90%] bg-white z-[999]'>
    <button className="p-2" onClick={()=>setResponse(false)}>X</button>
    <div className="w-full flex justify-center h-fit ">
    <img src={imgContent} alt="" height={500} width={500} />
    <div className="w-full h-20  flex justify-center ">
    <a className=" flex justify-center items-center
     px-4 rounded-xl py-2 w-[80%] h-[4rem]
      bg-green-400 text-white" href={imgContent}>Download</a>
    

       
    </div>
    </div>
    </div>}

    <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ml-8 mt-10 ">
      {props.Images.map((image) => (
        <Image key={image.id} {...image}  handleMessage = {handleMessage} imageContent = {imageContent}   />
      ))}
    </div>
    </> 
  );
};

export default content;
