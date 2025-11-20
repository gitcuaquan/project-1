<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row py-3 g-3">
      <div class="col-lg-3 h-100">
        <LayoutAuthSiderbar class="sticky-top" />
      </div>
      <div class="col-lg-9">
        <h2 class="text-capitalize mb-3">
          {{ props.name }}
        </h2>
        <slot>
          mặc định
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ProjectConfig } from '~/model';

  const props = defineProps({
    name: {
      type: String,
      required: false,
      default: 'auth layout',
    },
    breadcrumb: {
      type: Array as PropType<Array<ProjectConfig.BreadcrumbItem>>,
      required: false,
      default: () => [],
    },
  });
</script>

<style></style>
