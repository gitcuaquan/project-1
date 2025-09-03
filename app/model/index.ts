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
