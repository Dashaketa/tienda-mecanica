export default function CompanyCard({ title, description }) {
  return (
    <div className="h-72 max-w-sm w-full p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:shadow-[0_0_50px_rgba(248,113,113)] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-red-400 text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm opacity-80 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}