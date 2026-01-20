import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-50 px-4">
      <div className="text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-violet-100 to-indigo-100 mb-6">
            <Search className="w-16 h-16 text-violet-600" />
          </div>
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-4">
            404
          </h1>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Trang Không Tồn Tại
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
          Trang có thể đã được di chuyển hoặc không còn tồn tại.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-full hover:opacity-90 transition-opacity shadow-lg"
          >
            <Home className="w-5 h-5" />
            Về Trang Chủ
          </Link>
          <Link
            to="/stores"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 transition-colors"
          >
            <Search className="w-5 h-5" />
            Khám Phá Cửa Hàng
          </Link>
        </div>

        {/* Help Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-3">Bạn có thể quan tâm:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/events" className="text-violet-600 hover:text-violet-700">
              Sự kiện & Khuyến mãi
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-violet-600 hover:text-violet-700">
              Giới thiệu
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-violet-600 hover:text-violet-700">
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
