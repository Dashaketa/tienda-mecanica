import React from "react";
import Hero from "./sections/Hero";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import CompanyInfoSection from "./components/CompanyInfoSection";
import AboutUs from "./sections/AboutUs";
import CarruselMarcas from "./components/CarruselMarcas";


export default function App() {
  return (
    <div className="relative min-h-screen text-white">
    <Background />
    <Navbar />
   <Hero/>  
   <CompanyInfoSection/>
   <AboutUs/>
   <CarruselMarcas/>
      </div>
  );
}
