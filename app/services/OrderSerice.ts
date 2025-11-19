import type { TapmedOrder } from "~/model/item/ITemsTapmed";
import BaseService from "./BaseService";
import type { BaseResponseOne } from "~/model/http/BaseResponse";

export class OrderService extends BaseService {
    constructor() {
        super('OrderTapmed');
    }
    createOrder(orderData: TapmedOrder) {
        return this.post('/import', JSON.stringify(orderData));
    }
    async detail(id: string) {
        const res = await this.get<TapmedOrder>(`/${id}`,{
            userId:0
        });
        return  res as BaseResponseOne<TapmedOrder>;
    }
}