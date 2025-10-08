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
          class="cart-header d-none border w-100 d-lg-table-row bg-light fw-semibold"
        >
          <span class="d-lg-table-cell p-3 py-2">Mã Đơn Hàng</span>
          <span class="d-lg-table-cell p-3 py-2">Đơn Giá</span>
          <span class="d-lg-table-cell p-3 py-2 text-center text-nowrap">
            Khách hàng
          </span>
          <span class="d-lg-table-cell p-3 py-2 text-end text-nowrap">
            Trạng thái
          </span>
          <span class="d-lg-table-cell p-3 py-2 text-center">Hành Động</span>
        </div>

        <!-- Item -->
        <div
          class="cart-item d-block border w-100 d-lg-table-row align-middle border rounded-3 p-3 mb-3 bg-white shadow-sm"
        >
          <!-- Product -->
          <div
            class="cart-product w-custom mb-lg-0 mb-3 d-flex justify-content-between align-items-start gap-3 d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Mã Đơn Hàng:</span>
            <div class="d-flex flex-column align-items-lg-start">
              <span class="fw-medium ms-2 text-end">#DH00123</span>
              <small class="text-muted ms-2 fst-italic">
                Ngày tạo: 22/12/2024
              </small>
            </div>
          </div>

          <!-- Price -->
          <div
            class="cart-price w-custom text-lg-start d-flex mb-2 mb-lg-0 justify-content-between d-lg-table-cell align-middle p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Đơn Giá:</span>
            <span>200.000đ</span>
          </div>

          <!-- Quantity -->
          <div
            class="cart-qty w-custom align-middle d-flex text-lg-center mb-2 mb-lg-0 justify-content-between align-items-center d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold"> Khách hàng:</span>
            <span class="text-lg-center">Nguyễn Văn A</span>
          </div>
          <div
            class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
          >
            <span class="d-lg-none fw-semibold">Trạng thái:</span>
            <span class="text-lg-end">
              <span
                class="badge bg-warning d-flex fw-normal align-items-center gap-1 bg-opacity-10 text-dark border border-warning"
              >
                <FolderClock :stroke-width="2" :size="16" />Đang xử lý</span
              >
            </span>
          </div>
          <!-- Total -->
          <div
            class="cart-total gap-2 align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-center d-lg-table-cell p-lg-3"
          >
            <div class="d-flex gap-1">
              <button
                @click="showModalDetail = true"
                class="btn-sm text-nowrap me-lg-2 btn btn-primary"
              >
                <Eye :size="16" />
              </button>
              <button
                @click="showModalCreateTicket = true"
                class="btn-sm text-nowrap me-lg-2 btn btn-danger"
              >
               <MessageCircleWarning :size="16" />
              </button>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <SharedModulePagination />
        </div>
      </div>
    </div>
  </div>
  <ClientOnly>
    <AuthModalOrderDetail
      v-if="showModalDetail"
      @close="showModalDetail = false"
      @ticket="
        showModalCreateTicket = true;
        showModalDetail = false;
      "
    />
    <AuthModalCreateTicket
      v-if="showModalCreateTicket"
      @close="showModalCreateTicket = false"
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Tài khoản", to: "/auth" },
  { label: "Đơn hàng của bạn" },
]);

const showModalDetail = ref(false);
const showModalCreateTicket = ref(false);
</script>

<style scoped>
.sticky-top {
  top: 80px;
  z-index: 0 !important;
}
@media screen and (min-width: 992px) {
  .w-custom {
    width: 25%;
  }
}
</style>
