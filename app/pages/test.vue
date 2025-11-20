<template>
  <div>
    <div
      style="width: 100%; height: 600px; position: relative; overflow: hidden"
    >
      <div v-for="value in data" class="col-3 mb-2"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BaseParameters } from "~/model";

const { $appServices } = useNuxtApp();

const data = ref([]);
$appServices.order.listOrder().then((res) => {
  console.log("🚀 ~ res=>", res);
});
</script>

<style></style>
