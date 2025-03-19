import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down - hide navbar
      setIsVisible(false);
    } else {
      // Scrolling up - show navbar
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <header className="p-1 backdrop-blur-[2px]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[100px]">
              <Link to="/">
                <img
                  className="w-[70%] rounded-full border-3 border-white cursor-pointer"
                  src="images/Logo 2.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="font-black ml-3 text-white text-4xl">
              <Link to="/">
                <h1 className="text-2xl font-bold text-white cursor-pointer">
                  Hungry buddy
                </h1>
              </Link>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-white">
            <h1 className="cursor-pointer transition duration-300 font-bold">
              Hungry corporate
            </h1>
            <h1 className="cursor-pointer transition duration-300 font-bold">
              Contact us
            </h1>
            <Link to="/AppDownloadSection">
              <button className="border-2 rounded-lg px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-white cursor-pointer">
                Get App
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-black text-white px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-gray-600 hover:text-black rounded-full cursor-pointer">
                Sign up
              </button>
            </Link>
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
          <div className="md:hidden text-black p-4">
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
              <Link to="/login">
                <button className="bg-black text-white px-6 py-3 text-lg transition duration-300 transform hover:scale-105 hover:bg-white hover:text-black rounded-full">
                  Sign in
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
