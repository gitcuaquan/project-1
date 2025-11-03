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
    // Số lượng tạm thêm vào giỏ hàng [ chỉ ở client ]
    quantity?: number;
}
