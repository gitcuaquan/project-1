// /services/AuthService.ts
import { BaseService } from './BaseService'
import { useCookie } from '#app' // Nuxt 4 composable
import { ofetch } from 'ofetch'

export interface AuthFetchOptions {
    params?: Record<string, any>
    body?: any
    headers?: Record<string, string>
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    /** Có xác thực không */
    auth?: boolean  
}
export class AuthService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl)
    }

    /**
     * Lấy access token từ cookie (hoặc localStorage tùy Quân Chủ)
     */
    protected getAccessToken(): string | null {
        const token = useCookie('access_token').value
        return token || null
    }

    protected setAccessToken(token: string) {
        useCookie('access_token').value = token
    }

    protected override async request<T = any>(
        endpoint: string,
        options: AuthFetchOptions = {}
    ): Promise<T> {
        const token = this.getAccessToken()
        const isAuth = options.auth !== false // default: true
        try {
            return await ofetch<T>(`${this.baseUrl}${endpoint}`, {
                ...options,
                headers: {
                    ...this.defaultHeaders,
                    ...(isAuth && token ? { Authorization: `Bearer ${token}` } : {}),
                    ...options.headers,
                },
            })
        } catch (error: any) {
            throw error
        }
    }
}
