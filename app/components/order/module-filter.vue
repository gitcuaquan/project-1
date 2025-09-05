<template>
  <div class="d-flex flex-column align-items-center gap-3">
    <div class="position-relative w-100 border rounded overflow-hidden">
      <input
        type="text"
        class="form-control border-0 shadow-none w-100"
        placeholder="Tìm kiếm sản phẩm"
      />
      <div class="position-absolute bg-white top-50 end-0 translate-middle-y p-2 pe-3 ">
        <Search :size="16" />
      </div>
    </div>
    <div class="text-start w-100">
      <label class="">
        Danh mục sản phẩm
      </label>
      <div>
        
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
