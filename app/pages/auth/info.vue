<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row py-3 g-3">
      <div class="col-lg-3 h-100 ">
        <LayoutAuthSiderbar class="sticky-top" />
      </div>
      <div class="col-lg-9">
        <form class="row gy-1 gx-3">
          <div class="col-12 col-md-6">
            <label for="name" class="form-label">Họ và tên</label>
            <input
              type="text"
              class="form-control"
              required
              id="name"
              placeholder="Nhập họ và tên đầy đủ của bạn"
            />
          </div>
          <div class="col-12 col-md-6">
            <label for="businessName" class="form-label">Tên cơ sở</label>
            <input
              type="text"
              class="form-control"
              required
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
            <SharedAddressWard :city-code="citySelect?.code" />
          </div>
          <div class="col-12">
            <label for="address" class="form-label">Địa chỉ</label>
            <input
              type="text"
              class="form-control"
              required
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
</script>

<style scoped>

.sticky-top {
  top: 80px;
  z-index: 0 !important;
}
</style>
