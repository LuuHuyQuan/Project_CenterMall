/**
 * API Client
 * Centralized HTTP client with interceptors for requests/responses
 */

import { apiConfig } from '@/shared/config';
import { STORAGE_KEYS, ERROR_MESSAGES } from '@/shared/constants';
import type { ApiError, ApiResponse } from '@/shared/types';

// ============================================
// API Client Class
// ============================================

class ApiClient {
  private baseUrl: string;
  private timeout: number;

  constructor() {
    this.baseUrl = apiConfig.baseUrl;
    this.timeout = apiConfig.timeout;
  }

  /**
   * Get authentication token from localStorage
   */
  private getAuthToken(): string | null {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  }

  /**
   * Build headers for request
   */
  private buildHeaders(customHeaders?: HeadersInit): HeadersInit {
    const headers: HeadersInit = {
      ...apiConfig.headers,
      ...customHeaders,
    };

    const token = this.getAuthToken();
    if (token) {
      (headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
    }

    return headers;
  }

  /**
   * Handle API errors
   */
  private handleError(error: unknown): never {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        throw new Error(ERROR_MESSAGES.TIMEOUT);
      }
      throw error;
    }
    throw new Error(ERROR_MESSAGES.SERVER_ERROR);
  }

  /**
   * Generic fetch wrapper with timeout
   */
  private async fetchWithTimeout(
    url: string,
    options: RequestInit = {}
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw this.handleError(error);
    }
  }

  /**
   * Process response
   */
  private async processResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      let errorMessage = ERROR_MESSAGES.SERVER_ERROR;

      switch (response.status) {
        case 401:
          errorMessage = ERROR_MESSAGES.UNAUTHORIZED;
          // Clear auth token on 401
          localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
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

      // Try to parse error response
      try {
        const errorData = await response.json();
        const apiError: ApiError = {
          message: errorData.message || errorMessage,
          code: errorData.code || `HTTP_${response.status}`,
          details: errorData.details,
        };
        throw apiError;
      } catch {
        throw new Error(errorMessage);
      }
    }

    return response.json();
  }

  /**
   * GET request
   */
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'GET',
      headers: this.buildHeaders(options?.headers),
    });
    return this.processResponse<T>(response);
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'POST',
      headers: this.buildHeaders(options?.headers),
      body: JSON.stringify(data),
    });
    return this.processResponse<T>(response);
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'PUT',
      headers: this.buildHeaders(options?.headers),
      body: JSON.stringify(data),
    });
    return this.processResponse<T>(response);
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestInit
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'PATCH',
      headers: this.buildHeaders(options?.headers),
      body: JSON.stringify(data),
    });
    return this.processResponse<T>(response);
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'DELETE',
      headers: this.buildHeaders(options?.headers),
    });
    return this.processResponse<T>(response);
  }
}

// ============================================
// Export singleton instance
// ============================================

export const apiClient = new ApiClient();

// Export default for convenience
export default apiClient;
