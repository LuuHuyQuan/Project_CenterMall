import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { Event } from '../../data/mockData';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${event.type === 'promotion'
              ? 'bg-gradient-to-r from-rose-500 to-pink-500'
              : 'bg-gradient-to-r from-emerald-500 to-teal-500'
            }`}>
            {event.type === 'promotion' ? 'Khuyến mãi' : 'Sự kiện'}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">
            {formatDate(event.startDate)} - {formatDate(event.endDate)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-600 transition-colors mb-2 line-clamp-2">
          {event.title}
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2 mb-4">
          {event.description}
        </p>

        <Link
          to={`/events/${event.id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700 transition-colors"
        >
          Xem chi tiết
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
