import { BaseResponse, BodyFilter, type BaseParameters, type ITemsTapmed } from "~/model";
import BaseService from "./BaseService";

export default class ItemService extends BaseService {
    constructor() {
        super('ItemsTapmed');
    }
    /**
     * Lấy danh sách items với các tham số tùy chọn.
     * @param params 
     * @returns 
     */
    async getItems(params?: BaseParameters): Promise<BaseResponse<ITemsTapmed>> {
        const resp = await this.get('', params);
        return new BaseResponse<ITemsTapmed>(resp);
    }
    /**
     * Lấy thông tin chi tiết của một item theo ID.
     * @param id 
     * @returns 
     */
    async getItemById(id: string): Promise<ITemsTapmed | null> {
        const resp = await this.get(`/details/items`,{
            ma_vt: id
        });
        return resp.data ? (resp.data as ITemsTapmed) : null;
    }
    
    async getNhomVatTu<T>(filters:BodyFilter) {
        const resp = await this.post('/list-nhvt', JSON.stringify(filters));
        return new BaseResponse<T>(resp);
    }

    async getNhaSX<T>(filters:BodyFilter) {
        const resp = await this.post('/list-nsx', JSON.stringify(filters));
        return new BaseResponse<T>(resp);
    }
}