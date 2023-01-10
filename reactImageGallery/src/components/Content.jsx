import React from "react";
import Image from "./Image";

const content = (props) => {
  return (
    <div className="container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ml-8 mt-10 ">
      {props.Images.map((image) => (
        <Image key={image.id} {...image} />
      ))}
    </div>
  );
};

export default content;
