<template>
  <table class="table align-middle mb-0 table-sm table-borderless">
    <tbody>
      <tr
        v-for="value in Products.slice(0, 10)"
        class="border-bottom"
        :key="value.name"
      >
        <td style="width: 100px">
          <div
            class="ratio z-low overflow-hidden bg-light rounded ratio-1x1"
            style="width: 100px"
          >
            <img :src="value.image" alt="" />
          </div>
        </td>
        <td>
          <NuxtLink
            to="/product/3b-lysine"
            class="text-decoration-none link-dark link-product"
          >
            {{ value.name }}
          </NuxtLink>
          <div class="d-flex mt-1 gap-2">
            <small>
              Giá: <strong class="text-danger text-opacity-75 fw-normal">Liên hệ</strong>
            </small>
            <div class="vr"></div>
            <small>
              Đơn vị : <strong class="text-danger text-opacity-75 fw-normal">Hộp</strong>
            </small>
            <div class="vr"></div>
            <small>
              HSD : <strong class="text-danger text-opacity-75 fw-normal">03/12/2026</strong>
            </small>
          </div>
          <div class="d-lg-none mt-2">
            <UiBtnGroup size="sm" />
          </div>
        </td>
        <td style="width: 10px" class="d-none d-md-table-cell">
          <UiBtnGroup size="sm" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import Products from "~/data/fake_product.json";
</script>

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
.z-low {
  z-index: 0 !important;
}
</style>
