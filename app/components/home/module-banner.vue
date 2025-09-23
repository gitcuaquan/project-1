<template>
  <client-only>
    <swiper-container style="z-index: 0;" :autoplay="true" :navigation="true" :loop="true" :pagination="true" class="mySwiper">
      <swiper-slide v-for="value in banners" >
        <div class="ratio ratio-16x9 overflow-hidden rounded">
          <a :href="value.url">
            <img loading="lazy" :src="value.image" class="d-block w-100 rounded" alt="..." />
          </a>
        </div>
      </swiper-slide>
    </swiper-container>
  </client-only>
</template>

<script lang="ts" setup>
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
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #444;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
