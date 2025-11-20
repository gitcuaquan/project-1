<template>
<LayoutAuth :breadcrumb="breadcrumb" name="Quản lý tin tức">
  <div>
    Nội dung quản lý tin tức ở đây
  </div>
</LayoutAuth>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";
definePageMeta({
  middleware: "auth",
});
const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Tài khoản", to: "/auth" },
  { label: "Quản lý tin tức" },
]);
</script>

<style>

</style>