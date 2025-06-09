import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { usuario, carregando } = useAuth();

  if (carregando) {
    return <div className="p-4">Carregando autenticação...</div>;
  }

  if (!usuario) {
    return <Navigate to="/" replace />;
  }

  return children;
}
