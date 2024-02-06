import React from "react";
import useFetch from "../../hooks/useFetch";
import Content from "../Content";

const ExploreImageCard = ({ searchValue }) => {
  const { data, setSearch } = useFetch(searchValue, 20);
  return (
    <div className=" w-fit p-2">
      <p className="text-white">{searchValue}</p>
      {/* {data?.pages[0].map((image) => (
        <div className="w-48 h-56">
          <img
            className="w-full h-full"
            src={image.urls.regular}
            alt={image.alt_description}
          />
        </div>
      ))} */}
      <Content data={data} />
    </div>
  );
};

export default React.memo(ExploreImageCard);
