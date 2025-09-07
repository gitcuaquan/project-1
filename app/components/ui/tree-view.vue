<script setup lang="ts">
interface Category {
  id: number;
  name: string;
  children?: Category[];
}

const props = withDefaults(
  defineProps<{
    categories: Category[];
    level?: number;
  }>(),
  {
    level: 0,
  }
);
const level = ref(props.level);
</script>

<template>
  <ul
    :class="['list-unstyled m-0', `level-${level}`]"
    v-if="props.categories && props.categories.length"
  >
    <li v-for="cat in props.categories" :key="cat.id" class="mb-2">
      <div :class="['d-flex align-items-center gap-1 item']" role="button">
        <PackageOpen v-if="props.level == 0" :size="16" :stroke-width="1" />
        <BookMarked :size="16" :stroke-width="1" v-if="props.level == 1" />
        <ScrollText
          class="flex-shrink-0"
          :size="16"
          :stroke-width="1"
          v-if="props.level == 2"
        />
        <small>{{ cat.name }}</small>
      </div>
      <!-- render children -->
      <div class="ps-2 mt-2">
        <UiTreeView
          :level="level + 1"
          v-if="cat.children && cat.children.length"
          :categories="cat.children"
        />
      </div>
    </li>
  </ul>
  <div
    v-else
    class="d-flex flex-column py-4 align-items-center justify-content-center text-secondary"
  >
    <img src="/images/nodata.svg" width="200" alt="" />
    Không tìm thấy dữ liệu
  </div>
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
  width: 2px;
  height: calc(100% - 28px);
  background-color: var(--bs-warning);
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
  height: 2px;
  background-color: var(--bs-warning);
}
.item {
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: 4px;
}
.item:hover {
  background: rgba(var(--bs-primary-rgb), 0.1);
  cursor: pointer;
}


ul.level-0::after {
  background: var(--bs-primary);
}

ul.level-0 > li::before {
  background: var(--bs-primary);
}
ul.level-1::after {
  background: var(--bs-info);
}

ul.level-1 > li::before {
  background: var(--bs-info);
}
ul.level-1::before {
  content: " ";
  position: absolute;
  top: calc(50% - 2px);
  left: -18px;
  width: 8px;
  height: 2px;
  background: var(--bs-info);
}
ul.level-2::before {
  content: " ";
  position: absolute;
  top: calc(50% - 2px);
  left: -18px;
  width: 8px;
  height: 2px;
  background:var(--bs-warning);
}
</style>
