export default function CompanyCard({ title, description }) {
  return (
    <div
      className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(254,240,138,0.4)]
 transition-transform text-white"
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 leading-relaxed">{description}</p>
    </div>
  );
}
