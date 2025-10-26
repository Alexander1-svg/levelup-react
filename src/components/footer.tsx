export function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200 py-8 mt-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="font-bold text-lg">Contacto</span>
          <span>
            Email:{" "}
            <a
              href="mailto:contacto@levelupgamer.com"
              className="text-sky-400 hover:underline"
            >
              contacto@levelupgamer.com
            </a>
          </span>
          <span>
            Soporte:{" "}
            <a
              href="mailto:soporte@levelupgamer.com"
              className="text-sky-400 hover:underline"
            >
              soporte@levelupgamer.com
            </a>
          </span>
          <span>
            {/* Asegúrate de que esta ruta apunte a 'public/sprites/social.png' */}
            <img
              src="/sprites/social.png"
              alt="WhatsApp Icon"
              className="inline-block w-4 h-4 mr-1"
            />
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              +56 9 1234 5678
            </a>
          </span>
        </div>
        <div className="text-center md:text-right mt-4 md:mt-0">
          <span className="block">
            &copy; 2025 Level-up Gamer. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
