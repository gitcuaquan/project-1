<template>
  <div>
    <div
      style="width: 100%; height: 600px; position: relative; overflow: hidden"
    >
      <div v-for="value in data" class="col-3 mb-2">
        <shared-module-coupon :coupon="value" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { BaseParameters } from "~/model";

const { $appServices } = useNuxtApp();
const parameter = ref<BaseParameters>({
  PageIndex: 1,
  PageSize: 3,
});
const data = ref([]);
$appServices.discount.getListDiscount(parameter.value).then((res) => {
  data.value = res.getData;
  console.log("res discount", res.getData);
});
</script>

<style></style>
