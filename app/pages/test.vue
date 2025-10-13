<template>
  <div>
    <button @click="toasts.success('Thêm sản phẩm thành công!')">
      Show Success Toast
    </button>
    <button @click="toasts.error('Thêm sản phẩm thất bại!')">
      Show Error Toast
    </button>
    <button @click="toasts.loading('Đang tải...')">
      Show Loading Toast
    </button>
  </div>
</template>

<script lang="ts" setup>
const toasts = useToast();
</script>

<style></style>
