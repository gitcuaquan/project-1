import type { Customer } from "~/model";
import BaseService from "./BaseService";

export default class AuthService extends BaseService {
    constructor() {
        super("Authentication");
    }
    /**
     * Đăng ký khách hàng
     * @param data 
     * @returns 
     */
    register(data: FormData) {
        return this.request("/RegistrationCustomer", { method: 'POST', body: data });
    }
    /**
     * Đăng nhập khách hàng
     * @param data  
     * @returns 
     */
    login<T>(data: { userName: string; password: string }): Promise<T> {
        return this.request("/CustomerLogin", { method: 'POST', body: data });
    }

}