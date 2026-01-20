import { Routes, Route } from 'react-router-dom';
import { UserLayout } from '../components/layout/UserLayout';
import { HomePage } from '../pages/user/HomePage';
import { StoresPage } from '../pages/user/StoresPage';
import { StoreDetailPage } from '../pages/user/StoreDetailPage';
import { EventsPage } from '../pages/user/EventsPage';
import { AboutPage } from '../pages/user/AboutPage';
import { ContactPage } from '../pages/user/ContactPage';

export function AppRoutes() {
  return (
    <Routes>
      {/* User Routes */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/stores" element={<StoresPage />} />
        <Route path="/stores/:id" element={<StoreDetailPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}
