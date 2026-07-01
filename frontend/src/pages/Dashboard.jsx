import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-bold">Dashboard

Welcome to Reditus
You are logged in successfully.</h1>

      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;