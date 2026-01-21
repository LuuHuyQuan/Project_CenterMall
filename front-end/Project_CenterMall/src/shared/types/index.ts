/**
 * Global TypeScript Types and Interfaces
 * Centralized type definitions for the entire application
 */

// ============================================
// Store Types
// ============================================

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

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// ============================================
// Event Types
// ============================================

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  startDate: string;
  endDate: string;
  type: 'promotion' | 'event';
}

// ============================================
// Mall Information Types
// ============================================

export interface MallInfo {
  name: string;
  slogan: string;
  address: string;
  phone: string;
  email: string;
  openTime: string;
  totalFloors: number;
  totalStores: number;
  parkingSpaces: number;
  socialMedia: {
    facebook: string;
    instagram: string;
    youtube: string;
  };
}

// ============================================
// User & Auth Types
// ============================================

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

// ============================================
// API Response Types
// ============================================

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code: string;
  details?: unknown;
}

// ============================================
// Filter & Search Types
// ============================================

export interface StoreFilters {
  category?: string;
  floor?: number;
  search?: string;
  featured?: boolean;
}

export interface EventFilters {
  type?: 'promotion' | 'event';
  startDate?: string;
  endDate?: string;
}

// ============================================
// Common UI Types
// ============================================

export interface SelectOption {
  label: string;
  value: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
