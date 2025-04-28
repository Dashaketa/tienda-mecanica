export default function Navbar() {
    return (
      <nav className="f left-0 right-0 z-50 bg-transparent  px-6 py-4 flex justify-center items-center space-x-12">
      <a href="#" className="text-black/80 hover:text-black font-medium relative group transition-all duration-200">
        Inicio
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href="#" className="text-black/80 hover:text-black font-medium relative group transition-all duration-200">
        Productos
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
      </a>
      <a href="#" className="text-black/80 hover:text-black font-medium relative group transition-all duration-200">
        Contacto
        <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-black group-hover:w-full transition-all duration-300"></span>
      </a>
    </nav>
    
    )
  }
  