<template>
  <ClientOnly>
    <swiper-container
      :pagination="{ clickable: true, currentClass: 'bg-primary' }"
      :autoplay="true"
      style="z-index: 0;"
      ref="containerRef"
    >
      <swiper-slide v-for="(item, index) in slides" :key="index" class="p-2">
        <div class="card border-0 shadow-sm  mb-5">
          <img
            :src="Products[index % Products.length]?.image"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <small class="text-primary fst-italic">Đã bán : 1000 +</small>
            <NuxtLink
              to="/product/12312"
              class="text-decoration-none text-dark"
            >
              <small class="text-truncate-2"> {{ Products[index % Products.length]?.name }}</small>
            </NuxtLink>
          </div>
          <div class="card-footer border-0 fw-normal gap-2 bg-primary py-1 text-white d-flex justify-content-center align-items-center">
            <ShoppingBag :size="16"/> Mua ngay
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script lang="ts" setup>
const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));
import Products from "~/data/fake_product.json";
const swiper = useSwiper(containerRef, {
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
</script>
<style>
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  height: 42px;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>