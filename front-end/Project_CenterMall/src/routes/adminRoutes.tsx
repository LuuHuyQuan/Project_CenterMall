import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { AdminLayout } from '../components/layout/AdminLayout';
import { ProtectedRoute } from '../components/auth/ProtectedRoute';

// Lazy load admin pages
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdminStoresPage = lazy(() => import('../pages/admin/AdminStoresPage').then(m => ({ default: m.AdminStoresPage })));
const AdminEventsPage = lazy(() => import('../pages/admin/AdminEventsPage').then(m => ({ default: m.AdminEventsPage })));

/**
 * Admin Routes - Protected routes requiring authentication
 * All routes under /admin require user to be authenticated
 */
export function AdminRoutes() {
  return (
    <Route
      path="admin"
      element={
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<AdminDashboard />} />
      <Route path="stores" element={<AdminStoresPage />} />
      <Route path="events" element={<AdminEventsPage />} />
    </Route>
  );
}
