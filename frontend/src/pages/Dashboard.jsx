import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, {user?.name}! 👋
          </h1>
          <p className="text-gray-500 mb-6">Email: {user?.email}</p>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}