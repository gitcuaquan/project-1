export namespace Item {

    /**
     * Nhóm 1 ( nguồn gốc )
     * Nhóm 2 ( phân loại thuốc )
     * Nhóm 3 ( phân nhóm thuốc )
     * Nhóm 4 ( công dụng )
     * Nhóm 5 ( quy cách )
     */
    export enum LoaiNhomVatTu {
        NguonGoc = 1,
        PhanLoai = 2,
        PhanNhom = 3,
        CongDung = 4,
        QuyCach = 5
    }
    /**
     * Nhóm vật tư
     */
    export class NhomVatTu {
        loai_nh: LoaiNhomVatTu;
        ma_nh: string;
        ten_nh: string;
        constructor(init: Partial<NhomVatTu>) {
            this.loai_nh = init.loai_nh || LoaiNhomVatTu.NguonGoc;
            this.ma_nh = init.ma_nh || '';
            this.ten_nh = init.ten_nh || '';
        }
    }

    export class NhaSanXuat {
        ma_nsx: string;
        ten_nhasanxuat: string;
        ghi_chu: string;
        ten_khac: string;
        constructor(init: Partial<NhaSanXuat>) {
            this.ma_nsx = init.ma_nsx || '';
            this.ten_nhasanxuat = init.ten_nhasanxuat || '';
            this.ghi_chu = init.ghi_chu || '';
            this.ten_khac = init.ten_khac || '';
        }
    }
}