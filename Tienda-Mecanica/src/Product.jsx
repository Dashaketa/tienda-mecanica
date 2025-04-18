function Product({ product }) {
    return (
      <div className="border rounded-lg shadow p-4 bg-white">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
        <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
        <p className="text-gray-600">${product.price}</p>
      </div>
    );
  }
  
  export default Product;
  