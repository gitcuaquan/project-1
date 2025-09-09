<template>
  <div>
    <UiInputSearch v-model="providerSearch" :placeholder="'Tìm kiếm nhà cung cấp'" />
    <div class="view-list mt-3">
      <ul class="list-group list-group-flush m-0">
        <li role="button" v-for="item in providerFilter" :key="item.id" class="px-0 list-group-item list-group-item-action">
          <div class="flex items-center gap-2">
            <span class="text-sm font-medium">{{ item.label }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import providersData from "~/data/producers.json";
interface Provider {
  id: number;
  label: string;
}
const provider: Provider[] = providersData;

const providerSearch = ref("");
const providerFilter = computed(() => {
  if (!providerSearch.value) {
    return provider;
  }
  return provider.filter((item) =>
    item.label.toLowerCase().includes(providerSearch.value.toLowerCase())
  );
});
</script>

<style scoped>
  .view-list {
    max-height: 400px;
    overflow-y: auto;
    font-size: 14px;
  }
</style>
