import { BaseResponse, type BaseParameters, type ITemsTapmed } from "~/model/SSE";
import BaseService from "./BaseService";

export class ItemService extends BaseService {
    constructor() {
        super('ItemsTapmed');
    }

    async getItems(params?: BaseParameters): Promise<BaseResponse<ITemsTapmed[]>> {
        const resp = await this.get('', params,);
        return new BaseResponse<ITemsTapmed[]>(resp);
    }

}