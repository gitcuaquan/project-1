<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row py-3 g-3">
      <div class="col-lg-3 h-100">
        <LayoutAuthSiderbar class="sticky-top" />
      </div>
      <div class="col-lg-9">
        <h2 class="text-capitalize mb-3">Đơn hàng của bạn</h2>
        <div
          class="cart-header d-none border d-lg-table-row bg-light fw-semibold"
        >
          <span class="d-lg-table-cell p-3 py-2">Sản phẩm</span>
          <span class="d-lg-table-cell p-3 py-2 text-center">Giá</span>
          <span class="d-lg-table-cell p-3 py-2 text-center text-nowrap"
            >Số lượng</span
          >
          <span class="d-lg-table-cell p-3 py-2 text-end">Tổng</span>
          <span class="d-lg-table-cell p-3 py-2 text-end text-nowrap"
            >Trạng thái</span
          >
        </div>

        <!-- Item -->
        <div
          class="cart-item d-block d-lg-table-row align-middle border rounded-3 p-3 mb-3 bg-white shadow-sm"
        >
          <!-- Product -->
          <div
            class="cart-product mb-lg-0 mb-3 d-flex align-items-center gap-3 d-lg-table-cell p-lg-3"
          >
            <div class="d-flex align-items-center">
              <img
                src="https://placehold.co/400"
                width="60"
                height="60"
                class="rounded border"
                alt="Sản phẩm"
              />
              <span class="fw-medium ms-2"
                >Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed</span
              >
            </div>
          </div>

          <!-- Price -->
          <div
            class="cart-price text-lg-end d-flex mb-2 mb-lg-0 justify-content-between d-lg-table-cell align-middle p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Giá:</span>
            <span class="text-lg-center">200.000đ</span>
          </div>

          <!-- Quantity -->
          <div
            class="cart-qty align-middle d-flex text-lg-center mb-2 mb-lg-0 justify-content-between align-items-center d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Số lượng:</span>
            1
          </div>

          <!-- Total -->
          <div
            class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Tổng:</span>
            <span class="fw-bold text-success text-lg-end">200.000đ</span>
          </div>
          <div
            class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Trạng thái:</span>
            <span class="text-lg-end "> 
              <span class="badge bg-warning d-flex fw-normal align-items-center gap-1 bg-opacity-10 text-dark border border-warning"><FolderClock :stroke-width="2" :size="16"/>Đang xử lý</span>
            </span>
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
  { label: "Đơn hàng của bạn" },
]);
</script>

<style scoped>
.sticky-top {
  top: 80px;
  z-index: 0 !important;
}
</style>
