import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserRoutes } from './userRoutes';
import { AdminRoutes } from './adminRoutes';
import { NotFoundPage } from '../pages/NotFoundPage';

/**
 * Loading Fallback Component
 * Displayed while lazy-loaded components are being fetched
 */
function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block w-16 h-16 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin mb-4" />
        <p className="text-gray-600">Đang tải...</p>
      </div>
    </div>
  );
}

/**
 * Main Application Routes
 * Combines all route modules with proper error and loading handling
 */
export function AppRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        {/* User Routes - Public */}
        {UserRoutes()}

        {/* Admin Routes - Protected */}
        {AdminRoutes()}

        {/* 404 Not Found - Catch all unmatched routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
