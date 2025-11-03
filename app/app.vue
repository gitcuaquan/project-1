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
const { setUser, clearUser } = useAuth();

async function getUser() {
  try {
    const response = await $appServices.customer.detail();
    setUser(response.data);
  } catch (error) {
    clearUser();
  }
}
getUser();
</script>
