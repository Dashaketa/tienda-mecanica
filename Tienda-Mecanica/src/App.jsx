import React from "react";
import Hero from "./sections/Hero";
import ProductCard from "./sections/ProductCard";
import Footer from "./components/Footer";
import { products } from "./sections/Product";
import Background from "./components/Background";
import Navbar from "./components/Navbar";


export default function App() {
  const count = products.length;
  let heading = count > 0 ? `${count} Productos` : "No hay productos disponibles";
  
  return (
    <div className="relative min-h-screen text-white">
    <Background />
    <Navbar />
    <Hero/>
    <section className="p-6 relative z-10">
      <h2 className="text-3xl font-bold text-center">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
    <Footer />
  </div>
  );
}
