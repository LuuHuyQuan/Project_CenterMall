import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { mallInfo } from '../../data/mockData';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Đăng ký nhận tin khuyến mãi
              </h3>
              <p className="text-violet-100 mt-1">
                Nhận thông tin ưu đãi mới nhất từ CenterMall
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 md:w-80 px-5 py-3 rounded-l-full bg-white/10 border border-white/20 text-white placeholder:text-violet-200 focus:outline-none focus:bg-white/20 transition-colors"
              />
              <button className="px-6 py-3 bg-white text-violet-600 font-semibold rounded-r-full hover:bg-violet-50 transition-colors flex items-center gap-2">
                Đăng ký
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                {mallInfo.name}
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {mallInfo.slogan}. Với hơn {mallInfo.totalStores} cửa hàng trải dài trên {mallInfo.totalFloors} tầng,
              chúng tôi mang đến trải nghiệm mua sắm tuyệt vời nhất cho bạn.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href={mallInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={mallInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={mallInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-violet-600 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Liên kết nhanh</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/stores" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Sự kiện & Khuyến mãi
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Danh mục</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/stores?category=fashion" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Thời trang
                </Link>
              </li>
              <li>
                <Link to="/stores?category=food" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Ẩm thực
                </Link>
              </li>
              <li>
                <Link to="/stores?category=entertainment" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Giải trí
                </Link>
              </li>
              <li>
                <Link to="/stores?category=beauty" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Làm đẹp
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <span>{mallInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span>{mallInfo.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span>{mallInfo.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-violet-400 flex-shrink-0" />
                <span>{mallInfo.openTime}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 {mallInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-violet-400 transition-colors">
                Chính sách bảo mật
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-violet-400 transition-colors">
                Điều khoản sử dụng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
