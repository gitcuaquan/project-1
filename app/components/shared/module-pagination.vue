<template>
  <nav>
    <ul class="pagination gap-1 justify-content-end">
      <li class="page-item" @click="$emit('page-change', 1)">
        <ChevronLeft :size="16" />
      </li>
      <template v-for="page in renderPageItems?.pages" :key="page">
        <li
          class="page-item"
          :class="{ active: page === props.pagination?.pageIndex }"
          @click="$emit('page-change', page)"
        >
          {{ page }}
        </li>
      </template>
      <li
        class="page-item"
        @click="$emit('page-change', renderPageItems?.totalPages || 1)"
      >
        <ChevronRight :size="16" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import type { Pagination } from "~/model/SSE";

const props = defineProps<{
  pagination?: Pagination;
}>();
const emits = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const visiblePages = 5;

const renderPageItems = computed(() => {
  if (!props.pagination) return null;
  const { pageIndex, pageSize, totalCount } = props.pagination;
  const totalPages = Math.ceil(totalCount / pageSize);
  const pages = [];
  let startPage = Math.max(1, pageIndex - Math.floor(visiblePages / 2));
  let endPage = startPage + visiblePages - 1;
  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - visiblePages + 1);
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  return {
    pages,
    totalPages,
  };
});
</script>

<style scoped>
.page-item {
  cursor: pointer;
  width: 35px;
  height: 35px;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  overflow: hidden;
  background: var(--bs-white);
  border: 1px solid #dee2e6;
}
.page-item:hover {
  background-color: #f8f9fa;
}
.page-item.active {
  background-color: var(--bs-primary);
  color: white;
  border: 1px solid var(--bs-primary);
}
</style>
