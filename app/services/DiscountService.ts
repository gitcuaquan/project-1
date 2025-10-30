import BaseService from "./BaseService";

export default class DiscountService extends BaseService {
    constructor() {
        super("DiscountTapmed");
    }
    getListDiscount(params: any): Promise<any> {
        return this.get("/list", { method: "GET", params });
    }
    findDiscountByCode(filter: any): Promise<any> {
        return this.get(`/search`, { method: "POST", body: JSON.stringify(filter) });
    }
}