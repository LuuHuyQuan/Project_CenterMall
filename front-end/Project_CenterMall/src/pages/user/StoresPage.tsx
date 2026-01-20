import { useState, useMemo } from 'react';
import { Search, Filter, MapPin, X } from 'lucide-react';
import { StoreCard } from '../../components/common/StoreCard';
import { stores, categories } from '../../data/mockData';

export function StoresPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const floors = [1, 2, 3, 4, 5];

  const filteredStores = useMemo(() => {
    return stores.filter((store) => {
      const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        store.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || store.category === selectedCategory;
      const matchesFloor = !selectedFloor || store.floor === selectedFloor;
      return matchesSearch && matchesCategory && matchesFloor;
    });
  }, [searchQuery, selectedCategory, selectedFloor]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedFloor(null);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedFloor;

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Danh Sách Cửa Hàng
          </h1>
          <p className="text-violet-100 max-w-2xl mx-auto">
            Khám phá hơn 200 cửa hàng với đa dạng ngành hàng tại CenterMall
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Tìm kiếm cửa hàng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500/20 transition-all"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Bộ lọc
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-violet-500 focus:outline-none transition-all cursor-pointer"
              >
                <option value="">Tất cả danh mục</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>

              {/* Floor Filter */}
              <select
                value={selectedFloor || ''}
                onChange={(e) => setSelectedFloor(e.target.value ? Number(e.target.value) : null)}
                className="px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-violet-500 focus:outline-none transition-all cursor-pointer"
              >
                <option value="">Tất cả tầng</option>
                {floors.map((floor) => (
                  <option key={floor} value={floor}>
                    Tầng {floor}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4" />
                  Xóa bộ lọc
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-xl space-y-4">
              <select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-violet-500 focus:outline-none transition-all"
              >
                <option value="">Tất cả danh mục</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedFloor || ''}
                onChange={(e) => setSelectedFloor(e.target.value ? Number(e.target.value) : null)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-violet-500 focus:outline-none transition-all"
              >
                <option value="">Tất cả tầng</option>
                {floors.map((floor) => (
                  <option key={floor} value={floor}>
                    Tầng {floor}
                  </option>
                ))}
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full flex items-center justify-center gap-1 px-4 py-3 text-sm text-red-600 bg-red-50 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4" />
                  Xóa bộ lọc
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-600">
              Tìm thấy <span className="font-semibold text-gray-900">{filteredStores.length}</span> cửa hàng
            </p>
          </div>

          {filteredStores.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStores.map((store) => (
                <StoreCard key={store.id} store={store} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Không tìm thấy cửa hàng
              </h3>
              <p className="text-gray-500 mb-6">
                Thử thay đổi từ khóa hoặc bộ lọc để tìm kiếm
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-violet-600 text-white font-medium rounded-full hover:bg-violet-700 transition-colors"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
