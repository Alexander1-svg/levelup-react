import { CartProvider } from "./components/CartProvider";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import CarritoPage from "./pages/CarritoPage";

export function App() {
  return (
    <CartProvider>
      <div className="bg-black font-sans min-h-screen text-white flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/nosotros" element={<div>Página Nosotros</div>} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<div>Página Login</div>} />
            <Route path="/carrito" element={<CarritoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
