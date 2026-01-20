import { Outlet } from 'react-router-dom';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-gray-900 text-white p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <p className="text-sm text-gray-400">CenterMall</p>
        </div>

        <nav className="space-y-2">
          <a href="/admin" className="block px-4 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors">
            Dashboard
          </a>
          <a href="/admin/stores" className="block px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Quản lý Cửa hàng
          </a>
          <a href="/admin/events" className="block px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Quản lý Sự kiện
          </a>
          <a href="/admin/settings" className="block px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Cài đặt
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
