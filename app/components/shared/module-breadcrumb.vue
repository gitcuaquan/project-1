<template>
  <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
      <NuxtLink class="text-decoration-none" to="/">Trang chủ</NuxtLink>
      </li>
      <li class="breadcrumb-item" v-for="value in data" :key="value.label">
        <template v-if="value.to">
          <NuxtLink class="text-decoration-none" :to="value.to">{{ value.label }}</NuxtLink>
        </template>
        <template v-else>
          <span class="text-muted">{{ value.label }}</span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts" setup>
import { NuxtLink } from '#components';
import type { ProjectConfig } from '~/model';
const props = defineProps({
  data: Array as () => ProjectConfig.BreadcrumbItem[],
});
</script>
