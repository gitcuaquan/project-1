// Response
export { BaseResponse, type Pagination } from './http/index';

// Customer
export { Customer } from './customer/index';

// Filter
export { OperatorType, FilterItem, BodyFilter } from './filter/index';

// Item
export type { ITemsTapmed, BaseParameters, TapmedDiscount } from './item/index';

// Item model
export { Item } from './Item';

export namespace ProjectConfig {
  export interface BreadcrumbItem {
    label: string;
    to?: string;
  }
  export interface CitySetting {
    code: string;
    name: string;
  }
  export interface DistrictSetting {
    parent: string;
    name: string;
  }
}

