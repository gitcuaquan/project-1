<template>
  <div class="bg-custom">
    <div class="container py-2">
      <nav
        aria-label="breadcrumb"
      >
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <NuxtLink class="text-decoration-none" to="/">Trang chủ</NuxtLink>
          </li>
          <li class="breadcrumb-item" v-for="value in data" :key="value.label">
            <template v-if="value.to">
              <NuxtLink class="text-decoration-none" :to="value.to">{{
                value.label
              }}</NuxtLink>
            </template>
            <template v-else>
              <span class="text-muted">{{ value.label }}</span>
            </template>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script lang="ts" setup>

import type { ProjectConfig } from "~/model";
const props = defineProps({
  data: Array as () => ProjectConfig.BreadcrumbItem[],
});
</script>
<style scoped>
.breadcrumb * {
  font-size: 14px;
}
.bg-custom {
  background-color: #e9f0ec;
}
</style>
