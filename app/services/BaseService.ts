
export interface FetchOptions {
    params?: Record<string, any>
    body?: any
    headers?: Record<string, string>
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    retry?: boolean // để tránh loop khi refresh fail
    auth?: boolean // để xác định có cần thêm token hay không
}


export default class BaseService {
    protected baseUrl: string = 'https://api-tapmed.sse.net.vn/api/';
    protected defaultHeaders: Record<string, string>
    private NAME_TOKEN_IN_COOKIE: string = 'tapmed_token_access';
    constructor(endpoint: string) {
        this.baseUrl += endpoint;
        this.defaultHeaders = {
            "api-sse-code": "e0cc6288e60584582eb706fd6c2612e1"
        }
    }
    /**
     * Get the full URL for a specific endpoint path
     * @param path endpoint path
     * @returns full URL
     */
    protected getFullUrl(path: string = ''): string {
        return `${this.baseUrl}${path}`;
    }

    protected async request<T = any>(
        endpoint: string,
        options: FetchOptions = {}
    ): Promise<T> {
        try {
            const { method = 'GET', params, body, headers, auth } = options
            if(auth){
               const token = useCookie(this.NAME_TOKEN_IN_COOKIE).value;
               if(token){
                   this.defaultHeaders['Authorization'] = `Bearer ${token}`;
                }
            }
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

    protected get<T = any>(endpoint: string, params?: Record<string, any>, auth: boolean = false) {
        return this.request<T>(endpoint, { method: 'GET', params, auth })
    }

    protected post<T = any>(endpoint: string, body?: any, params?: Record<string, any>, auth: boolean = false) {
        return this.request<T>(endpoint, { method: 'POST', body, params, auth })
    }

    protected put<T = any>(endpoint: string, body?: any, params?: Record<string, any>, auth: boolean = false) {
        return this.request<T>(endpoint, { method: 'PUT', body, params, auth })
    }

    protected patch<T = any>(endpoint: string, body?: any, params?: Record<string, any>, auth: boolean = false) {
        return this.request<T>(endpoint, { method: 'PATCH', body, params, auth })
    }

    protected delete<T = any>(endpoint: string, params?: Record<string, any>, auth: boolean = false) {
        return this.request<T>(endpoint, { method: 'DELETE', params, auth })
    }
}