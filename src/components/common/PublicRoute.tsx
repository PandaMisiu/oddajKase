import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return user ? <Navigate to="/dashboard" replace /> : <>{children}</>;
}
