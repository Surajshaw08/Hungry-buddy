import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";


const Category = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://nominatim.openstreetmap.org/search?format=json&q=${value}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-0 pt-0">
      {/* Background Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,1)] overflow-visible"></div>
      <video
        src="/images/videobg.mp4"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover z-[0]"
      />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-full absolute top-0 text-center text-white justify-center items-center px-4">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Order food & groceries.
          <br />
          Discover best restaurants. Hungry it!
        </h1>
        <p className="mt-3 text-sm sm:text-lg md:text-xl">
          Enter your delivery location and explore thousands of options
        </p>

        {/* Search Row */}
        <div className="mt-8 w-full flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          {/* Location Input */}
          <div className="relative w-full sm:w-[300px]">
            <ImLocation2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter your delivery location"
              className="w-full p-3 pl-10 pr-4 rounded-full bg-white text-black border border-gray-300 focus:outline-none text-sm"
            />
            {suggestions.length > 0 && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-60 overflow-y-auto shadow-lg text-black text-sm">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setQuery(suggestion.display_name);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-[300px]">
            <FcSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder="Search for restaurant, item, or more"
              className="w-full p-3 pl-4 pr-10 rounded-full bg-white text-black border border-gray-300 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
