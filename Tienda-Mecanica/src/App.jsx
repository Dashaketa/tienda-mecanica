import React from "react";
import Hero from "./Hero";
import ProductCard from "./ProductCard";
import Footer from "./Footer"; // Asegúrate de que el import sea correcto
import './App.css';

const products = [
  { id: 1, name: "Amortiguador Delantero", price: "$120.000", image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Frenos Discos", price: "$80.000", image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Bujías de Encendido", price: "$25.000", image: "https://via.placeholder.com/300x200" },
  { id: 4, name: "Aceite Automotriz", price: "$15.000", image: "https://via.placeholder.com/300x200" },
  { id: 5, name: "Amortiguador Delantero", price: "$120.000", image: "https://via.placeholder.com/300x200" },
  { id: 6, name: "Frenos Discos", price: "$80.000", image: "https://via.placeholder.com/300x200" },
  { id: 7, name: "Bujías de Encendido", price: "$25.000", image: "https://via.placeholder.com/300x200" },
  { id: 8, name: "Aceite Automotriz", price: "$15.000", image: "https://via.placeholder.com/300x200" },
  { id: 9, name: "Amortiguador Delantero", price: "$120.000", image: "https://via.placeholder.com/300x200" },
  { id: 10, name: "Frenos Discos", price: "$80.000", image: "https://via.placeholder.com/300x200" },
  { id: 11, name: "Bujías de Encendido", price: "$25.000", image: "https://via.placeholder.com/300x200" },
  { id: 12, name: "Aceite Automotriz", price: "$15.000", image: "https://via.placeholder.com/300x200" }

];

export default function App() {
  const count = products.length;
  let heading = count > 0 ? `${count} Productos` : "No hay productos disponibles";
  
  return (
    <div className="App">
      <Hero />
      <section className="p-6 bg-gray-100">
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
