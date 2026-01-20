import { type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

/**
 * Protected Route Component
 * Redirects to login if user is not authenticated
 * In production, this should check real authentication state
 */
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: Replace with real authentication logic
  // Example: const { isAuthenticated } = useAuth();
  const isAuthenticated = true; // Temporary - set to true for development

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth/login" replace />;
  }

  return <>{children}</>;
}
