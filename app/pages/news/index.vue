<template>
  <shared-module-breadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <news-list />
    <shared-module-pagination  class="mt-5" />
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from '~/model';

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Tin tức" },
]);
</script>

<style>

</style>