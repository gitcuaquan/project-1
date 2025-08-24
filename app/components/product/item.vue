<template>
  <div class="card border-0 shadow-sm ">
    <div class="card-body">
      <div class="ratio ratio-1x1 overflow-hidden rounded mb-3 ">
        <img src="https://picsum.photos/200/300" alt="Product Image" class="card-img-top" />
      </div>
      <h5 class="card-title">Product Title</h5>
      <p class="card-text">Product description goes here.</p>
      <div class="d-flex mb-2 gap-2 justify-content-end">
        <button class="btn btn-sm me-auto d-flex align-items-center gap-2 btn-primary me-2">
          <Icon name="material-symbols:add-shopping-cart-sharp" size="16px" />
        </button>
        <button class="btn border-0 d-flex align-items-center btn-sm btn-outline-dark">
          Chi tiết
          <Icon name="material-symbols:arrow-right-alt" size="16px" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
