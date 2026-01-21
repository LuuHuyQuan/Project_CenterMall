/**
 * API Client Types
 * Local types specific to the API client implementation
 */

export interface ApiClientConfig {
  baseUrl: string;
  timeout: number;
  headers: HeadersInit;
}

export interface RequestOptions extends RequestInit {
  skipAuth?: boolean;
}
