<template>
  <form @submit.prevent="onSubmit" class="position-relative w-100 pe-3 border rounded overflow-hidden" style="background: #e9ecef;">
    <input
      type="text"
      class="form-control border-0 pe-4 shadow-none w-100"
      :disabled="loading"
      v-model="keyword"
      :placeholder="placeholder"
    />
    <div
      role="button"

      :class="['position-absolute h-100 top-50 end-0 translate-middle-y px-2',{
        'bg-white': !loading,
        'bg-transparent': loading,
      }]"
    >
      <div @click="onSubmit" class="d-flex align-items-center justify-content-center h-100">
        <Search :size="16" v-if="!loading" />
        <div
          v-else
          class="spinner-border text-primary spinner-border-sm"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
const keyword = defineModel({
  type: String,
  default: "",
});
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "Tìm kiếm sản phẩm",
  },
});
const emit = defineEmits(["submit"]);
const onSubmit = () => {
  emit("submit", keyword);
};
</script>

<style></style>
