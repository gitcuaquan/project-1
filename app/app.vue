<template>
  <NuxtLoadingIndicator :height="4" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UiToastContainer />
  <UiMenuMobile />
</template>

<script setup lang="ts">
import { NuxtLayout } from "#components";
const { $appServices } = useNuxtApp();

</script>
