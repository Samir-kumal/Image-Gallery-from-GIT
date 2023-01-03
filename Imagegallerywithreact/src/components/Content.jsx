import React from "react";

const content = ({Images}) => {
    const msg = ()=>{
        console.log(Images)
    }
    // const contentList = Images.map( image =>
    //     <div  key={image.id} className="content">
    //       <a className="zoom" href="./travel1.jpg">
    //         <i className="fas fa-search-plus"></i>
    //       </a>
    //       <p className="title"> Nature {image} </p>
    //       <p className="txt">
    //         <button onClick={msg}>click here</button>
    //       <h1></h1>
    //       </p>
    //     </div>
    // )
  return (
    <>
      <div className="container">
        {/* {contentList} */}
        <button onClick={msg}>click here</button>
      </div>
    </>
  );
};

export default content;
