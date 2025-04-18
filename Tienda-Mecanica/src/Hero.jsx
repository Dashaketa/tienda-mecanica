export default function Hero() {
    return (
      <header className="bg-white text-center py-16 px-4">
        <img
          src="/logo.svg"
          alt="Vite Logo"
          className="w-24 mx-auto mb-6 animate-bounce"
        />
        <h2 className="text-4xl font-bold text-vite mb-4">Bienvenido a Tienda Mecánica</h2>
        <p className="text-gray-600 text-lg mb-6">Encuentra los repuestos que tu vehículo necesita</p>
        <a href="#productos" className="bg-vite text-white px-6 py-3 rounded hover:bg-violet-600 transition">
          Ver productos
        </a>
      </header>
    )
  }
  