<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12">
        <SharedModuleBreadcrumb :data="breadcrumb" />
      </div>
    </div>
    <div class="row gy-2 gx-3">
      <div class="col-md-3" v-for="value in 4" :key="value">
        <SharedModuleCoupon />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh"},
]);
</script>

<style></style>
