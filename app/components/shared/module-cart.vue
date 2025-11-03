<template>
  <div v-if="totalItems == 0" class="d-flex flex-column align-items-center">
    <img src="/images/cart-empty.svg" class="w-75" alt="" />
    <h6 class="mt-4 text-muted text-center">Giỏ hàng của bạn đang trống</h6>
  </div>
  <div v-else>
    <table class="table table-borderless m-0">
      <tbody>
        <tr v-for="item in cart" :key="item.ma_vt">
          <td style="width: 80px">
            <div
              class="ratio ratio-1x1 border rounded-2 overflow-hidden"
              style="max-width: 80px"
            >
              <img
                :src="item.image_urls?.[0]?.url || '/images/image-error.svg'"
                alt=""
                class="object-fit-cover"
              />
            </div>
          </td>
          <td>
            <div>
              <NuxtLink
                :to="`/product/${item.ma_vt}`"
                class="text-decoration-none link-dark fw-semibold"
              >
                <small> {{ item.ten_vt }}</small>
              </NuxtLink>
            </div>
            <div
              class="d-flex gap-2 justify-content-start align-items-center"
            >
              <div>{{ item.quantity }}  <span class="text-muted">( {{ item.dvt }} )</span></div>
              <X :size="16" />
              <div>
                <span class="text-danger fw-bold">
                  {{ formatCurrency(item.gia_nt2) || "Liên hệ" }}
                </span>
                <span class="text-muted">/ {{ item.dvt }}</span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const { cart, totalItems } = useCart();
</script>

<style></style>
