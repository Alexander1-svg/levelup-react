export function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-sky-500 mb-8 text-center">
        Comunidad & Noticias
      </h1>

      <hr className="text-white max-w-7xl mx-auto my-3" />

      <h2 className="text-2xl font-bold mb-4">Últimas Noticias</h2>

      <article className="mb-8">
        <article className="bg-gray-900 rounded-3xl shadow-2xl p-0 flex flex-col items-center hover:shadow-3xl transition-all border-2 border-green-800 overflow-hidden">
          <img
            src="img/SilkSong.jpg"
            alt="Noticia principal"
            className="w-full object-cover"
          />
          <div className="w-full p-10 flex flex-col items-start">
            <span className="text-gray-400 text-base mb-2">
              Noticia · 4 sep 2025
            </span>
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              ¡Nuevo lanzamiento rompe el mercado digital!
            </h2>
            <p className="text-gray-200 mb-4 text-2xl leading-relaxed">
              Silksong, la esperada secuela de Hollow Knight, ha sobrecargado el
              mercado digital, plataformas como steam, PlayStation Store entre
              otras colapsan ante la demanda masiva. 7 de años de espera desde
              el primer juego han llevado a que los fans estuviesen ansiosos por
              esta nueva entrega.
              <br />
              <br />
              Otras compañias retrasan sus lanzamientos para evitar la
              competencia directa con este esperado título.
              <br />
              <br />
              TeamCherry ha demostrado un gran nivel de dedicación como ninguna
              otra compañia indie, con un arte y banda sonora impecable.
            </p>
          </div>
        </article>
      </article>
    </div>
  );
}
