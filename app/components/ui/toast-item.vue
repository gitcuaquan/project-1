<template>
  <div :class="['alert p-0', toastClass(props.toast.type)]" role="alert">
    <div class="d-flex p-2 align-items-start gap-2">
      <BadgeCheck :size="16" v-if="props.toast.type === 'success'" />
      <Bug :size="16" v-if="props.toast.type === 'error'" />
      <div
        v-if="props.toast.type === 'loading'"
        class="spinner-border spinner-border-sm"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div class="flex-grow-1">{{ props.toast.message }}</div>
    </div>
    <div v-if="props.toast.type !== 'loading'" class="progress" style="height: 4px">
      <div 
        :class="['progress-bar', 'progress-bar-animated',`bg-opacity-50 bg-${(props.toast.type as string) === 'error' ? 'danger' : (props.toast.type as string) === 'loading' ? 'info' : 'success'}`]"
        role="progressbar"
        :style="{ width: progress + '%' }"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Removed incorrect import of setInterval

const props = defineProps<{
  toast: Toast;
}>();

const progress = ref(0);
onMounted(() => {
  if (props.toast.type !== "loading") {
    const interval = window.setInterval(() => {
      progress.value += 1;
      if (progress.value >= 100) {
        clearInterval(interval);
      }
    }, ((props.toast.duration||0) - 500 || 3000) / 100);
  } else {
    progress.value = 100;
  }
});




function toastClass(type: string | undefined) {
  switch (type) {
    case "error":
      return "alert-danger ";
    case "loading":
      return "alert-info ";
    default:
      return "alert-success ";
  }
}
</script>

<style scoped>
.alert {
  overflow: hidden;
  font-size: 0.8rem;
  min-width: 250px;
}
</style>
