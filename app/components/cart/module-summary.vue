<template>
  <div class="cart-summary bg-white p-4">
    <h5 class="fw-semibold mb-3">Tổng quan</h5>
    <div class="d-flex justify-content-between mb-2">
      <span>Tạm tính</span>
      <span>200.000đ</span>
    </div>
    <div class="d-flex justify-content-between mb-2">
      <span>Phí vận chuyển</span>
      <span>30.000đ</span>
    </div>
    <hr />
    <div class="d-flex justify-content-between mb-2">
      <span>Khuyến mãi áp dụng</span>
      <span>30.000đ</span>
    </div>
    <div class="d-flex gap-2">
      <div
        class="badge px-3 border bg-info bg-opacity-10 border-info text-dark rounded-pill"
      >
        Giảm 10%
      </div>
      <div
        class="badge px-3 border bg-info bg-opacity-10 border-info text-dark rounded-pill"
      >
        Quà tặng kèm
      </div>
    </div>
    <hr />
    <div class="d-flex justify-content-between fw-bold fs-5 mb-3">
      <span>Tổng cộng</span>
      <span class="text-success">200.000đ</span>
    </div>
    <slot>
      <nuxt-link
        to="/checkout"
        class="btn text-capitalize btn-outline-success w-100"
      >
        Thanh toán
      </nuxt-link>
    </slot>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
