import { AuthService } from "../core/AuthService"

export class ProductService extends AuthService {
    constructor() {
        super('/api/products')
    }
    /**
     * Lấy danh sách sản phẩm công khai
     * @returns Danh sách sản phẩm công khai (không cần auth)
     */
    async getPublicProducts(bodyFilter: any) {
        return await this.get('/public', { auth: false, body: bodyFilter })
    }
    /**
     * Lấy chi tiết sản phẩm công khai
     * @param id ID sản phẩm
     * @returns Chi tiết sản phẩm công khai (không cần auth)
     */
    async getPublicProductById(id: string) {
        return await this.get(`/public/${id}`, { auth: false })
    }
}