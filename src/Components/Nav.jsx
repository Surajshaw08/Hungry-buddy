import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-10">
      <header className="p-3 shadow-xl bg-[#ff5200]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[100px]">
              <img
                className="w-[70%] rounded-full border-2 border-white"
                src="images/Logo 2.png"
                alt="Logo"
              />
            </div>
            <div className="font-black ml-3 text-white text-4xl">
              Hungry buddy
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white">
            <h1 className="cursor-pointer transition duration-300 hover:underline">
              Hungry corporate
            </h1>
            <h1 className="cursor-pointer transition duration-300 hover:underline">
              Contact us
            </h1>
            <button className="border-2 rounded-lg px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800">
              Get App
            </button>
            <button className="bg-black text-white px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black rounded-full">
              Sign in
            </button>
          </nav>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#ff5200] text-white p-4">
            <nav className="flex flex-col gap-4">
              <h1 className="cursor-pointer transition duration-300 hover:underline">
                Hungry corporate
              </h1>
              <h1 className="cursor-pointer transition duration-300 hover:underline">
                Contact us
              </h1>
              <button className="border-2 rounded-lg px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800">
                Get App
              </button>
              <button className="bg-black text-white px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black rounded-full">
                Sign in
              </button>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
