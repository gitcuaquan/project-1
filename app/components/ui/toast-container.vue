<!-- components/ToastContainer.vue -->
<template>
  <div class="toast-container">
    <TransitionGroup name="toast" tag="div">
      <UiToastItem v-for="toast in reversedToasts" :key="toast.id" :toast="toast" />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
const { toasts, remove } = useToast();

const reversedToasts = computed(() => {
  // show newest on top
  return [...toasts.value].reverse();
});


</script>

<style scoped>

.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999999999999;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s cubic-bezier(0.2, 0.9, 0.2, 1);
}
.toast-enter-from {
  transform: translateY(-8px) scale(0.98);
  opacity: 0;
}
.toast-leave-to {
  transform: translateY(-8px) scale(0.98);
  opacity: 0;
}

.toast-content {
  font-size: 0.95rem;
}
</style>
