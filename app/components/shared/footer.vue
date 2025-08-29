<template>
  <div>
    hihih
  </div>
  <!-- Scroll to Top Button -->
  <button v-if="showButton" class="btn rounded-circle " id="scroll-to-top">
    <ArrowBigUpDash :size="24" color="#189847" />
  </button>
</template>

<script lang="ts" setup>

const showButton = ref(false);

onMounted(() => {
  checkScroll();
  window.addEventListener('scroll', checkScroll);
});

function checkScroll() {
  if (window.scrollY > 100) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}
</script>

<style scoped>
#scroll-to-top {
  background: rgba(var(--bs-primary-rgb), 0.2);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  
}
</style>