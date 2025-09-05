<script setup lang="ts">
import { ref } from "vue";
import { ChevronDown, ChevronRight, Folder } from "lucide-vue-next";

interface Category {
  id: number;
  name: string;
  children?: Category[];
}

const props = defineProps<{
  categories: Category[];
}>();

// Quản lý trạng thái expand/collapse
const expanded = ref<Set<number>>(new Set());

const toggle = (id: number) => {
  if (expanded.value.has(id)) {
    expanded.value.delete(id);
  } else {
    expanded.value.add(id);
  }
};
</script>

<template>
  <ul class="list-unstyled p-0">
    <li v-for="cat in props.categories" :key="cat.id" class="mb-1">
      <div
        :class="['d-flex align-items-center gap-1', { 'ps-4': !cat.children || cat.children?.length == 0 }]"
        role="button"
        @click="toggle(cat.id)"
      >
        <component
          v-if="cat.children && cat.children.length"
          :is="expanded.has(cat.id) ? ChevronDown : ChevronRight"
          :size="16"
        />
        <Folder :size="16" class="text-primary" />
        <span>{{ cat.name }}</span>
      </div>

      <!-- render children -->
      <div :class="`ms-${cat.children && cat.children.length ? 3 : 0}`">
        <CategoryTree
          v-if="cat.children && cat.children.length && expanded.has(cat.id)"
          :categories="cat.children"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped>
.category-tree {
  list-style: none;
  padding-left: 0;
}
.category-item {
  margin-bottom: 4px;
}
.category-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
.category-row:hover {
  background: #f2f6fa;
}
.chevron {
  color: #6c757d;
  transition: color 0.2s;
}
.folder-icon {
  color: #2eaf7d;
}
.category-name {
  font-weight: 500;
  color: #222;
}
.category-children {
  margin-left: 24px;
  padding: 6px 0 6px 12px;
  border-left: 2px solid #e0e7ef;
  border-radius: 0 0 0 8px;
  background: #fafcff;
}
</style>
