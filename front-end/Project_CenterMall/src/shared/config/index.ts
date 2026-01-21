/**
 * Application Configuration
 * Centralized configuration for environment variables and app settings
 */

// Environment variables with fallbacks
const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  isDevelopment: import.meta.env.DEV,
  isProduction: import.meta.env.PROD,
  appName: import.meta.env.VITE_APP_NAME || 'CenterMall',
  appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
};

// API Configuration
export const apiConfig = {
  baseUrl: env.apiUrl,
  timeout: 30000, // 30 seconds
  headers: {
    'Content-Type': 'application/json',
  },
};

// App Configuration
export const appConfig = {
  name: env.appName,
  version: env.appVersion,
  isDevelopment: env.isDevelopment,
  isProduction: env.isProduction,

  // Feature flags
  features: {
    enableAuth: true,
    enableAnalytics: false,
    enableMockData: true, // Use mock data instead of real API
  },

  // Pagination defaults
  pagination: {
    defaultPageSize: 12,
    maxPageSize: 100,
  },

  // Cache settings
  cache: {
    storesCacheDuration: 5 * 60 * 1000, // 5 minutes
    eventsCacheDuration: 10 * 60 * 1000, // 10 minutes
  },
};

// Mall Configuration
export const mallConfig = {
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

export default {
  api: apiConfig,
  app: appConfig,
  mall: mallConfig,
};
