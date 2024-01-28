import React from "react";
import "./index.css";
import Avatar from "@mui/material/Avatar";
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
  return (
    <>
      <main className=" main-container py-2 ">
        <div className="grid-box-container bg-slate-400  grid grid-cols-3 gap-y-8 ">
          {data &&
            data.map((item) => (
              <div key={item} className="grid-box-item ">
                
                  <p className="text-white text-center">{item}</p>
                <div className="name-box">
                  <Avatar
                    alt="photo"
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fperson%2F&psig=AOvVaw3ftUpNfDSYPrS31fCQNeSk&ust=1683170462859000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKijmt-Y2P4CFQAAAAAdAAAAABAE"
                  />
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
};

export default ExploreContainerLayout;
