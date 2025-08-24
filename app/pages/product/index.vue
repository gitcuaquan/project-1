<template>
  <div class="container">
   <div class="row g-3">
    <div class="col-md-3" v-for="value in 12">
      <ProductItem />
    </div>
   </div>
   <shared-pagination class="mt-3" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>