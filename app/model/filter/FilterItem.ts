import { OperatorType } from './OperatorType';

/**
 * Lớp mô tả một mục lọc với các thuộc tính cần thiết để thực hiện các phép lọc dữ liệu.
 * @param T - Kiểu dữ liệu của đối tượng mà bộ lọc sẽ áp dụng.
 * @property filterValue - Tên thuộc tính hoặc khóa của đối tượng mà bộ lọc sẽ áp dụng.
 * @property operatorType - Loại toán tử lọc được sử dụng (ví dụ: bằng, chứa, lớn hơn, v.v.).
 * @property valueSearch - Giá trị được sử dụng để so sánh với thuộc tính được chỉ định.
 */
export class FilterItem <T = any> {
    filterValue: keyof T | string;
    operatorType: OperatorType;
    valueSearch: string;
    constructor(init: Partial<FilterItem<T>>) {
        this.filterValue = init.filterValue || '';
        this.operatorType = init.operatorType || OperatorType.Contains;
        this.valueSearch = init.valueSearch || '';
    } 
}
