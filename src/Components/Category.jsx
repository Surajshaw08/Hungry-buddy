import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Category = () => {
  const [imagesData, setImagesData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleImages = 5;

  useEffect(() => {
    fetch("/data/category.json")  // Ensure karo ki file path correct hai
      .then((res) => res.json())
      .then((data) => setImagesData(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  const handleNext = () => {
    if (startIndex < imagesData.length - visibleImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center"> 
    {/*  Chef image left corner pe fix */}
    <img 
      src="/images/picture-of-a-chef-5.png" 
      alt="Chef" 
      className="absolute left-0 top-1/2 transform -translate-y-1/2" 
    />
    <div className=" w-full p-4 max-w-4xl mx-auto  bg-white pr-10 mr-50">
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="flex gap-2">
          <button onClick={handlePrev} className="p-2 bg-white rounded-full disabled:opacity-50" disabled={startIndex === 0}>
            <ChevronLeft size={24} />
          </button>
          <button onClick={handleNext} className="p-2 bg-white rounded-full disabled:opacity-50" disabled={startIndex >= imagesData.length - visibleImages}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden">
        {imagesData.slice(startIndex, startIndex + visibleImages).map((img, index) => (
          <img key={index} src={`/images/${img.image}`} alt={img.path} className="w-1/5" />
        ))}
      </div>
      <div className="flex gap-4 overflow-hidden">
        {imagesData.slice(startIndex, startIndex + visibleImages).map((img, index) => (
          <img key={index} src={`/images/${img.image}`} alt={img.path} className="w-1/5" />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Category;