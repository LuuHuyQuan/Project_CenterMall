import { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import { EventCard } from '../../components/common/EventCard';
import { events } from '../../data/mockData';

export function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'promotion' | 'event'>('all');

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true;
    return event.type === filter;
  });

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Sự Kiện & Khuyến Mãi
          </h1>
          <p className="text-violet-100 max-w-2xl mx-auto">
            Cập nhật những ưu đãi hấp dẫn và sự kiện đặc biệt tại CenterMall
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${filter === 'all'
                  ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              Tất cả
            </button>
            <button
              onClick={() => setFilter('promotion')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${filter === 'promotion'
                  ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Tag className="w-4 h-4" />
              Khuyến mãi
            </button>
            <button
              onClick={() => setFilter('event')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${filter === 'event'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Sự kiện
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-200 flex items-center justify-center">
                <Calendar className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chưa có sự kiện nào
              </h3>
              <p className="text-gray-500">
                Vui lòng quay lại sau để cập nhật những sự kiện mới nhất
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
