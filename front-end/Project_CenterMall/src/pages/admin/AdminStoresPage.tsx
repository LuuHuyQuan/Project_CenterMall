export function AdminStoresPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Quản lý Cửa hàng</h1>
        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
          + Thêm cửa hàng mới
        </button>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tên cửa hàng</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Danh mục</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Tầng</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Trạng thái</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Hành động</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <td className="px-6 py-4 font-medium">Zara</td>
              <td className="px-6 py-4 text-gray-500">Thời trang</td>
              <td className="px-6 py-4 text-gray-500">1</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Hoạt động</span>
              </td>
              <td className="px-6 py-4">
                <button className="text-violet-600 hover:text-violet-700 mr-3">Sửa</button>
                <button className="text-red-600 hover:text-red-700">Xóa</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 font-medium">Starbucks</td>
              <td className="px-6 py-4 text-gray-500">Ẩm thực</td>
              <td className="px-6 py-4 text-gray-500">1</td>
              <td className="px-6 py-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">Hoạt động</span>
              </td>
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
