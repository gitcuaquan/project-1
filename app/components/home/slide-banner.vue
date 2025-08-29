<template>
  <div class="container mt-3">
    <div
      id="home-banner"
      class="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          v-for="(banner, index) in banners"
          :data-bs-target="'#home-banner'"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(banner, index) in banners"
          :class="{ active: index === 0 }"
          :key="banner.url"
          data-bs-interval="2000"
        >
          <div class="ratio ratio-16x9 overflow-hidden rounded">
            <img loading="lazy" :src="banner.image" class="d-block w-100 rounded" alt="..." />
          </div>
        </div>
      </div>
      <div class="position-absolute d-none d-md-block top-50 start-0 ms-3 translate-middle-y">
        <button
          type="button"
          data-bs-target="#home-banner"
          data-bs-slide="prev"
          class="btn btn-dark d-flex align-items-center py-2 btn-sm rounded-circle"
        >
          <ChevronLeft :size="16" />
        </button>
      </div>
      <div class="position-absolute d-none d-md-block top-50 end-0 me-3 translate-middle-y">
        <button
          type="button"
          class="btn btn-dark d-flex align-items-center py-2 btn-sm rounded-circle"
          data-bs-target="#home-banner"
          data-bs-slide="next"
        >
          <ChevronRight :size="16" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Carousel } from "bootstrap";
const banners = ref([
  {
    image: "https://tapmed.vn/upload_editor/posts/images/banner%202(1).jpg",
    url: "/",
  },
  {
    image: "https://tapmed.vn/upload_editor/posts/files/banner.jpg",
    url: "/",
  },
  {
    image: "https://tapmed.vn/upload_editor/posts/images/1111111.jpg",
    url: "/",
  },
  {
    image:
      "https://tapmed.vn/upload_editor/posts/files/2024-10-15-03%20-%20BANNER%20WEB(1).png",
    url: "/",
  },
  {
    image:
      "https://tapmed.vn/upload_editor/posts/images/Artboard%201%402x-8.png",
    url: "/",
  },
]);
const carousel = ref<Carousel>();

onMounted(() => {
  carousel.value = Carousel.getOrCreateInstance("#home-banner");
  carousel.value.cycle();
});
</script>

<style scoped>
.carousel-indicators {
  align-items: center;
}
.carousel-indicators button {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transition: all 0.3s;
}
.carousel-indicators button.active {
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
</style>
