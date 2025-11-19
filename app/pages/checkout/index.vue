<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container my-4">
    <div class="row">
      <div
        class="col-lg-6  border-end d-flex flex-column justify-content-start gap-4"
      >
        <checkout-payment-method />
      </div>
      <div
        class="col-lg-6  d-flex flex-column justify-content-start gap-4"
      >
        <div class="card border-0">
          <div class="card-body">
            <h5 class="text-capitalize  mb-3">Đơn hàng của bạn</h5>
            <div class="d-flex align-items-center gap-2">
              <img
                src="https://placehold.co/400"
                width="90"
                height="90"
                class="rounded border"
                alt="Sản phẩm"
              />
              <div class="d-flex flex-column">
                <small class="fw-medium ms-2">
                  Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed
                </small>
                <div>
                  <div
                    class="badge fw-normal bg-info border border-info text-dark bg-opacity-10 rounded-pill d-inline-block mt-2"
                  >
                    <Gift :size="16" />
                    <span class="ms-1 lh-sm"
                      >Quà tặng 1 bộ dụng cụ nhà bếp SunHouse</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex mt-3 align-items-center gap-2">
              <img
                src="https://placehold.co/400"
                width="90"
                height="90"
                class="rounded border"
                alt="Sản phẩm"
              />
              <div class="d-flex flex-column">
                <small class="fw-medium ms-2">
                  Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed
                </small>
                <div>
                  <div
                    class="badge fw-normal bg-info border border-info text-dark bg-opacity-10 rounded-pill d-inline-block mt-2"
                  >
                    <Gift :size="16" />
                    <span class="ms-1 lh-sm"
                      >Quà tặng 1 bộ dụng cụ nhà bếp SunHouse</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CartModuleSummary>
          <textarea
            name="orderNote"
            id="orderNote"
            rows="2"
            class="form-control mb-3"
            placeholder="Ghi chú đơn hàng (nếu có)"
          ></textarea>
          <div class="text-center">
            <button class="btn btn-primary btn-lg text-capitalize">
              Hoàn thành đơn hàng
            </button>
          </div>
        </CartModuleSummary>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";
const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Giỏ hàng", to: "/cart" },
  { label: "Thanh toán" },
]);
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .vh-100 {
    height: auto !important;
  }
}
</style>
