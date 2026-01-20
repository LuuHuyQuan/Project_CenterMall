export function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-sm text-gray-500 mb-1">Tổng cửa hàng</div>
          <div className="text-3xl font-bold text-gray-900">200</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-sm text-gray-500 mb-1">Sự kiện đang diễn ra</div>
          <div className="text-3xl font-bold text-gray-900">4</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-sm text-gray-500 mb-1">Lượt khách hôm nay</div>
          <div className="text-3xl font-bold text-gray-900">12,543</div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-sm text-gray-500 mb-1">Doanh thu tháng</div>
          <div className="text-3xl font-bold text-gray-900">2.5M</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow">
        <h2 className="text-xl font-semibold mb-4">Hoạt động gần đây</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <div className="font-medium">Cửa hàng mới: Nike Store</div>
              <div className="text-sm text-gray-500">Tầng 2 - Thể thao</div>
            </div>
            <div className="text-sm text-gray-400">10 phút trước</div>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div>
              <div className="font-medium">Sự kiện: Flash Sale</div>
              <div className="text-sm text-gray-500">Khuyến mãi 50%</div>
            </div>
            <div className="text-sm text-gray-400">1 giờ trước</div>
          </div>
        </div>
      </div>
    </div>
  );
}
