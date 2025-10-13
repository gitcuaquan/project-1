// /services/BaseService.ts
import { $fetch } from 'ofetch'

export interface FetchOptions {
  params?: Record<string, any>
  body?: any
  headers?: Record<string, string>
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  retry?: boolean // để tránh loop khi refresh fail
}

export class BaseService {
  protected baseUrl: string
  protected defaultHeaders: Record<string, string>

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  protected async request<T = any>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    try {
      const { method = 'GET', params, body, headers } = options

      return await $fetch<T>(`${this.baseUrl}${endpoint}`, {
        method,
        params,
        body,
        headers: {
          ...this.defaultHeaders,
          ...headers,
        },
      })
    } catch (error: any) {
      console.error(`[BaseService Error]:`, error)
      throw error
    }
  }

  protected get<T = any>(endpoint: string, params?: Record<string, any>) {
    return this.request<T>(endpoint, { method: 'GET', params })
  }

  protected post<T = any>(endpoint: string, body?: any, params?: Record<string, any>) {
    return this.request<T>(endpoint, { method: 'POST', body, params })
  }

  protected put<T = any>(endpoint: string, body?: any, params?: Record<string, any>) {
    return this.request<T>(endpoint, { method: 'PUT', body, params })
  }

  protected patch<T = any>(endpoint: string, body?: any, params?: Record<string, any>) {
    return this.request<T>(endpoint, { method: 'PATCH', body, params })
  }

  protected delete<T = any>(endpoint: string, params?: Record<string, any>) {
    return this.request<T>(endpoint, { method: 'DELETE', params })
  }
}
