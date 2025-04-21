export default function FancyButton({ href, children }) {
  return (
    <a
      href={href}
      className="relative inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-xl shadow-md hover:shadow-[0_0_30px_rgba(253,224,71,0.4)] transition duration-300 ease-in-out hover:scale-105"
    >
      {children}
    </a>
  );
}

  