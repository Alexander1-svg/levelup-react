import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-4">Bienvenid@ a tu Cuenta</h1>
      <hr className="border-gray-700 mb-6" />
      <div className="space-y-4">
        <div>
          <p className="text-lg font-semibold text-gray-400">
            Nombre Completo:
          </p>
          <p className="text-2xl font-bold text-green-400">{user.fullName}</p>
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
        className="mt-8 bg-red-600 hover:bg-red-700 p-2 rounded text-white font-bold w-full"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
