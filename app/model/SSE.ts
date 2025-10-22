export class BaseResponse<T> {
    statusCode: number;
    isSucceeded: boolean;
    message: string;
    data: {
        totalCount?: number;
        pageIndex?: number;
        pageSize?: number;
        items?: T[];
    };
    constructor(init: Partial<BaseResponse<T>>) {
        this.statusCode = init.statusCode || 400;
        this.isSucceeded = init.isSucceeded || false;
        this.message = init.message || '';
        this.data = init.data || {};
    }
    // lay danh sach items
    get getData(){
        return this.data.items || [];
    }

    get pagination(){
        return {
            totalCount: this.data.totalCount || 0,
            pageIndex: this.data.pageIndex || 0,
            pageSize: this.data.pageSize || 0,
        }
    }
};

export type ITemsTapmed = {
    ma_vt: string;
    ten_vt: string;
    dvt: string;
    ma_nt?: string;
    gia_nt2: number;
    gia2: number;
    ma_gia?: string;
    ngay_ban?: string;
}

export type BaseParameters = {
    PageIndex?: number;
    PageSize?: number;
    search?: string;
}