<template>
  <ClientOnly>
    <swiper-container
      class="swiper-cards"
      :slides-per-view="1"
      effect="cards"
      style="z-index: 0"
      :grabCursor="true"
      :autoplay="{
        delay: 3000,
      }"
    >
      <swiper-slide
        v-for="(slide, index) in Products"
        :key="`slide-card-${index}`"
        class="card bg-primary border-0 shadow-sm"
      >
        <img :src="slide.image" class="card-img-top" alt="" />
        <div class="card-body">
          <small class="text-light fst-italic">Đã bán : 1000 +</small>
          <div class="text-light mb-2 text-truncate-2">{{ slide.name }}</div>
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<script setup lang="ts">
import Products from "~/data/fake_product.json";
</script>
<style>
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.swiper-cards {
  width: 290px;
  height: 390px;
}
@media screen and (min-width: 768px) {
  .swiper-cards {
    width: 450px;
    height: 550px;
  }
}
.swiper-cards swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
