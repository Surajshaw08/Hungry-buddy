import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className='relative bg-black text-white py-10 overflow-hidden h-[100vh]'>
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

      {/* Flex container for Chef and Cards */}
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between h-full">
        
        {/* Chef Image */}
        <div className="flex-shrink-0 mb-8 lg:mb-0">
          <img
            src="/images/picture-of-a-chef-5.png"
            alt="chef"
            className="w-[300px] sm:w-[400px] lg:w-[450px]"
          />
        </div>

        {/* Cards Section */}
        <section className="w-full lg:w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Food Delivery",
                subtitle: "From Restaurants",
                offer: "Upto 60% OFF",
                image: "images/card1.png",
              },
              {
                title: "Instamart",
                subtitle: "Instant Grocery",
                offer: "Upto 60% OFF",
                image: "/images/instamart.png",
              },
              {
                title: "Dineout",
                subtitle: "Eat Out & Save",
                offer: "Upto 50% OFF",
                image:
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
              },
              {
                title: "Genie",
                subtitle: "Pick-Up & Drop",
                offer: "On-Demand Service",
                image:
                  "https://png.pngtree.com/png-clipart/20230504/original/pngtree-3d-food-burger-multi-layered-colorful-three-dimensional-effect-png-image_9136644.png",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative bg-white w-full h-[220px] rounded-xl p-4 sm:p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-60"></div>
                <div className="relative z-10">
                  <h2 className="text-lg sm:text-2xl font-bold text-gray-800">{card.title}</h2>
                  <p className="text-gray-600 text-sm sm:text-base">{card.subtitle}</p>
                  <p className="text-orange-500 font-semibold text-sm sm:text-base">{card.offer}</p>
                </div>
                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-2xl sm:text-3xl cursor-pointer" />
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute bottom-2 right-2 w-20 sm:w-24 object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;
