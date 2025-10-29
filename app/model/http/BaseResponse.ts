export type Pagination = {
    totalCount: number;
    pageIndex: number;
    pageSize: number;
}

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
    get getData() {
        return this.data.items || [];
    }

    get pagination(): Pagination {
        return {
            totalCount: this.data.totalCount || 0,
            pageIndex: this.data.pageIndex || 0,
            pageSize: this.data.pageSize || 0,
        }
    }
};
