<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <SharedModuleBreadcrumb :data="breadcrumb" />
      </div>
    </div>
    <div class="row gy-2 gx-3">
      <div class="col-lg-3">
        <div class="card sticky-top bg-white border-0 shadow-sm" style="top: 60px;">
          <div class="card-body p-2 p-2">
            <OrderModuleFilter />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card bg-white border-0 shadow-sm">
          <div class="card-body">
            <OrderModuleList />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-white border-0 shadow-sm mb-3">
          <div class="card-body">
            <SharedModuleCart />
          </div>
        </div>
        <h6>Mã giảm giá</h6>
        <div class="d-flex flex-column gap-3">
          <div v-for="value in 4" :key="value">
            <SharedModuleCoupon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh" },
]);
</script>

<style></style>
