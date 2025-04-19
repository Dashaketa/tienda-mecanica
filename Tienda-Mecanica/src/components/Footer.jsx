export default function Footer() {
    return (
      <Footer className="bg-trasnparent text-white py-6 mt-10 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Tienda Mecánica. Todos los derechos reservados.
        </p>
        <div className="mt-4">
          <a href="https://github.com" className="text-vite hover:underline">GitHub</a>
          <span className="mx-2">|</span>
          <a href="https://twitter.com" className="text-vite hover:underline">Twitter</a>
        </div>
      </Footer>
    )
}  