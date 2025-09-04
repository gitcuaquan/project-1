<template>
  <div class="d-flex w-100 align-self-stretch gap-1">
    <div class="bg-primary d-flex align-items-center rounded-1 px-1 bg-opacity-10">
      <div class="ratio ratio-1x1" style="width: 80px">
        <img src="/images/coupon.svg" alt="coupon" />
      </div>
    </div>
    <div
      class="bg-primary flex-grow-1 p-2 rounded-1 bg-opacity-10 position-relative"
    >
      <div class="position-absolute top-0 end-0 me-1 mt-1">
        <NuxtLink to="#">
          <Info :size="18" :stroke-width="1.5" />
        </NuxtLink>
      </div>
      <h6 class="text-uppercase fw-bold">Phiếu mua hàng</h6>
      <div style="font-size: 13px" class="line-clamp">
        Phiếu mua hàng trị giá 150.000đ Áp dụng cho đơn hàng từ
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <div style="font-size: 10px" class="text-secondary mt-2">
          HSD: 31/12/2027
        </div>
        <button class="btn-sm py-0 lh-sm pb-1 btn btn-primary ">
          <small>Sử dụng</small>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  position: relative;
  line-height: 1.4 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 !important;
}
</style>
