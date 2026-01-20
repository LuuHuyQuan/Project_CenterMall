import { Building2, Users, Award, Target } from 'lucide-react';
import { mallInfo } from '../../data/mockData';

export function AboutPage() {
  const features = [
    {
      icon: Building2,
      title: 'Không gian hiện đại',
      description: 'Thiết kế kiến trúc đẳng cấp với 5 tầng mua sắm rộng rãi, thoáng mát',
    },
    {
      icon: Users,
      title: 'Đa dạng cửa hàng',
      description: 'Hơn 200 thương hiệu từ thời trang, ẩm thực đến giải trí và làm đẹp',
    },
    {
      icon: Award,
      title: 'Dịch vụ cao cấp',
      description: 'Đội ngũ nhân viên chuyên nghiệp, tận tâm phục vụ khách hàng 24/7',
    },
    {
      icon: Target,
      title: 'Trải nghiệm toàn diện',
      description: 'Kết hợp mua sắm, ẩm thực, giải trí trong một địa điểm duy nhất',
    },
  ];

  const timeline = [
    { year: '2020', event: 'Khởi công xây dựng CenterMall' },
    { year: '2022', event: 'Khánh thành và đón khách hàng đầu tiên' },
    { year: '2023', event: 'Mở rộng thêm 50 cửa hàng mới' },
    { year: '2024', event: 'Đón 10 triệu lượt khách tham quan' },
    { year: '2026', event: 'Trở thành trung tâm thương mại hàng đầu khu vực' },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-300/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Về {mallInfo.name}
          </h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto leading-relaxed">
            {mallInfo.slogan}. Chúng tôi tự hào mang đến trải nghiệm mua sắm và giải trí
            đẳng cấp nhất cho khách hàng.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">
                {mallInfo.totalStores}+
              </div>
              <div className="text-gray-500">Cửa hàng</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">
                {mallInfo.totalFloors}
              </div>
              <div className="text-gray-500">Tầng</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">
                {mallInfo.parkingSpaces}+
              </div>
              <div className="text-gray-500">Chỗ đỗ xe</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center">
              <div className="text-4xl font-bold text-violet-600 mb-2">
                10M+
              </div>
              <div className="text-gray-500">Lượt khách</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tại Sao Chọn CenterMall?
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Chúng tôi không ngừng nỗ lực để mang đến trải nghiệm tốt nhất cho khách hàng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-violet-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Hành Trình Phát Triển
            </h2>
            <p className="text-gray-500">
              Những cột mốc quan trọng trong lịch sử CenterMall
            </p>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-600 to-indigo-600 hidden lg:block" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow inline-block">
                      <div className="text-2xl font-bold text-violet-600 mb-2">
                        {item.year}
                      </div>
                      <p className="text-gray-700">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden lg:flex w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 items-center justify-center flex-shrink-0 z-10">
                    <div className="w-4 h-4 rounded-full bg-white" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floor Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sơ Đồ Các Tầng
            </h2>
            <p className="text-gray-500">
              Khám phá không gian mua sắm tại từng tầng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[5, 4, 3, 2, 1].map((floor) => (
              <div
                key={floor}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="text-3xl font-bold text-violet-600 mb-3">
                  Tầng {floor}
                </div>
                <p className="text-gray-500 text-sm">
                  {floor === 5 && 'Rạp chiếu phim, Khu vui chơi'}
                  {floor === 4 && 'Nhà sách, Văn phòng phẩm'}
                  {floor === 3 && 'Điện tử, Đồ gia dụng'}
                  {floor === 2 && 'Ẩm thực, Thể thao'}
                  {floor === 1 && 'Thời trang, Làm đẹp'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
