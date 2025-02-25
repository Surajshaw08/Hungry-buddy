import React from 'react';
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/data/category.json") // JSON file should be inside public folder
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error("Error fetching food items:", error));
  }, []);

  const nextItems = () => {
    setIndex((prevIndex) => (prevIndex + 5 < foodItems.length ? prevIndex + 5 : 0));
  };

  const prevItems = () => {
    setIndex((prevIndex) => (prevIndex - 5 >= 0 ? prevIndex - 5 : foodItems.length - 5));
  };

  return (
    <div className='relative bg-[#ff5200] text-white py-16 overflow-hidden'>
      {/* Decorative Images */}
      <img
        src="images/navl.avif"
        alt=""
        className='hidden md:block absolute top-0 left-0 w-40 md:w-60'
      />
      <img
        src="images/navr.avif"
        alt=""
        className='hidden md:block absolute top-0 right-0 w-40 md:w-60'
      />

      {/* HERO SECTION */}
      <section className="bg-[#ff5200] text-white py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            Order food & groceries.<br />
            Discover best restaurants. Hungry it!
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            Enter your delivery location and explore thousands of options
          </p>

          {/* Search Row */}
          <div className="mt-8 flex flex-col items-center gap-4 md:flex-row md:justify-center">
            {/* LOCATION INPUT */}
            <div className="relative w-full md:w-1/3">
              <ImLocation2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Enter your delivery location"
                className="w-full p-3 pl-10 pr-4 rounded-full bg-white text-black border border-gray-300 focus:outline-none"
              />
            </div>

            {/* SEARCH INPUT */}
            <div className="relative w-full md:w-1/3">
              <FcSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                placeholder="Search for restaurant, item, or more"
                className="w-full p-3 pr-10 pl-4 rounded-full bg-white text-black border border-gray-300 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* CARD SECTION */}
        <section className="bg-[#ff5200] py-10">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
              {/* Card 1 */}
              <div className="relative w-full max-w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group mx-auto overflow-hidden">
                {/* Background Overlay for Faded Effect */}
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-[rgb(0,0,0)] group-hover:bg-opacity-60"></div>
                <div className=' relative z-10'>
                  <h2 className="text-4xl font-bold text-gray-800">Food Delivery</h2>
                  <p className="text-gray-600">From Restaurants</p>
                  <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="images/card1.png"
                  alt="Food Delivery"
                  className="absolute bottom-2 right-2 w-55 object-cover"
                />
              </div>

              {/* Card 2 */}
              <div className="relative w-full max-w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group mx-auto overflow-hidden">

                {/* Background Overlay for Faded Effect */}
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-[rgb(0,0,0)] group-hover:bg-opacity-60"></div>
                <div className=' relative z-10'>
                  <h2 className="text-4xl font-bold text-gray-800">Instamart</h2>
                  <p className="text-gray-600">Instant Grocery</p>
                  <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="/images/instamart.png"
                  alt="Instamart"
                  className="absolute bottom-2 right-2 w-55 object-cover"
                />
              </div>
{/* ---------------------------------------card 3------------------------------- */}
              <div className="relative w-full max-w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group mx-auto overflow-hidden">
                {/* Background Overlay for Faded Effect */}
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-[rgb(0,0,0)] group-hover:bg-opacity-60"></div>
                <div className=' relative z-10'>
                  <h2 className="text-4xl font-bold text-gray-800">Dineout</h2>
                  <p className="text-gray-600">Eat Out & Save</p>
                  <p className="text-orange-500 font-semibold">Upto 50% OFF</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png"
                  alt="Dineout"
                  className="absolute bottom-2 right-2 w-55 object-cover "
                />
              </div>
{/* ------------------------------------card 4------------------------------------------- */}
              <div className="relative w-full max-w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group mx-auto overflow-hidden">
                {/* Background Overlay for Faded Effect */}
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-[rgb(0,0,0)] group-hover:bg-opacity-60"></div>
                <div className=' relative z-10'>
                  <h2 className="text-4xl font-bold text-gray-800">Genie</h2>
                  <p className="text-gray-600">Pick-Up & Drop</p>
                  <p className="text-orange-500 font-semibold">On-Demand Service</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />
                <img
                  src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-3d-food-burger-multi-layered-colorful-three-dimensional-effect-png-image_9136644.png"
                  alt="Genie"
                  className="absolute bottom-2 right-2 w-55 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* JSON Data Section */}
        {/* <section className="bg-white py-8">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img
                  src={`/images/${item.image}`}
                  alt={item.path}
                  className="mx-auto mb-2 w-full h-32 object-cover"
                />
                <h2 className="text-xl font-bold mb-1 text-gray-800 capitalize">
                  {item.path}
                </h2>
              </div>
            ))}
          </div>
        </section> */}
        {/* ============================================================================================= */}
        {/*============ This is slider section =======================================*/}
        {/* <section className=' bg-white'>
              <div className="max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Food Items</h2>
        <div>
          <button onClick={prevItems} className="bg-gray-300 px-3 py-1 rounded mr-2">⬅️</button>
          <button onClick={nextItems} className="bg-gray-300 px-3 py-1 rounded">➡️</button>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {foodItems.slice(index, index + 5).map((food, i) => (
          <div key={i} className="text-center">
            <img src={`/images/${food.image}`} alt={food.name} className="w-full h-32 object-cover rounded-lg" />
            <p className="mt-2 font-semibold">{food.name}</p>
          </div>
        ))}
      </div>
    </div>
              </section> */}

      </section>

    </div>

  );
};

export default HeroSection;
