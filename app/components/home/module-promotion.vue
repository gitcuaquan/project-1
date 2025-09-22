<template>
  <div class="row g-2">
    <div class="col-lg-8">
      <div id="big-image" class="img-item">
        <img
          src="https://tapmed.vn/storage/image/z5726275886617_2127645f3ceacf59b0a487b2b18bcd591723530689.jpg"
          alt=""
          class="img-fluid w-100"
        />
      </div>
    </div>
    <div class="col-lg-4">
      <div class="row g-2">
        <div class="col-12">
          <div class="img-item">
            <img
              src="https://tapmed.vn/storage/image/1117292255751731513589.png"
              alt=""
              class="obj-fit-cover w-100"
            />
          </div>
        </div>
        <div class="col-12">
          <div class="img-item">
            <img
              src="https://tapmed.vn/storage/image/tapmed1734411099.jpg"
              alt=""
              class="obj-fit-cover w-100"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>

.img-item img{
  height: 210px;
  border-radius: 8px;
  overflow: hidden;
}
@media screen and (min-width: 992px) {
  .img-item img {
    height: 220px;
  }
  #big-image img{
    height: 448px !important;
    border-radius: 8px;
    overflow: hidden;
  }
}
</style>
