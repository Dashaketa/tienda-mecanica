function Product({ product }) {
    return (
      <div className="border rounded-lg shadow p-4 bg-green-200">
        <img src={product.image} alt={product.name} className="w-full h-48 object-fill rounded" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    );

    
  }
  
  export default Product;

export const products = [
  { id: 1, name: "Amortiguador Delantero", price: "$120.000", image: "https://img.freepik.com/foto-gratis/primer-plano-guacamaya-roja-vista-lateral-closeup-cabeza-guacamaya-roja_488145-3540.jpg?semt=ais_hybrid&w=740" },
  { id: 2, name: "Frenos Discos", price: "$80.000", image: "https://img.freepik.com/foto-gratis/colibri-colores-vivos-entorno-natural_23-2151495344.jpg?semt=ais_hybrid&w=740" },
  { id: 3, name: "Bujías de Encendido", price: "$25.000", image: "https://img.freepik.com/fotos-premium/ilustracion-plana-2d-hipster-gecko-antiguo-gafas-sol-que-cambian-color_759095-171217.jpg?semt=ais_hybrid&w=740" },
  { id: 4, name: "Pajaro", price: "$25.000", image: "https://img.freepik.com/foto-gratis/gato-futurista-gafas-proteccion_23-2150969337.jpg?semt=ais_hybrid&w=740" },
];
  