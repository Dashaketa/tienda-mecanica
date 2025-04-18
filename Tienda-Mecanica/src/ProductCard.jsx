export default function ProductCard({ product }) {
    return (
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded"
        />
        <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500 mb-2">{product.price}</p>
        <button className="mt-auto bg-vite text-white px-4 py-2 rounded hover:bg-violet-600 transition">
          Agregar al carrito
        </button>
      </div>
       )
}
  