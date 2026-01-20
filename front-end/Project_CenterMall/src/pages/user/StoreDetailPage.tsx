import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import { stores } from '../../data/mockData';
import { StoreCard } from '../../components/common/StoreCard';

export function StoreDetailPage() {
  const { id } = useParams();
  const store = stores.find((s) => s.id === id);

  if (!store) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Không tìm thấy cửa hàng</h1>
          <Link
            to="/stores"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại danh sách
          </Link>
        </div>
      </div>
    );
  }

  const relatedStores = stores
    .filter((s) => s.category === store.category && s.id !== store.id)
    .slice(0, 4);

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-violet-600">
              Trang chủ
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/stores" className="text-gray-500 hover:text-violet-600">
              Cửa hàng
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium">{store.name}</span>
          </nav>
        </div>
      </section>

      {/* Store Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={store.image}
                alt={store.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                  {store.category}
                </span>
              </div>
              {store.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-sm font-medium text-white">
                    Nổi bật
                  </span>
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {store.name}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {store.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Vị trí</div>
                    <div className="text-gray-900 font-medium">Tầng {store.floor}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Giờ hoạt động</div>
                    <div className="text-gray-900 font-medium">{store.openTime} - {store.closeTime}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Hotline</div>
                    <div className="text-gray-900 font-medium">{store.phone}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${store.phone}`}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-5 h-5" />
                  Gọi ngay
                </a>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Xem bản đồ
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Stores */}
      {relatedStores.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Cửa Hàng Liên Quan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedStores.map((relatedStore) => (
                <StoreCard key={relatedStore.id} store={relatedStore} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
