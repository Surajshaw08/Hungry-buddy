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
    <div className='relative text-white py-10 overflow-hidden h-[100vh]'>
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

      

    </div>

  );
};

export default HeroSection;
