import React from 'react'
import { FcSearch } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { FaArrowCircleRight } from "react-icons/fa";
import data from "../data/category.json"


const HeroSection = () => {

    // console.log("data", data)

    const link = [
        {
            icon: <FcSearch />,
            name: "Search"
        },
        {
            icon: <ImLocation2 />,
            name: "Location"
        },
        {
            icon: <FaArrowCircleRight />,
            name: "Arrow"
        }
    ]
    return (
        <div className='relative bg-[#ff5200] text-white py-16 overflow-hidden'>
            <img src="images/navl.avif" alt=""
                className=' hidden md:block absolute top-0 left-0 w-40 md:w-60'
            />
            <img src="images/navr.avif" alt=""
                className=' hidden md:block absolute top-0 right-0 w-40 md:w-60'
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
                            {/* Location icon on the left */}
                            <ImLocation2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
                            <input
                                type="text"
                                placeholder="Enter your delivery location"
                                className="w-full p-3 pl-10 pr-4 rounded-full bg-white text-black border border-gray-300 focus:outline-none"
                            />
                        </div>

                        {/* SEARCH INPUT */}
                        <div className="relative w-full md:w-1/3">
                            {/* Search icon on the right */}
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
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                            {/* Card 1 */}
                            <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl">
                                {/* Top Text */}
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800">Food Delivery</h2>
                                    <p className="text-gray-600">From Restaurants</p>
                                    <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                                </div>

                                {/* Arrow at Bottom-Left */}
                                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />

                                {/* Image at Bottom-Right */}
                                <img
                                    src="images/card1.png"
                                    alt="Food Delivery"
                                    className="absolute bottom-2 right-2 w-16 h-16 object-cover"
                                />
                            </div>

                            {/* Card 2 */}
                            <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl">
                                {/* Top Text */}
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800">Instamart</h2>
                                    <p className="text-gray-600">Instant Grocery</p>
                                    <p className="text-orange-500 font-semibold">Upto 60% OFF</p>
                                </div>
                                {/* Arrow at Bottom-Left */}
                                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />

                                {/* Image at Bottom-Right */}
                                <img
                                    src="images/card1.png"
                                    alt="Food Delivery"
                                    className="absolute bottom-2 right-2 w-16 h-16 object-cover"
                                />

                            </div>

                            {/* Card 3 */}
                            <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl">
                                {/* Top Text */}
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800">Dineout</h2>
                                    <p className="text-gray-600">Eat Out & Save</p>
                                    <p className="text-orange-500 font-semibold">Upto 50% OFF</p>
                                </div>
                                {/* Arrow at Bottom-Left */}
                                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />

                                {/* Image at Bottom-Right */}
                                <img
                                    src="images/card1.png"
                                    alt="Food Delivery"
                                    className="absolute bottom-2 right-2 w-16 h-16 object-cover"
                                />

                            </div>

                            {/* Card 4 */}
                            <div className="relative w-[280px] h-[350px] bg-white rounded-xl p-6 shadow-md transition transform duration-300 hover:scale-105 hover:shadow-2xl">
                                {/* Top Text */}
                                <div>
                                    <h2 className="text-4xl font-bold text-gray-800">Genie</h2>
                                    <p className="text-gray-600">Pick-Up & Drop</p>
                                    <p className="text-orange-500 font-semibold">On-Demand Service</p>
                                </div>
                                {/* Arrow at Bottom-Left */}
                                <FaArrowCircleRight className="absolute bottom-3 left-3 text-orange-500 text-3xl cursor-pointer" />

                                {/* Image at Bottom-Right */}
                                <img
                                    src="images/card1.png"
                                    alt="Food Delivery"
                                    className="absolute bottom-2 right-2 w-16 h-16 object-cover"
                                />

                            </div>
                        </div>
                    </div>
                </section>


                {/* Json Data */}

                <section className="bg-white py-8">
                    <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="border rounded-lg p-4 text-center hover:shadow-xl transition"
                            >
                                <img
                                    src={`${item.image}`}
                                    alt={item.path}
                                    className="mx-auto mb-2 w-full h-32 object-cover"
                                />
                                <h2 className="text-xl font-bold mb-1 text-gray-800 capitalize">
                                    {item.path}
                                </h2>
                            </div>
                        ))}
                    </div>
                </section>

            </section>
        </div>
    )
}

export default HeroSection
