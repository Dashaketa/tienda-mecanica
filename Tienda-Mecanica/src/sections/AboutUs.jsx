// src/sections/AboutUs.jsx

export default function AboutUs() {
    return (
      <section className="relative z-10 px-6 py-16 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">¿Quiénes somos?</h1>
          <h3 className="text-lg sm:text-xl opacity-80 leading-relaxed mb-12">
            Somos una empresa comprometida con entregar soluciones innovadoras en el área automotriz. Nos mueve la pasión por la tecnología, el buen servicio y las relaciones duraderas con nuestros clientes.
          </h3>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <AboutCard 
            title="¿De dónde somos?" 
            description="Nacimos en Chile, con raíces fuertes en el servicio técnico y distribución de repuestos. Conectamos nuestra experiencia con las nuevas tecnologías para ofrecer una plataforma moderna y eficiente." 
          />
          <AboutCard 
            title="¿Qué hacemos?" 
            description="Modernizamos el proceso de compra y distribución de repuestos automotrices, uniendo negocios y clientes finales en una sola plataforma accesible y robusta." 
          />
          <AboutCard 
            title="¿Hacia dónde vamos?" 
            description="A construir el futuro del comercio automotriz en línea. Queremos convertirnos en el referente digital para quienes buscan calidad, rapidez y confianza." 
          />
        </div>
      </section>
    );
  }
  
  function AboutCard({ title, description }) {
    return (
      <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] transition-transform">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm opacity-80 leading-relaxed">{description}</p>
      </div>
    );
  }
  