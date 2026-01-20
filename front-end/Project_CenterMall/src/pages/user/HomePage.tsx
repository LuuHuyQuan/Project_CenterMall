import { Link } from 'react-router-dom';
import { ArrowRight, Store, Building2, Car, Star } from 'lucide-react';
import { HeroBanner } from '../../components/common/HeroBanner';
import { StoreCard } from '../../components/common/StoreCard';
import { EventCard } from '../../components/common/EventCard';
import { stores, events, categories, mallInfo } from '../../data/mockData';

export function HomePage() {
  const featuredStores = stores.filter(store => store.featured).slice(0, 4);
  const latestEvents = events.slice(0, 3);

  const stats = [
    { icon: Store, value: `${mallInfo.totalStores}+`, label: 'Cửa hàng' },
    { icon: Building2, value: mallInfo.totalFloors, label: 'Tầng' },
    { icon: Car, value: `${mallInfo.parkingSpaces}+`, label: 'Chỗ đỗ xe' },
    { icon: Star, value: '4.9', label: 'Đánh giá' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroBanner />

      {/* Stats Section */}
      <section className="py-16 -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-violet-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Khám Phá Theo Danh Mục
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Tìm kiếm cửa hàng yêu thích theo danh mục sản phẩm
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/stores?category=${category.name}`}
                className="group bg-white rounded-2xl p-4 text-center shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition-colors">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Stores Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Cửa Hàng Nổi Bật
              </h2>
              <p className="text-gray-500">
                Khám phá những cửa hàng được yêu thích nhất tại CenterMall
              </p>
            </div>
            <Link
              to="/stores"
              className="hidden sm:flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              Xem tất cả
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/stores"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-full hover:bg-violet-700 transition-colors"
            >
              Xem tất cả cửa hàng
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-gradient-to-br from-violet-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sự Kiện & Khuyến Mãi
              </h2>
              <p className="text-gray-500">
                Đừng bỏ lỡ những ưu đãi hấp dẫn đang diễn ra
              </p>
            </div>
            <Link
              to="/events"
              className="hidden sm:flex items-center gap-2 text-violet-600 font-medium hover:text-violet-700 transition-colors"
            >
              Xem tất cả
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/events"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-medium rounded-full hover:bg-violet-700 transition-colors"
            >
              Xem tất cả sự kiện
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <div className="relative py-16 px-8 sm:px-16 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Trở thành đối tác của chúng tôi
              </h2>
              <p className="text-violet-100 max-w-2xl mx-auto mb-8">
                Bạn muốn mở cửa hàng tại CenterMall? Liên hệ ngay với chúng tôi để nhận tư vấn và ưu đãi đặc biệt.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-violet-600 font-semibold rounded-full hover:bg-violet-50 transition-all shadow-lg"
              >
                Liên hệ ngay
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
