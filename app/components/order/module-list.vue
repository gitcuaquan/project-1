<template>
  <table class="table align-middle mb-0 table-sm table-borderless">
    <tbody>
      <tr v-for="value in 10" class="border-bottom" :key="value">
        <td>
          <div class="ratio bg-light rounded ratio-1x1" style="width: 100px">
            <img src="/images/image-error.svg" alt="" />
          </div>
        </td>
        <td>
          <NuxtLink
            to="/product/3b-lysine"
            class="text-decoration-none link-dark link-product"
            >3B Lysine, Linh Chi Đông Trùng Hộp 100 Viên (B1,B6,B12) Nang Mềm ,
            Akofa - 3B Lysine Đông Trùng Trắng</NuxtLink
          >
          <div class="d-flex mt-1 gap-2">
            <small>
              Giá: <strong class="text-danger fw-normal">Liên hệ</strong>
            </small>
            <div class="vr"></div>
            <small>
              Đơn vị : <strong class="text-danger fw-normal">Hộp</strong>
            </small>
          </div>
          <div class="d-flex align-items-center mt-1 gap-2">
            <SharedModuleButton  size="sm" />
            <button class="btn btn-sm d-lg-none border border-dark  shadow-sm btn-light">
              <img src="/images/cart-add.svg" style="width: 15px" alt="" />
            </button>
          </div>
        </td>
        <td style="width: 10px" class="d-none d-md-table-cell">
          <button class="btn btn-sm shadow-sm border border-dark btn-light">
            <img src="/images/cart-add.svg" style="width: 15px" alt="" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup></script>

<style scoped>
.ratio img {
  object-fit: contain;
}
small {
  font-size: 0.75rem;
}
.link-product {
  font-size: 0.875rem;
  font-weight: 500;
}
.link-product:hover {
  color: var(--bs-primary) !important;
  text-decoration: underline !important;
}
</style>
