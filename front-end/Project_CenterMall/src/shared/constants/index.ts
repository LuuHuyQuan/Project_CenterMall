/**
 * Application Constants
 * Centralized constants for routes, API endpoints, and other app-wide values
 */

// ============================================
// Route Paths
// ============================================

export const ROUTES = {
  HOME: '/',

  // Store routes
  STORES: '/stores',
  STORE_DETAIL: '/stores/:id',

  // Event routes
  EVENTS: '/events',

  // Static pages
  ABOUT: '/about',
  CONTACT: '/contact',

  // Admin routes
  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin',
    STORES: '/admin/stores',
    EVENTS: '/admin/events',
  },

  // Auth routes
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    FORGOT_PASSWORD: '/auth/forgot-password',
  },

  // Error pages
  NOT_FOUND: '*',
} as const;

// ============================================
// API Endpoints
// ============================================

export const API_ENDPOINTS = {
  // Stores
  STORES: '/stores',
  STORE_BY_ID: (id: string) => `/stores/${id}`,

  // Events
  EVENTS: '/events',
  EVENT_BY_ID: (id: string) => `/events/${id}`,

  // Categories
  CATEGORIES: '/categories',

  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REGISTER: '/auth/register',
    REFRESH: '/auth/refresh',
    ME: '/auth/me',
  },

  // Admin
  ADMIN: {
    STATS: '/admin/stats',
    STORES: '/admin/stores',
    EVENTS: '/admin/events',
  },
} as const;

// ============================================
// Error Messages
// ============================================

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối internet.',
  UNAUTHORIZED: 'Bạn không có quyền truy cập. Vui lòng đăng nhập.',
  FORBIDDEN: 'Bạn không có quyền thực hiện hành động này.',
  NOT_FOUND: 'Không tìm thấy tài nguyên yêu cầu.',
  SERVER_ERROR: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.',
  VALIDATION_ERROR: 'Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.',
  TIMEOUT: 'Yêu cầu hết thời gian chờ. Vui lòng thử lại.',
} as const;

// ============================================
// Success Messages
// ============================================

export const SUCCESS_MESSAGES = {
  STORE_CREATED: 'Tạo cửa hàng thành công!',
  STORE_UPDATED: 'Cập nhật cửa hàng thành công!',
  STORE_DELETED: 'Xóa cửa hàng thành công!',
  EVENT_CREATED: 'Tạo sự kiện thành công!',
  EVENT_UPDATED: 'Cập nhật sự kiện thành công!',
  EVENT_DELETED: 'Xóa sự kiện thành công!',
  LOGIN_SUCCESS: 'Đăng nhập thành công!',
  LOGOUT_SUCCESS: 'Đăng xuất thành công!',
} as const;

// ============================================
// UI Constants
// ============================================

export const UI_CONSTANTS = {
  // Breakpoints (matching Tailwind)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },

  // Timings
  TOAST_DURATION: 3000,
  DEBOUNCE_DELAY: 300,
  ANIMATION_DURATION: 200,

  // Limits
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  MAX_IMAGES: 10,

  // Floor numbers for mall
  FLOORS: [1, 2, 3, 4, 5],
} as const;

// ============================================
// Local Storage Keys
// ============================================

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'centermall_auth_token',
  REFRESH_TOKEN: 'centermall_refresh_token',
  USER_DATA: 'centermall_user_data',
  THEME: 'centermall_theme',
  LANGUAGE: 'centermall_language',
} as const;

// ============================================
// Query Keys (for React Query)
// ============================================

export const QUERY_KEYS = {
  STORES: 'stores',
  STORE_DETAIL: 'store-detail',
  EVENTS: 'events',
  EVENT_DETAIL: 'event-detail',
  CATEGORIES: 'categories',
  USER: 'user',
  ADMIN_STATS: 'admin-stats',
} as const;
