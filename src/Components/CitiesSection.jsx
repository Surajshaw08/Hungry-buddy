import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Arrow icons

const CitiesSection = () => {
  const cities = [
    "Bangalore", "Gurgaon", "Hyderabad", "Delhi", "Mumbai",
    "Pune", "Kolkata", "Chennai", "Ahmedabad", "Chandigarh",
    "Jaipur", "Lucknow", "Indore", "Nagpur", "Bhopal",
    "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar"
  ];

  const [visibleCities, setVisibleCities] = useState(10);
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded) {
      setVisibleCities(10);
    } else {
      setVisibleCities(cities.length);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="container mx-auto px-4 py-40">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-4">Cities with food delivery</h2>

      {/* Cities List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cities.slice(0, visibleCities).map((city, index) => (
          <button key={index} className="border border-gray-300 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-200 transition">
            Order food online in {city}
          </button>
        ))}
      </div>

       {/* Show More / Show Less Button - Right Aligned */}
       <div className="mt-4 text-right"> {/* ✅ Right align kiya gaya hai */}
        <button
          onClick={handleToggle}
          className="text-orange-500 font-medium flex items-center gap-1 hover:underline"
        >
          {expanded ? "Show Less" : "Show More"}{" "}
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />} {/* ✅ Arrow icons dynamically change honge */}
        </button>
      </div>
    </div>
  );
};

export default CitiesSection;
