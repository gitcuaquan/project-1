<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container my-4">
    <div class="row">
      <div
        class="col-lg-6 vh-100 border-end d-flex flex-column justify-content-start gap-4"
      >
        <checkout-payment-method />
      </div>
      <div
        class="col-lg-6 vh-100 d-flex flex-column justify-content-start gap-4"
      >
        <CartModuleSummary>
          <textarea name="orderNote" id="orderNote" rows="2" class="form-control mb-3" placeholder="Ghi chú đơn hàng (nếu có)"></textarea>
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
