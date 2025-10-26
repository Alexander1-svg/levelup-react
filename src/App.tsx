import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";

export function App() {
  return (
    <div className="bg-black font-sans min-h-screen text-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/nosotros" element={<div>Página Nosotros</div>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<div>Página Login</div>} />
          <Route path="/carrito" element={<div>Página Carrito</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
