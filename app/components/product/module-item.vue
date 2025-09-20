<template>
  <div class="card border-0 shadow-sm">
    <div class="card-body p-2">
      <div class="ratio ratio-1x1 overflow-hidden rounded mb-3">
        <img
          src="https://placehold.co/800x800/000000/5682B1.png"
          alt="Product Image"
          class="card-img-top"
        />
      </div>
      <h5 class="card-title">Product Title</h5>
      <p class="card-text">Product description goes here.</p>
      <div class="d-flex mb-2 gap-2 justify-content-end">
        <button
          class="btn btn-sm me-auto d-flex align-items-center gap-2 btn-primary me-2"
        >
          <ShoppingCart :size="16" :stroke-width="2" />
        </button>
        <button
          class="btn border-0 d-flex align-items-center btn-sm btn-outline-dark"
        >
          Chi tiết
          <ArrowRight :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
