import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { LoginPage } from "./pages/Loginpage";
import { RegisterPage } from "./pages/RegisterPage";

export function App() {
  return (
    <div className="bg-black font-sans min-h-screen text-white flex flex-col">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/nosotros" element={<div>Página Nosotros</div>} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/carrito" element={<div>Página Carrito</div>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
