<template>
  <nav>
    <ul class="pagination gap-1 justify-content-end">
      <li class="page-item">
      <ChevronLeft :size="16" />
      </li>
      <li class="page-item ">1</li>
      <li class="page-item">2</li>
      <li class="page-item">3</li>
      <li class="page-item active">4</li>
      <li class="page-item">5</li>
      <li class="page-item">
       <ChevronRight :size="16" />
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

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
