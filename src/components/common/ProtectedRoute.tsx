import { Navigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) return null; // albo <Spinner />

  return user ? <>{children}</> : <Navigate to="/signin" replace />;
}
