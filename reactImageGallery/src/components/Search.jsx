import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <div className="Search flex">
      <input
        className="search-bar p-2"
        onChange={handleSearch}
        type="text"
        placeholder="search"
      />

      <button className=" p-1">
        <svg
          width="30"
          height="30"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.1641 32.7044H34.8153L33.9828 31.9017C36.8965 28.5123 38.6507 24.1121 38.6507 19.3253C38.6507 8.6518 29.9989 0 19.3253 0C8.6518 0 0 8.6518 0 19.3253C0 29.9989 8.6518 38.6507 19.3253 38.6507C24.1121 38.6507 28.5123 36.8965 31.9017 33.9828L32.7044 34.8153V37.1641L47.57 52L52 47.57L37.1641 32.7044V32.7044ZM19.3253 32.7044C11.9222 32.7044 5.94626 26.7284 5.94626 19.3253C5.94626 11.9222 11.9222 5.94626 19.3253 5.94626C26.7284 5.94626 32.7044 11.9222 32.7044 19.3253C32.7044 26.7284 26.7284 32.7044 19.3253 32.7044Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
