<template>
  <NuxtLoadingIndicator :height="4" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UiToastContainer />
</template>

<script setup lang="ts">
import { NuxtLayout } from "#components";
</script>
