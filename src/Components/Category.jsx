import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.8)] overflow-visible"></div>
      <video src="/images/videobg.mp4" autoPlay loop muted className="w-full h-full object-cover z-[0]" />

      {/* Content */}
      <div className="max-w-[1200px] mx-auto flex flex-col w-full h-full absolute top-0 text-center text-white justify-center items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Order food & groceries.<br />
          Discover best restaurants. Hungry it!
        </h1>
        <p className="mt-3 text-lg md:text-xl">
          Enter your delivery location and explore thousands of options
        </p>

        {/* Search Row */}
        <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:justify-center">
          {/* Location Input */}
          <div className="relative w-full md:w-[350px]">
            <ImLocation2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter your delivery location"
              className="w-full p-4 pl-10 pr-4 rounded-full bg-white text-black border border-gray-300 focus:outline-none"
            />
            {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 rounded-md max-h-60 overflow-y-auto shadow-lg text-black">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="p-3 hover:bg-gray-100 cursor-pointer"
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
          <div className="relative w-full md:w-[350px]">
            <FcSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              placeholder="Search for restaurant, item, or more"
              className="w-full p-4 pl-4 pr-10 rounded-full bg-white text-black border border-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Card Section */}
        <section className="py-10">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="relative w-full md:w-[260px] h-[250px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-60"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800">Food Delivery</h2>
                  <p className="text-gray-600">From Restaurants</p>
                  <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="images/card1.png"
                  alt="Food Delivery"
                  className="absolute bottom-2 right-2 w-24 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="relative w-full md:w-[260px] h-[250px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-60"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800">Instamart</h2>
                  <p className="text-gray-600">Instant Grocery</p>
                  <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="/images/instamart.png"
                  alt="Instamart"
                  className="absolute bottom-2 right-2 w-24 object-cover"
                />
              </div>

              {/* Card 3 */}
              <div className="relative w-full md:w-[260px] h-[250px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-60"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800">Dineout</h2>
                  <p className="text-gray-600">Eat Out & Save</p>
                  <p className="text-orange-500 font-semibold">Upto 50% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png"
                  alt="Dineout"
                  className="absolute bottom-2 right-2 w-24 object-cover"
                />
              </div>

              {/* Card 4 */}
              <div className="relative w-full md:w-[260px] h-[250px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden">
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-60"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold text-gray-800">Genie</h2>
                  <p className="text-gray-600">Pick-Up & Drop</p>
                  <p className="text-orange-500 font-semibold">On-Demand Service</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-3d-food-burger-multi-layered-colorful-three-dimensional-effect-png-image_9136644.png"
                  alt="Genie"
                  className="absolute bottom-2 right-2 w-24 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>







    // <div className="relative w-full flex items-center justify-center"> 
    // {/*  Chef image left corner pe fix */}
    // <img 
    //   src="/images/picture-of-a-chef-5.png" 
    //   alt="Chef" 
    //   className="absolute left-0 top-1/2 transform -translate-y-1/2" 
    // />
    // <div className=" w-full p-4 max-w-4xl mx-auto  bg-white pr-10 mr-50">
      
    //   <div className="flex items-center justify-between mb-4">
    //     <h2 className="text-xl font-bold">Categories</h2>
    //     <div className="flex gap-2">
    //       <button onClick={handlePrev} className="p-2 bg-white rounded-full disabled:opacity-50" disabled={startIndex === 0}>
    //         <ChevronLeft size={24} />
    //       </button>
    //       <button onClick={handleNext} className="p-2 bg-white rounded-full disabled:opacity-50" disabled={startIndex >= imagesData.length - visibleImages}>
    //         <ChevronRight size={24} />
    //       </button>
    //     </div>
    //   </div>

    //   <div className="flex gap-4 overflow-hidden">
    //     {imagesData.slice(startIndex, startIndex + visibleImages).map((img, index) => (
    //       <img key={index} src={`/images/${img.image}`} alt={img.path} className="w-1/5" />
    //     ))}
    //   </div>
    //   <div className="flex gap-4 overflow-hidden">
    //     {imagesData.slice(startIndex, startIndex + visibleImages).map((img, index) => (
    //       <img key={index} src={`/images/${img.image}`} alt={img.path} className="w-1/5" />
    //     ))}
    //   </div>
    // </div>
    // </div>
  );
};

export default Category;