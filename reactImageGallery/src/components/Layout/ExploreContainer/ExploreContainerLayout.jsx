import React, { useMemo } from "react";
import "./index.css";
import Avatar from "@mui/material/Avatar";
import ImageCard from "../../common/ImageCard";
import useFetch from "../../../hooks/useFetch";
const ExploreContainerLayout = () => {
  const data = [
    "Backgrounds",
    "Images",
    "Wallpapers",
    "Nature",
    "Business",
    "Science",
    "Education",
    "People",
    "Feelings",
    "Religion",
    "Health",
    "Places",
    "Animals",
    "Industry",
    "Food",
    "Computer",
    "Sports",
    "Transportation",
    "Travel",
    "Buildings",
    "Music",
  ];
  const memoisedValues = useMemo(()=>(
    data
  ),[data])
 
  return (
    <>
      <main className=" main-container py-2 w-11/12  pt-20  ">
        <div className="grid-box-container   grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 ">
          {data &&
            memoisedValues.map((item) => (
              // <div key={item} className="grid-box-item ">
                
              //     <p className="text-white text-center">{item}</p>
              //   <div className="name-box">
              //     <Avatar
              //       alt="photo"
              //       src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperson%2F&psig=AOvVaw3ftUpNfDSYPrS31fCQNeSk&ust=1683170462859000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKijmt-Y2P4CFQAAAAAdAAAAABAE"
              //     />
              //   </div>
              // </div>
              <ImageCard value = {item}/>
            ))}
        </div>
      </main>
    </>
  );
};

export default ExploreContainerLayout;
