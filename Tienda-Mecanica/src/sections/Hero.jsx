import '/Users/sebastianlopez/Documents/Duoc/5to Semestre/tienda/Tienda-Mecanica/src/styles/titulos.css';


export default function Hero() {
  return (
    <header className="relative bg-transparent text-center py-16 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Título principal */}
        <div className=" bg-transparent p-1 inline-block rounded-lg">
         <h1 className='titulo-principal'>Bienvenido a Tienda Mecanica</h1>
          <p className="mt-4 text-2xl font-semibold text-white/80">
  Tu Aliado Automotriz         
         </p>
        </div>
      </div>
    </header>
  );
}
