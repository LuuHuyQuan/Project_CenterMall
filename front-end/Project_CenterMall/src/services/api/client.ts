/**
 * API Client Bridge
 * Maintains backward compatibility for existing imports
 * by re-exporting the modularized API client.
 */

import { httpClient } from './http-client';

// Export singleton instance as 'apiClient' for backward compatibility
export const apiClient = httpClient;

// Export default for convenience
export default httpClient;

// Re-export other components from the folder index
export * from './types';
export * from './interceptors';
export * from './http-client';
