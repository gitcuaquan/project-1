<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="product-category-tree">
          <h4 class="mb-3">Danh mục sản phẩm</h4>
          <div class="tree-container">
            {{ test }}
            <ui-input-search v-model="test" />
            <ui-input-search v-model="test" loading />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const test = ref('')
</script>
