/**
 * API Interceptors
 * Handles authentication, headers, and error processing
 */

import { apiConfig } from '@/shared/config';
import { STORAGE_KEYS, ERROR_MESSAGES } from '@/shared/constants';
import type { ApiError } from '@/shared/types';
// import type { RequestOptions } from './types'; // Removed unused import

// ============================================
// Authentication
// ============================================

/**
 * Get authentication token from localStorage
 */
export function getAuthToken(): string | null {
  return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
}

/**
 * Remove authentication token from localStorage
 */
export function clearAuthToken(): void {
  localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
}

// ============================================
// Request Interceptor
// ============================================

/**
 * Build headers for request with authentication
 */
export function buildRequestHeaders(customHeaders?: HeadersInit, skipAuth?: boolean): HeadersInit {
  const headers: HeadersInit = {
    ...apiConfig.headers,
    ...customHeaders,
  };

  // Add authentication token if available and not skipped
  if (!skipAuth) {
    const token = getAuthToken();
    if (token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }
  }

  return headers;
}

// ============================================
// Response Interceptor
// ============================================

/**
 * Process response and handle errors
 */
export async function processResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let errorMessage: string = ERROR_MESSAGES.SERVER_ERROR;

    // Map HTTP status codes to error messages
    switch (response.status) {
      case 401:
        errorMessage = ERROR_MESSAGES.UNAUTHORIZED;
        // Clear auth token on 401 Unauthorized
        clearAuthToken();
        break;
      case 403:
        errorMessage = ERROR_MESSAGES.FORBIDDEN;
        break;
      case 404:
        errorMessage = ERROR_MESSAGES.NOT_FOUND;
        break;
      case 422:
        errorMessage = ERROR_MESSAGES.VALIDATION_ERROR;
        break;
    }

    // Try to parse error response from server
    try {
      const errorData = await response.json();
      const apiError: ApiError = {
        message: errorData.message || errorMessage,
        code: errorData.code || `HTTP_${response.status}`,
        details: errorData.details,
      };
      throw apiError;
    } catch (parseError) {
      // If parsing fails, throw generic error
      if ((parseError as ApiError).code) {
        throw parseError; // Re-throw if it's already an ApiError
      }
      throw new Error(errorMessage);
    }
  }

  return response.json();
}

// ============================================
// Error Handler
// ============================================

/**
 * Handle various types of errors
 */
export function handleError(error: unknown): never {
  if (error instanceof Error) {
    if (error.name === 'AbortError') {
      throw new Error(ERROR_MESSAGES.TIMEOUT);
    }
    throw error;
  }
  throw new Error(ERROR_MESSAGES.SERVER_ERROR);
}
