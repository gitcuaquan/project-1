<template>
  <div class="row">
    <div
      class="col-lg-3 col-md-4 col-sm-6 mb-4"
      v-for="product in Products.slice(0, 8)"
      :key="product.name"
    >
      <ProductModuleItem :name="product.name" :image="product.image" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Products from "~/data/fake_product.json";
</script>

<style></style>
