import { CartProvider } from "./components/CartProvider";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import CreatePostPage from "./pages/CreatePostPage";
import CarritoPage from "./pages/CarritoPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { NosotrosPage } from "./pages/NosotrosPage";

export function App() {
  return (
    <CartProvider>
      <div className="bg-black min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/create-post" element={<CreatePostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/carrito" element={<CarritoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
}
