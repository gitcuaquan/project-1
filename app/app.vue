<template>
  <NuxtLoadingIndicator :height="4" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UiToastContainer />
  <UiMenuMobile v-if="isMobile" />
</template>

<script setup lang="ts">

  const isMobile = ref(false)

  function checkIsMobile() {
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkIsMobile)
  })
</script>
