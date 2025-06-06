import { Navigate } from 'react-router-dom';
import { useAuthState } from '../hooks/useAuthState';

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuthState();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return children;
}