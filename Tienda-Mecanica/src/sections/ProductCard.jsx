import FancyButton from "../components/FancyButton";

export default function ProductCard({ product }) {
    return (
      <div className="bg-transparent rounded-xl shadow hover:shadow-lg transition p-10 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 mb-2">{product.price}</p>
        <FancyButton href="#productos">Ver productos</FancyButton>

      </div>
       )
}
  