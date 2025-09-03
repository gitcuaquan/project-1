<template>
  <div class="dropdown">
    <div data-bs-toggle="dropdown" class="form-control position-relative">
      <small v-if="!citySelect" class="text-muted user-select-none">
        Chọn thành phố
      </small>
      <span class="user-select-none" v-else>{{ citySelect.name }}</span>
      <div class="position-absolute top-50 end-0 translate-middle-y pe-2">
        <ChevronDown />
      </div>
    </div>
    <div class="dropdown-menu w-100 border-0 shadow">
      <!-- tìm kiếm -->
      <div class="bg-white shadow-sm p-2">
        <div class="position-relative">
          <input
            type="search"
            v-model="searchKeyword"
            class="form-control mb-2"
            placeholder="Tìm kiếm thành phố..."
          />
          <div
            class="position-absolute bg-white top-50 end-0 translate-middle-y pe-2 me-1"
          >
            <Search />
          </div>
        </div>
      </div>
      <div class="max-height overflow-auto">
        <ul class="list-unstyled" v-if="listCity.length">
          <li
            @click="citySelect = value"
            v-for="value in listCity"
            :key="value.parent"
          >
            <a
              :class="[
                'dropdown-item',
                { active: citySelect?.name === value.name },
              ]"
              role="button"
              >{{ value.name }}</a
            >
          </li>
        </ul>
        <div v-else class="text-muted p-2">Không tìm thấy thành phố nào.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import City from "@/data/ward.json"; // Adjust the import path as necessary
import type { ProjectConfig } from "~/model";
const props = defineProps<{
  cityCode: string | number;
  modelValue: ProjectConfig.DistrictSetting | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: ProjectConfig.DistrictSetting | null): void;
}>();
/**
 * Tìm kiếm xã phường
 */
const searchKeyword = ref("");
//  dữ liệu được chọn
const citySelect = ref<ProjectConfig.DistrictSetting | null>(null);
// danh sách xã phường đã được lọc
const listCity = computed(() => {
  return (City as ProjectConfig.DistrictSetting[])
    .filter((item) => item.parent == props.cityCode)
    .filter((item) =>
      item.name.toLowerCase().includes(searchKeyword.value.toLowerCase())
    );
});
watch(
  () => citySelect.value,
  (value) => {
    emit("update:modelValue", value);
  }
);

watch(
  () => props.cityCode,
  () => {
    citySelect.value = null;
  }
);
</script>

<style scoped>
.max-height {
  max-height: 300px;
  overflow: auto;
}
</style>
