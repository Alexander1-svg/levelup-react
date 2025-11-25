import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

export function DashboardPage() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl text-white">
        <div className="text-white text-center">Cargando...</div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 border-3 border-l-emerald-400 rounded-lg shadow-xl text-white p-10 drop-shadow shadow-green-500/50 bg-gray-900">
      <User className="h-30 w-30 bg-linear-to-br from-lime-400 via-violet-600 to-cyan-500 rounded-full p-4">
        {user.nombre}
      </User>
      <br />
      <hr className="border-gray-700 mb-6" />
      <div className="space-y-4">
        <div>
          <p className="text-lg font-semibold text-gray-400">
            Nombre Completo:
          </p>
          <p className="text-2xl font-bold text-green-400">{user.nombre}</p>
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-400">
            Correo Electrónico:
          </p>
          <p className="text-xl text-blue-400">{user.email}</p>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="mt-8 bg-red-600 hover:bg-red-700 p-2 rounded text-white font-bold w-auto"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
