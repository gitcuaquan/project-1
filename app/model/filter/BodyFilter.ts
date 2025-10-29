import { FilterItem } from './FilterItem';

/**
 * Lớp mô tả cấu trúc của một yêu cầu lọc dữ liệu với các thuộc tính cần thiết để thực hiện việc lọc, sắp xếp và phân trang.
 * @param T - Kiểu dữ liệu của đối tượng mà bộ lọc sẽ áp dụng.
 * @property filter - Mảng các mục lọc để áp dụng cho dữ liệu.
 * @property order - Mảng các chuỗi xác định thứ tự sắp xếp của dữ liệu.
 * @property pageIndex - Chỉ số trang hiện tại (bắt đầu từ 1).
 * @property pageSize - Số lượng mục trên mỗi trang.
 */
export class BodyFilter<T = any> {
    filters: FilterItem<T>[];
    order: string[];
    pageIndex: number;
    pageSize: number;
    constructor(init: Partial<BodyFilter<T>>) {
        this.filters = init.filters || [];
        this.order = init.order || [];
        this.pageIndex = init.pageIndex || 1;
        this.pageSize = init.pageSize || 10;
    }
    push(filterItem: FilterItem<T>) {
        this.filters.push(filterItem);
    }
}
