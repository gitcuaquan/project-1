<template>
  <div id="main-image" class="position-relative">
    <div class="ratio rounded overflow-hidden ratio-1x1">
      <img :src="selectedImage" />
    </div>
    <div class="position-absolute top-50 start-0 ms-3">
      <CircleChevronLeft @click="prevImage" role="button" :size="36" />
    </div>
    <div class="position-absolute top-50 end-0 me-3">
      <CircleChevronRight @click="nextImage" role="button" :size="36" />
    </div>
  </div>
  <div
    id="thumbnail-container"
    class="d-flex gap-2 mt-3 flex-nowrap overflow-auto w-100 justify-content-start"
  >
    <div
      v-for="(img, index) in images"
      :key="index"
      class="thumbnail rounded overflow-hidden"
      :class="{ active: img === selectedImage }"
      @click="selectedImage = img"
    >
      <img :src="img" alt="" class="object-fit-lg-contain" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  images: string[];
}>();

const selectedImage = ref(props.images[0]);

onMounted(() => {
  initMouse();
});

watch(selectedImage, (newImage) => {
  const scrollContainer = document.getElementById("thumbnail-container");
  if (!scrollContainer) return;
  const thumbnails = scrollContainer.querySelectorAll(".thumbnail");
  const newIndex = props.images.indexOf(newImage!);
  const target = thumbnails[newIndex] as HTMLElement | undefined;
  if (target) {
    const containerRect = scrollContainer.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    if (
      targetRect.left < containerRect.left ||
      targetRect.right > containerRect.right
    ) {
      target.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }
});

function initMouse() {
  const scrollContainer = document.getElementById("thumbnail-container");
  if (!scrollContainer) return;

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  // Ngăn kéo ảnh mặc định
  scrollContainer.querySelectorAll("img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });

  const startDrag = (x: number) => {
    isDragging = true;
    startX = x - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
    scrollContainer.style.cursor = "grabbing";
    scrollContainer.style.userSelect = "none"; // tránh bị bôi đen text
  };

  const doDrag = (x: number) => {
    if (!isDragging) return;
    const deltaX = x - scrollContainer.offsetLeft;
    scrollContainer.scrollLeft = scrollLeft - (deltaX - startX);
  };

  const endDrag = () => {
    isDragging = false;
    scrollContainer.style.cursor = "grab";
    scrollContainer.style.removeProperty("user-select");
  };

  // 🖱 Desktop
  scrollContainer.addEventListener("mousedown", (e) => startDrag(e.pageX));
  window.addEventListener("mousemove", (e) => doDrag(e.pageX));
  window.addEventListener("mouseup", endDrag);

  // 📱 Mobile
  scrollContainer.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches[0]) {
      startDrag(e.touches[0].pageX);
    }
  });
  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
      doDrag(e.touches[0].pageX);
    }
  });
  window.addEventListener("touchend", endDrag);
}

const prevImage = () => {
  const currentIndex = props.images.indexOf(selectedImage.value!);
  const newIndex =
    (currentIndex - 1 + props.images.length) % props.images.length;
  selectedImage.value = props.images[newIndex];
};

const nextImage = () => {
  const currentIndex = props.images.indexOf(selectedImage.value!);
  const newIndex = (currentIndex + 1) % props.images.length;
  selectedImage.value = props.images[newIndex];
};
</script>

<style scoped>
.thumbnail {
  width: 100px;
  height: 100px;
  cursor: pointer;
  flex: none;
  transform: scale(0.95);
  transition: all 0.3s;
  outline: 1px solid transparent;
}
.thumbnail img {
  width: 100%;
  height: 100%;
  user-select: none;
}
.thumbnail.active {
  transform: scale(1);
  z-index: 1;
  outline: 1px solid var(--bs-primary);
  outline-offset: 1px;
}
#thumbnail-container {
  padding: 0.5rem 0.25rem;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}
#thumbnail-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
