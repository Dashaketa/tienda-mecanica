import CompanyCard from './CompanyCard';

const info = [
  {
    title: "Compromiso con la calidad",
    description: "Ofrecemos repuestos automotrices certificados para garantizar el mejor rendimiento en cada vehículo."
  },
  {
    title: "Asesoría experta",
    description: "Nuestro equipo tiene más de 10 años de experiencia en el rubro automotriz, brindando soluciones personalizadas."
  },
  {
    title: "Cobertura nacional",
    description: "Realizamos envíos a todo Chile, asegurando rapidez y seguridad en cada entrega."
  },
  {
    title: "Soporte postventa",
    description: "Acompañamos a nuestros clientes incluso después de la compra, con atención dedicada y garantía."
  }
];

export default function CompanyInfoSection() {
  return (
    <section className="p-10 md:p-20 bg-black/10 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">¿Por qué elegirnos?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {info.map((item, i) => (
          <CompanyCard key={i} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
