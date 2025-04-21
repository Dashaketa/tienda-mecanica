export default function CompanyCard({ title, description }) {
    return (
      <div className="h-72 max-w-sm w-full p-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(250,204,21,0.4)] transition-transform flex flex-col justify-between text-white">
        <div>
          <h3 className="text-yellow-200 text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm opacity-80 leading-relaxed">{description}</p>
        </div>
      </div>
    );
  }
  