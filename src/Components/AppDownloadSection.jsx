import React, { useState } from "react";

const AppDownloadSection = () => {
  // State to track the input type (email or phone)
  const [inputType, setInputType] = useState("email");

  return (
    <div className="bg-white flex flex-col md:flex-row items-center justify-center p-6 md:p-0">
      {/* Left Section: Image */}
      <div className="relative flex justify-center mb-6 md:mb-0">
        <img
          src="/images/Hungryphone.png"
          alt="App Preview"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </div>

      {/* Right Section: Content */}
      <div className="text-center md:text-left md:ml-8">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
          Get the Hungry buddy app
        </h1>
        <p className="text-gray-600 mt-2">
          We will send you a link, open it on your phone to download the app
        </p>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start mt-6 space-y-4 md:space-y-0 space-x-4">
          {/* Radio Buttons */}
          <div className="flex space-x-4">
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="contactMethod"
                className="form-radio text-red-500"
                checked={inputType === "email"}
                onChange={() => setInputType("email")}
              />
              <span className="ml-2">Email</span>
            </label>
            <label className="flex items-center text-gray-700">
              <input
                type="radio"
                name="contactMethod"
                className="form-radio text-red-500"
                checked={inputType === "phone"}
                onChange={() => setInputType("phone")}
              />
              <span className="ml-2">Phone</span>
            </label>
          </div>

          {/* Input and Button */}
          <div className="flex  md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type={inputType === "email" ? "email" : "tel"}
              placeholder={inputType === "email" ? "Email" : "Phone"}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none w-full md:w-auto"
            />
            <button className="bg-[#ff5200] text-white rounded-lg px-6 py-2 hover:bg-red-600">
              Share App Link
            </button>
          </div>
        </div>

        {/* Download Buttons */}
        {/* <div className="flex justify-center md:justify-start mt-6 space-x-4">
          <a href="#" className="block">
            <img
              src="/path-to-google-play-badge.png"
              alt="Google Play"
              className="h-12"
            />
          </a>
          <a href="#" className="block">
            <img
              src="/path-to-app-store-badge.png"
              alt="App Store"
              className="h-12"
            />
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default AppDownloadSection;
