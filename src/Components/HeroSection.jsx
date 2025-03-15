import React from 'react';
import { useState, useEffect } from "react";

const HeroSection = () => {

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
    <div>
      <img src="/images/picture-of-a-chef-5.png" alt="chef" className=' flex pl-60'/>
    </div>
      

    </div>

  );
};

export default HeroSection;
