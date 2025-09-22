<template>
  <div
    class="card border-0 text-decoration-none shadow-sm"
  >
    <div class="card-body p-2">
      <div class="ratio ratio-1x1 overflow-hidden rounded mb-3">
        <img
          :src="props.image"
          alt="Product Image"
          class="card-img-top"
        />
      </div>
      <h6 class="card-title">
        {{ props.name }}
      </h6>
      <div class="d-flex mb-2 gap-2 justify-content-end">
        <UiBtnGroup size="sm" class="me-auto" />
        <NuxtLink
          to="/product/12312"
          class="btn border-0 d-flex align-items-center btn-sm btn-link"
        >
          Chi tiết
          <ArrowRight :size="16" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  image: string;
}>();
</script>

<style></style>
