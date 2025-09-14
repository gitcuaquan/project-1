<template>
  <div class="row g-3">
    <div class="col-md-4" v-for="value in limit">
      <news-item />
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps({
    limit: {
      type: Number,
      default:12,
    },
  });
</script>

<style>

</style>