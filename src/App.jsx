import { useState } from 'react'
import Nav from "./Components/Nav";
import HeroSection from './Components/HeroSection';
import Category from './Components/Category';
import Footer from './Components/Footer';
import CitiesSection from './Components/CitiesSection';


function App() {

  return (
    <div>
     <Nav />
     <HeroSection/>
     <Category/>
     <CitiesSection/>
     <Footer/>
    </div>
  )
}

export default App
