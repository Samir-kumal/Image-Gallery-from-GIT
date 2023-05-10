import React, { useState, useEffect } from "react";
import Image from "./Image";
import TagButton from "./TagButton";

const content = (props) => {
  const [imgContent, setImgContent] = useState("");
  const [menuState, setMenuState] = useState(false);
  const [tagArray, setTagArray] = useState([]);

  const handleMessage = (data) => {
    setMenuState(data);
  };

  const imageContent = (img) => {
    setImgContent(img);
  };
  const ontagClickHandler = (tagValue) => {
    props.tagValueHandler(tagValue);
    setMenuState(false);
  };

  const tagContent = (data) => {
    setTagArray([...data.map((tag) => tag.title)]);
    console.log(tagArray)

  };

  return (
    <>
      {menuState && (
        <div className="fixed m-auto overflow-auto  rounded p-2 px-6 left-0 top-2/4 bottom-1/2 right-0 w-[80%] h-[90%] bg-white z-[999]">
          <button className="p-2" onClick={() => setMenuState(false)}>
            X
          </button>
          <div className="w-full flex justify-center h-fit ">
            <img src={imgContent} alt="" height={500} width={500} />
            <div className="w-full h-20  flex justify-center ">
              <a
                className=" flex justify-center items-center
     px-4 rounded-xl py-2 w-[80%] h-[4rem]
      bg-green-400 text-white"
                href={imgContent}
                download={true}
              >
                Download Image
              </a>
            </div>
          </div>
          <div>
            <h2>Related Tags</h2>
            <div className="flex flex-wrap gap-y-1">
              {tagArray.map((arr) => (
                <TagButton
                  value={arr}
                  tagClickHandler={ontagClickHandler}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container m-auto  place-content-center  flex flex-wrap gap-5  mt-10 ">
        {props.Images.map((image) => (
          <Image
            key={image.id}
            {...image}
            handleMessage={handleMessage}
            imageContent={imageContent}
            tagList={tagContent}
          />
        ))}
      </div>
    </>
  );
};

export default content;
