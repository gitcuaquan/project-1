<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="product-category-tree">
          <h4 class="mb-3">Danh mục sản phẩm</h4>
          <div class="tree-container">
            <CategoryTree :categories="categories" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    id:useId(),
    name: "Điện thoại",
    children: [
      {
        id:useId(),
        name: "Android",
        children: [
          { id:useId(), name: "Samsung" },
          { id:useId(), name: "Xiaomi" },
        ],
      },
      {
        id:useId(),
        name: "iOS",
        children: [
          { id:useId(), name: "iPhone 14" },
          { id:useId(), name: "iPhone 15" },
        ],
      },
    ],
  },
  {
    id:useId(),
    name: "Laptop",
    children: [
      {
        id:useId(),
        name: "Windows",
        children: [
          { id:useId(), name: "Dell" },
          { id:useId(), name: "Asus" },
        ],
      },
      {
        id:useId(),
        name: "Macbook",
        children: [
          { id:useId(), name: "Air" },
          { id:useId(), name: "Pro" },
        ],
      },
    ],
  },
];
</script>
