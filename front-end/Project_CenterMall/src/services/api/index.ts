/**
 * API Services
 * Central export point for all API-related modules
 */

// Export HTTP Client
export { HttpClient, httpClient } from './http-client';

// Export Interceptors
export {
  getAuthToken,
  clearAuthToken,
  buildRequestHeaders,
  processResponse,
  handleError,
} from './interceptors';

// Export Types
export type { ApiClientConfig, RequestOptions } from './types';

// Export default client for convenience (backward compatibility)
export { httpClient as apiClient } from './http-client';
export { httpClient as default } from './http-client';
