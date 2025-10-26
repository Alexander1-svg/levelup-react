import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export function App() {
  return (
    <div className="bg-black font-sans min-h-screen text-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-8 text-2xl text-lime-400">
                ¡Mi página de inicio! (Próximamente)
              </div>
            }
          />

          <Route path="/nosotros" element={<div>Página Nosotros</div>} />
          <Route path="/blog" element={<div>Página Blog</div>} />
          <Route path="/login" element={<div>Página Login</div>} />
          <Route path="/carrito" element={<div>Página Carrito</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
