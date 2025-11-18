import { BaseResponse, type BaseParameters, type TapmedDiscount } from "~/model";
import BaseService from "./BaseService";

export default class DiscountService extends BaseService {
    constructor() {
        super("DiscountTapmed");
    }
    async getListDiscount(params: BaseParameters): Promise<any> {
        const respone = await this.get("/", params);
        return new BaseResponse<TapmedDiscount>(respone);
    }
}