import React from "react";

const content = ({Images}) => {
    const msg = ()=>{
        console.log(Images)
    }
    
  return (
    <>
      <div className="container h-screen w-full bg-white">
        <button onClick={msg}>click here</button>
      </div>
    </>
  );
};

export default content;
