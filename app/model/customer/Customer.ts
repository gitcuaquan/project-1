export class Customer {
    FullName: string;
    //Chứng chỉ hành nghề dược
    Certificate1: string | File;
    //Giấy chứng nhận đăng ký kinh doanh
    Certificate2: string | File;
    //Giấy chứng nhận đủ điều kiện kinh doanh
    Certificate3: string | File;
    Cccd: string;
    NameCoSo: string;
    PhoneNumber: string;
    Password: string;
    NameProvince: string;
    CodeDistrict: string;
    NameDistrict: string;
    Address: string;
    Certificates: string[];
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
