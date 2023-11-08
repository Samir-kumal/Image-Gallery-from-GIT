import React, { useState, useEffect } from "react";
import TagButton from "./TagButton";
import ImageList from "@mui/material/ImageList";
import { Alert, ImageListItem } from "@mui/material";
import { useDataProvider } from "../context/DataProvider";

const content = (props) => {
  const [imgContent, setImgContent] = useState({
    url: "",
    name: "",
  });
  const [menuState, setMenuState] = useState(false);
  const [tagArray, setTagArray] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [columnCount, setColumnCount] = useState(1);
  const {fetchNextPage} = useDataProvider();

  const ontagClickHandler = (tagValue) => {
    props.tagValueHandler(tagValue);
    setMenuState(false);
  };

  const tagContent = (data) => {
    setTagArray([...data.map((tag) => tag.title)]);
    console.log(tagArray);
  };

  // handles the opening of the model through click event
  const handleMouseClick = (urls, title, tags) => {
    setMenuState(true);
    console.log(urls);
    tagContent(tags);
    setImgContent({
      url: urls,
      name: title,
    });
  };

  // handles the download of the image
  const handleDownloadClick = async (value) => {
    const response = await fetch(value.url);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = value.name;
    a.click();
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setColumnCount(1); // Small screen, 1 column
      } else if (width >= 768 && width < 1024) {
        setColumnCount(2); // Medium screen, 2 columns
      } else {
        setColumnCount(3); // Large screen, 3 columns
      }

      setWindowWidth(width);
    };

    handleResize();

    // Attach the event listener to update the state on window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  return (
    <>
      {menuState && (
        <div className="fixed m-auto overflow-auto  rounded p-2 px-6 left-0 top-2/4 bottom-1/2 right-0 w-[80%] h-[90%] bg-white z-[999]">
          <button className="p-2" onClick={() => setMenuState(false)}>
            X
          </button>
          <div className="w-full flex xl:flex-row lg:flex-row flex-col justify-center h-fit ">
            <img
              className="p-2"
              src={imgContent.url}
              alt=""
              height={500}
              width={500}
            />
            <div className="w-full h-20  flex justify-center ">
              <button
                onClick={() => handleDownloadClick(imgContent)}
                className=" flex justify-center items-center
     px-4 rounded-xl py-2 w-[80%] h-[4rem]
      bg-green-400 text-white"
                // href={imgContent}
                download={true}
              >
                Download Image
              </button>
            </div>
          </div>
          <div>
            <h2>Related Tags</h2>
            <div className="flex flex-wrap gap-y-1">
              {tagArray.map((arr) => (
                <TagButton value={arr} tagClickHandler={ontagClickHandler} />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="container m-auto w-[90vw] flex items-center justify-center flex-col  place-content-center  bg-white">
        <ImageList
          sx={{ width: "100%", height: "100%" }}
          variant="quilted"
          cols={columnCount}
          rowHeight={300}
          gap={28}
        >
          {props.Images.map((image) => (
            <ImageListItem
              key={image.id}
              cols={image.height / image.width > 1.5 ? 1 : 1}
              rows={image.height / image.width > 1.5 ? 2 : 1}
            >
              <img
                onClick={() =>
                  handleMouseClick(
                    image.urls.regular,
                    image.alt_description,
                    image.tags
                  )
                }
                className="rounded-md hover:scale-100"
                src={image.urls.small}
                alt={image.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <button onClick={fetchNextPage} className = "shadow-lg p-4 bg-slate-300 m-auto text-2xl my-8">Load more Images</button>
      </div>
    </>
  );
};

export default React.memo(content);
