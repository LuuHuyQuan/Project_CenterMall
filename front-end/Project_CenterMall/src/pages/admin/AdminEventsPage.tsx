export function AdminEventsPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý Sự kiện</h1>
        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
          + Thêm sự kiện mới
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tên sự kiện</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Loại</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ngày bắt đầu</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Ngày kết thúc</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-6 py-4 font-medium">Giảm Giá Cuối Năm</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-rose-100 text-rose-700 rounded-full text-xs">Khuyến mãi</span>
              </td>
              <td className="px-6 py-4 text-gray-500">15/01/2026</td>
              <td className="px-6 py-4 text-gray-500">31/01/2026</td>
              <td className="px-6 py-4">
                <button className="text-violet-600 hover:text-violet-700 mr-3">Sửa</button>
                <button className="text-red-600 hover:text-red-700">Xóa</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Lễ Hội Ẩm Thực</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">Sự kiện</span>
              </td>
              <td className="px-6 py-4 text-gray-500">20/01/2026</td>
              <td className="px-6 py-4 text-gray-500">25/01/2026</td>
              <td className="px-6 py-4">
                <button className="text-violet-600 hover:text-violet-700 mr-3">Sửa</button>
                <button className="text-red-600 hover:text-red-700">Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
