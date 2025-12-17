import { useAuth } from "../Context/AuthContext";
export default function DashboardAdminPage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-8 bg-gray-800 rounded-lg shadow-xl text-white">
        <div className="text-white text-center">Cargando...</div>
      </div>
    );
  }

  return <div>Dashboard Admin Page - En construcción</div>;
}
