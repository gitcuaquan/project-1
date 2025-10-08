<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container my-4">
    <div class="row">
      <div class="col-lg-8">
        <CartModuleList />
      </div>
      <div class="col-lg-4">
        <CartModuleSummary class="border rounded shadow-sm" />
        <div class="d-flex mt-3 flex-column gap-3">
          <div v-for="value in 4" :key="value">
            <SharedModuleCoupon />
          </div>
        </div>
      </div>
    </div>
    <div v-if="false" class="row justify-content-center">
      <div class="col-4">
        <div class="d-flex flex-column align-items-center">
          <img src="/images/cart-empty.svg" class="w-75" alt="" />
          <h6 class="mt-4 text-muted text-center">
            Giỏ hàng của bạn đang trống
          </h6>
          <NuxtLink to="/quick-order" class="btn btn-link btn-sm mt-3">
            <CornerDownLeft :size="16" :stroke-width="1.5" /> Đặt hàng ngay
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Giỏ hàng" },
]);
</script>

<style></style>
