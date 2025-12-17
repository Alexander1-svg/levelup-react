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
import CategoriaPage from "./pages/CategoriaPage";
import { Toaster } from "sonner";
import { DashboardPage } from "./pages/DashboardPage";
import { AuthProvider } from "./Context/AuthContext";

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="bg-black min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Toaster richColors position="top-center" theme="dark" />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nosotros" element={<NosotrosPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/create-post" element={<CreatePostPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/carrito" element={<CarritoPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/categoria/:nombreCategoria"
                element={<CategoriaPage />}
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
