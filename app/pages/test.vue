<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-4">
        <div class="input-group flex-nowrap">
          <select name="" class="form-select w-auto flex-grow-0" id="">
            <option value="1">Nhà sản xuất</option>
            <option value="1">Nguồn gốc</option>
            <option value="1">Phân loại</option>
            <option value="1">Phân nhóm</option>
            <option value="1">Công dụng</option>
          </select>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "blank",
});
</script>
