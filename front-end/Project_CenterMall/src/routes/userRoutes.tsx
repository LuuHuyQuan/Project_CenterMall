import { lazy } from 'react';
import { Route } from 'react-router-dom';
import { UserLayout } from '../components/layout/UserLayout';

// Lazy load pages for better performance
const HomePage = lazy(() => import('../pages/user/HomePage').then(m => ({ default: m.HomePage })));
const StoresPage = lazy(() => import('../pages/user/StoresPage').then(m => ({ default: m.StoresPage })));
const StoreDetailPage = lazy(() => import('../pages/user/StoreDetailPage').then(m => ({ default: m.StoreDetailPage })));
const EventsPage = lazy(() => import('../pages/user/EventsPage').then(m => ({ default: m.EventsPage })));
const AboutPage = lazy(() => import('../pages/user/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('../pages/user/ContactPage').then(m => ({ default: m.ContactPage })));

/**
 * User Routes - Public routes accessible to all users
 */
export function UserRoutes() {
  return (
    <Route element={<UserLayout />}>
      <Route index element={<HomePage />} />
      <Route path="stores">
        <Route index element={<StoresPage />} />
        <Route path=":id" element={<StoreDetailPage />} />
      </Route>
      <Route path="events" element={<EventsPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  );
}
