import type { Customer } from "~/model/SSE";
import BaseService from "./BaseService";

export default class AuthService extends BaseService {
    constructor() {
        super("Authentication");
    }
    register(data: FormData) {
        return this.request("/RegistrationCustomer", { method: 'POST', body: data });
    }
}