<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row py-3 g-3">
      <div class="col-lg-3 h-100">
        <LayoutAuthSiderbar class="sticky-top" />
      </div>
      <div class="col-lg-9">
        <h6 class="fw-bold text-primary pb-2 d-inline-block text-capitalize">
          Thông tin cá nhân
        </h6>
        <form class="row gy-1 gx-3">
          <div class="col-12 col-md-6">
            <label for="name" class="form-label">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              id="name"
              placeholder="Nhập họ và tên đầy đủ của bạn"
            />
          </div>
          <div class="col-md-6 col-12">
            <label for="address" class="form-label">Số căn cước công dân</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              id="address"
              placeholder="Nhập số căn cước công dân"
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="businessName" class="form-label">Tên cơ sở</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              id="businessName"
              placeholder="Nhập tên cơ sở đang kinh doanh"
            />
          </div>

          <div class="col-12 col-md-6">
            <label for="phone" class="form-label">Số điện thoại</label>
            <input
              type="phone"
              class="form-control"
              required
              readonly
              id="phone"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="password" class="form-label">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              required
              readonly
              id="password"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="city" class="form-label">Thành phố</label>
            <SharedAddressCity v-model="citySelect" />
          </div>
          <div class="col-12 col-md-6">
            <label for="ward" class="form-label">Xã phường</label>
            <SharedAddressWard
              :city-code="citySelect?.code"
              v-model="wardSelect"
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="address" class="form-label">Địa chỉ</label>
            <input
              type="text"
              class="form-control"
              required
              readonly
              id="address"
              placeholder="Nhập địa chỉ"
            />
          </div>
        </form>
        <!-- Giấy tờ liên quan -->
        <div class="row justify-content-center mt-2 g-3">
          <div class="col-6 col-md-4">
            <label for="file1" class="form-label">Giấy tờ 1</label>
            <SharedModuleUpload />
          </div>
          <div class="col-6 col-md-4">
            <label for="file2" class="form-label">Giấy tờ 2</label>
            <SharedModuleUpload />
          </div>
          <div class="col-6 col-md-4">
            <label for="file3" class="form-label">Giấy tờ 3</label>
            <SharedModuleUpload />
          </div>
        </div>
        <h6
          class="my-3 fw-bold text-primary pb-2 d-inline-block text-capitalize"
        >
          Nhóm Thuốc Kinh Doanh
        </h6>
        <div class="row gy-2 gx-3">
          <div
            v-for="(column, colIndex) in medicineGroups"
            :key="colIndex"
            class="col-12 col-md-4"
          >
            <div
              v-for="medicine in column"
              :key="medicine.id"
              class="d-flex align-items-start gap-2 mb-2"
            >
              <SquareCheck  v-if="medicine.checked" class="flex-shrink-0 text-white bg-primary" />
              <Square class="flex-shrink-0 text-muted" v-else />
              <small class="form-check-label" :for="medicine.id">
                {{ medicine.label }}
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Tài khoản", to: "/auth" },
  { label: "Hồ sơ khách hàng" },
]);
const citySelect = ref<ProjectConfig.CitySetting | null>(null);
const wardSelect = ref<ProjectConfig.DistrictSetting | null>(null);

// Danh sách nhóm thuốc kinh doanh được tổ chức thành 3 cột
const medicineGroups = ref([
  // Cột 1
  [
    {
      id: "thuoc1",
      label: "Thuốc dạng phối hợp có chứa dược chất gây nghiện",
      checked: false,
    },
    {
      id: "thuoc2",
      label: "Thuốc phóng xạ và đồng vị phóng xạ",
      checked: true,
    },
    { id: "thuoc3", label: "Thuốc bảo quản lạnh (2-8 độ)", checked: false },
    { id: "thuoc4", label: "Thuốc thường kê đơn", checked: true },
  ],
  // Cột 2
  [
    {
      id: "thuoc5",
      label: "Thuốc dạng phối hợp có chứa dược chất hướng thần",
      checked: false,
    },
    {
      id: "thuoc6",
      label: "Thuốc cấm sử dụng trong một số ngành, lĩnh vực",
      checked: true,
    },
    { id: "thuoc7", label: "Vaxcin", checked: false },
    { id: "thuoc8", label: "Thuốc thiết yếu kê đơn", checked: false },
  ],
  // Cột 3
  [
    {
      id: "thuoc9",
      label: "Thuốc dạng phối hợp có chứa tiền chất",
      checked: false,
    },
    { id: "thuoc10", label: "Thuốc Độc", checked: false },
    { id: "thuoc11", label: "Sinh phẩm (trừ men vi sinh)", checked: false },
    { id: "thuoc12", label: "Thuốc không kê đơn", checked: false },
  ],
]);
</script>

<style scoped>
.sticky-top {
  top: 80px;
  z-index: 0 !important;
}
</style>
