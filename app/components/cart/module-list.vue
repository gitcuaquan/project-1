<template>
  <div class="cart w-100">
    <!-- Header (desktop only) -->
    <div class="cart-header d-none border d-lg-table-row bg-light fw-semibold">
      <span class="d-lg-table-cell p-3 py-2">Sản phẩm</span>
      <span class="d-lg-table-cell p-3 py-2 text-center">Giá</span>
      <span class="d-lg-table-cell p-3 py-2 text-center">Số lượng</span>
      <span class="d-lg-table-cell p-3 py-2 text-end">Tổng</span>
    </div>

    <!-- Item -->
    <div
      class="cart-item d-block d-lg-table-row border rounded-3 p-3 mb-3 bg-white shadow-sm"
    >
      <!-- Product -->
      <div
        class="cart-product mb-lg-0 mb-3 d-flex align-items-center gap-3 d-lg-table-cell p-lg-3"
      >
        <div class="d-flex">
          <img
            src="https://placehold.co/400"
            width="60"
            height="60"
            class="rounded border"
            alt="Sản phẩm"
          />
          <span class="fw-medium ms-2"
            >Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed</span
          >
        </div>
      </div>

      <!-- Price -->
      <div
        class="cart-price text-lg-end d-flex mb-2 mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
      >
        <span class="d-lg-none fw-semibold">Giá:</span>
        <span class="text-lg-center">200.000đ</span>
      </div>

      <!-- Quantity -->
      <div
        class="cart-qty d-flex text-lg-center mb-2 mb-lg-0 justify-content-between align-items-center d-lg-table-cell p-lg-3"
      >
        <span class="d-lg-none fw-semibold">Số lượng:</span>
        <UiBtnGroup size="sm" />
      </div>

      <!-- Total -->
      <div
        class="cart-total d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
      >
        <span class="d-lg-none fw-semibold">Tổng:</span>
        <span class="fw-bold text-success text-lg-end">200.000đ</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
/* Mobile: card layout */
.cart {
  display: grid;
  gap: 1rem;
}

.cart-header {
  display: none;
}

.cart-item {
  display: grid;
  gap: 0.75rem;
}

/* Desktop: table layout */
@media (min-width: 992px) {
  .cart {
    display: table;
    width: 100%;
    border-collapse: collapse;
  }

  .cart-header {
    display: table-row;
  }

  .cart-header span,
  .cart-item > * {
    display: table-cell;
    vertical-align: middle;
    border-bottom: 1px solid #dee2e6;
  }

  .cart-item {
    display: table-row;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
  }
}
</style>
