/**
 * HTTP Client
 * Core HTTP client with timeout support and request methods
 */

import { apiConfig } from '@/shared/config';
import { buildRequestHeaders, processResponse, handleError } from './interceptors';
import type { ApiClientConfig, RequestOptions } from './types';

// ============================================
// HTTP Client Class
// ============================================

class HttpClient {
  private config: ApiClientConfig;

  constructor(config?: Partial<ApiClientConfig>) {
    this.config = {
      baseUrl: config?.baseUrl || apiConfig.baseUrl,
      timeout: config?.timeout || apiConfig.timeout,
      headers: config?.headers || apiConfig.headers,
    };
  }

  /**
   * Generic fetch wrapper with timeout support
   */
  private async fetchWithTimeout(
    url: string,
    options: RequestOptions = {}
  ): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw handleError(error);
    }
  }

  /**
   * Build full URL from endpoint and optional query params
   */
  private buildUrl(endpoint: string, params?: Record<string, string | number | boolean>): string {
    const url = new URL(`${this.config.baseUrl}${endpoint}`);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }
    return url.toString();
  }

  /**
   * GET request
   */
  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>,
    options?: RequestOptions
  ): Promise<T> {
    const url = this.buildUrl(endpoint, params);
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'GET',
      headers: buildRequestHeaders(options?.headers, options?.skipAuth),
    });
    return processResponse<T>(response);
  }

  /**
   * POST request
   */
  async post<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const url = this.buildUrl(endpoint);
    const isFormData = data instanceof FormData;

    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'POST',
      headers: buildRequestHeaders(
        {
          ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
          ...options?.headers,
        },
        options?.skipAuth
      ),
      body: isFormData ? data : JSON.stringify(data),
    });
    return processResponse<T>(response);
  }

  /**
   * PUT request
   */
  async put<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const url = this.buildUrl(endpoint);
    const isFormData = data instanceof FormData;

    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'PUT',
      headers: buildRequestHeaders(
        {
          ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
          ...options?.headers,
        },
        options?.skipAuth
      ),
      body: isFormData ? data : JSON.stringify(data),
    });
    return processResponse<T>(response);
  }

  /**
   * PATCH request
   */
  async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: RequestOptions
  ): Promise<T> {
    const url = this.buildUrl(endpoint);
    const isFormData = data instanceof FormData;

    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'PATCH',
      headers: buildRequestHeaders(
        {
          ...(isFormData ? {} : { 'Content-Type': 'application/json' }),
          ...options?.headers,
        },
        options?.skipAuth
      ),
      body: isFormData ? data : JSON.stringify(data),
    });
    return processResponse<T>(response);
  }

  /**
   * DELETE request
   */
  async delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
    const url = this.buildUrl(endpoint);
    const response = await this.fetchWithTimeout(url, {
      ...options,
      method: 'DELETE',
      headers: buildRequestHeaders(options?.headers, options?.skipAuth),
    });
    return processResponse<T>(response);
  }
}

// ============================================
// Export HttpClient class and instance
// ============================================

export { HttpClient };
export const httpClient = new HttpClient();
