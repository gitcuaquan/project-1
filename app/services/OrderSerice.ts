import type { TapmedOrder } from "~/model/item/ITemsTapmed";
import BaseService from "./BaseService";

export class OrderService extends BaseService {
    constructor() {
        super('OrderTapmed');
    }
    createOrder(orderData: TapmedOrder) {
        return this.post<TapmedOrder>('/import', JSON.stringify(orderData));
    }
}