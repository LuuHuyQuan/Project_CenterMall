// Mock data for CenterMall

export interface Store {
  id: string;
  name: string;
  category: string;
  floor: number;
  description: string;
  image: string;
  openTime: string;
  closeTime: string;
  phone: string;
  featured: boolean;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  type: 'promotion' | 'event';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: '1', name: 'Thời trang', icon: '👗' },
  { id: '2', name: 'Ẩm thực', icon: '🍔' },
  { id: '3', name: 'Điện tử', icon: '📱' },
  { id: '4', name: 'Giải trí', icon: '🎮' },
  { id: '5', name: 'Làm đẹp', icon: '💄' },
  { id: '6', name: 'Thể thao', icon: '⚽' },
  { id: '7', name: 'Đồ gia dụng', icon: '🏠' },
  { id: '8', name: 'Sách & Văn phòng phẩm', icon: '📚' },
];

export const stores: Store[] = [
  {
    id: '1',
    name: 'Zara',
    category: 'Thời trang',
    floor: 1,
    description: 'Thương hiệu thời trang nổi tiếng từ Tây Ban Nha với các bộ sưu tập mới nhất.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '22:00',
    phone: '1900 1234',
    featured: true,
  },
  {
    id: '2',
    name: 'Uniqlo',
    category: 'Thời trang',
    floor: 1,
    description: 'Thời trang Nhật Bản với chất lượng cao và giá cả phải chăng.',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '22:00',
    phone: '1900 1235',
    featured: true,
  },
  {
    id: '3',
    name: 'The Coffee House',
    category: 'Ẩm thực',
    floor: 2,
    description: 'Chuỗi cà phê Việt Nam với không gian ấm cúng và đồ uống chất lượng.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
    openTime: '07:00',
    closeTime: '23:00',
    phone: '1900 1236',
    featured: true,
  },
  {
    id: '4',
    name: 'CGV Cinema',
    category: 'Giải trí',
    floor: 5,
    description: 'Rạp chiếu phim hiện đại với hệ thống âm thanh và hình ảnh đỉnh cao.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
    openTime: '08:00',
    closeTime: '24:00',
    phone: '1900 1237',
    featured: true,
  },
  {
    id: '5',
    name: 'Apple Store',
    category: 'Điện tử',
    floor: 3,
    description: 'Trải nghiệm các sản phẩm Apple mới nhất tại cửa hàng chính hãng.',
    image: 'https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '21:00',
    phone: '1900 1238',
    featured: true,
  },
  {
    id: '6',
    name: 'Nike',
    category: 'Thể thao',
    floor: 2,
    description: 'Thương hiệu thể thao hàng đầu thế giới với đầy đủ sản phẩm.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '22:00',
    phone: '1900 1239',
    featured: false,
  },
  {
    id: '7',
    name: 'Starbucks',
    category: 'Ẩm thực',
    floor: 1,
    description: 'Thưởng thức cà phê cao cấp và không gian làm việc thoải mái.',
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=300&fit=crop',
    openTime: '07:00',
    closeTime: '22:00',
    phone: '1900 1240',
    featured: false,
  },
  {
    id: '8',
    name: 'Guardian',
    category: 'Làm đẹp',
    floor: 1,
    description: 'Cửa hàng mỹ phẩm và chăm sóc sức khỏe với đa dạng thương hiệu.',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '22:00',
    phone: '1900 1241',
    featured: false,
  },
  {
    id: '9',
    name: 'MUJI',
    category: 'Đồ gia dụng',
    floor: 3,
    description: 'Sản phẩm gia dụng và lifestyle Nhật Bản với thiết kế tối giản.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
    openTime: '09:00',
    closeTime: '22:00',
    phone: '1900 1242',
    featured: false,
  },
  {
    id: '10',
    name: 'Fahasa',
    category: 'Sách & Văn phòng phẩm',
    floor: 4,
    description: 'Nhà sách lớn nhất Việt Nam với hàng triệu đầu sách.',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=300&fit=crop',
    openTime: '08:00',
    closeTime: '22:00',
    phone: '1900 1243',
    featured: false,
  },
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Giảm Giá Cuối Năm - Lên Đến 70%',
    description: 'Chương trình khuyến mãi lớn nhất năm với hàng nghìn sản phẩm giảm giá đến 70%. Áp dụng cho tất cả cửa hàng thời trang tại CenterMall.',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop',
    startDate: '2026-01-15',
    endDate: '2026-01-31',
    type: 'promotion',
  },
  {
    id: '2',
    title: 'Lễ Hội Ẩm Thực Quốc Tế',
    description: 'Khám phá hơn 50 món ăn từ khắp nơi trên thế giới tại khu ẩm thực. Nhiều hoạt động trải nghiệm và quà tặng hấp dẫn.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
    startDate: '2026-01-20',
    endDate: '2026-01-25',
    type: 'event',
  },
  {
    id: '3',
    title: 'Flash Sale - Chỉ 24 Giờ',
    description: 'Ưu đãi cực shock chỉ trong 24 giờ! Giảm giá đến 50% cho các sản phẩm điện tử và gia dụng.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    startDate: '2026-01-22',
    endDate: '2026-01-22',
    type: 'promotion',
  },
  {
    id: '4',
    title: 'Triển Lãm Nghệ Thuật Đương Đại',
    description: 'Triển lãm nghệ thuật với hơn 100 tác phẩm từ các nghệ sĩ trong nước và quốc tế. Miễn phí vé vào cửa.',
    image: 'https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&h=400&fit=crop',
    startDate: '2026-01-18',
    endDate: '2026-02-15',
    type: 'event',
  },
];

export const mallInfo = {
  name: 'CenterMall',
  slogan: 'Điểm đến mua sắm & giải trí hàng đầu',
  address: '123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh',
  phone: '1900 9999',
  email: 'info@centermall.vn',
  openTime: '09:00 - 22:00',
  totalFloors: 5,
  totalStores: 200,
  parkingSpaces: 2000,
  socialMedia: {
    facebook: 'https://facebook.com/centermall',
    instagram: 'https://instagram.com/centermall',
    youtube: 'https://youtube.com/centermall',
  },
};
