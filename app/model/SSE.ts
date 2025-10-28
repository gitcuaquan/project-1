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

export type Pagination = {
    totalCount: number;
    pageIndex: number;
    pageSize: number;
}

export type ITemsTapmed = {
    ma_vt: string;
    ten_vt: string;
    dvt: string;
    ma_nt?: string;
    gia_nt2: number;
    gia2: number;
    ma_gia?: string;
    ngay_ban?: string;
    image_urls?: { originalName: string, url: string }[];
}

export type BaseParameters = {
    PageIndex?: number;
    PageSize?: number;
    search?: string;
}

export class Customer{
    FullName : string;
     //Chứng chỉ hành nghề dược
    Certificate1: string | File;
    //Giấy chứng nhận đăng ký kinh doanh
    Certificate2: string | File;
    //Giấy chứng nhận đủ điều kiện kinh doanh
    Certificate3: string | File;
    Cccd : string;
    NameCoSo : string;
    PhoneNumber : string;
    Password : string;
    NameProvince : string;
    CodeDistrict : string;
    NameDistrict : string;
    Address : string;
    Certificates : string[];
    constructor(init: Partial<Customer>) {
        this.FullName = init.FullName || '';
        this.Cccd = init.Cccd || '';
        this.NameCoSo = init.NameCoSo || '';
        this.PhoneNumber = init.PhoneNumber || '';
        this.Password = init.Password || '';
        this.NameProvince = init.NameProvince || '';
        this.CodeDistrict = init.CodeDistrict || '';
        this.NameDistrict = init.NameDistrict || '';
        this.Address = init.Address || '';
        this.Certificates = init.Certificates || [];
        this.Certificate1 = init.Certificate1 || '';
        this.Certificate2 = init.Certificate2 || '';
        this.Certificate3 = init.Certificate3 || '';
    }
}