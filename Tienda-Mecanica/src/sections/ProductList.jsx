import Product from './sections./Product';

function ProductList({ products, emptyHeading }) {
  const count = products.length;
  let heading = emptyHeading;

  if (count > 0) {
    const noun = count > 1 ? 'Productos' : 'Producto';
    heading = `${count} ${noun} disponibles`;
  }

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">{heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
