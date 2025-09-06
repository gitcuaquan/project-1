<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  children?: Category[];
}

const props = withDefaults(defineProps<{
  categories: Category[];
  level?: number;
}>(), {
  level: 0,
});
const level = ref(props.level);
</script>

<template>
  <ul class="list-unstyled m-0 mb-3">
    <li v-for="cat in props.categories" :key="cat.id" class="mb-2">
      <div :class="['d-flex align-items-center gap-1 item']" role="button">
        <PackageOpen v-if="props.level == 0"  :size="16" :stroke-width="1" />
        <BookMarked :size="16" :stroke-width="1" v-if="props.level == 1" />
        <ScrollText class="flex-shrink-0" :size="16" :stroke-width="1" v-if="props.level == 2" />
        <small>{{ cat.name }}</small>
      </div>
      <!-- render children -->
      <div class="ps-2 mt-2">
        <CategoryTree
          :level="level + 1"
          v-if="cat.children && cat.children.length"
          :categories="cat.children"
        />
      </div>
    </li>
  </ul>
</template>

<style scoped>
ul {
  position: relative;
}
ul::after {
  content: "";
  position: absolute;
  top: 12px;
  left: -10px;
  width: 1px;
  height: calc(100% - 28px);
  background-color: #dee2e6;
  z-index: -1;
}
li {
  position: relative;
}
li::before {
  content: "";
  position: absolute;
  top: 12px;
  left: -10px;
  width: 10px;
  height: 1px;
  background-color: #dee2e6;
}
.item{
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: 4px;
}
.item:hover {
  background:rgba(var(--bs-primary-rgb), 0.1);
  cursor: pointer;
}
</style>
