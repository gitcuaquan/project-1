<template>
  <div>test page</div>
</template>

<script lang="ts" setup>
const { $appServices } = useNuxtApp();
async function test() {
  try {
    const items = await $appServices.items.getItems();
    console.log("Fetched items:", items.pagination);
  } catch (error) {
    console.error("Error fetching items:", error);
  }
}

onMounted(() => {
  test();
});
</script>

<style></style>
