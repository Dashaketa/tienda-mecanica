export default function Navbar() {
    return (
      <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-vite">Tienda Mecánica</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-vite">Inicio</a>
          <a href="#" className="text-gray-600 hover:text-vite">Productos</a>
          <a href="#" className="text-gray-600 hover:text-vite">Contacto</a>
        </div>
      </nav>
    )
  }
  