<template>
  <div class="card bg-white overflow-hidden rounded-4 border-0 shadow-sm">
    <div class="ratio ratio-16x9">
      <img
        src="https://tapmed.vn/storage/image/76,000%C4%91%C4%91%20(B%E1%BA%A3n%20thuy%E1%BA%BFt%20tr%C3%ACnh)%20(16)1725852981.png"
        class="object-fit-contain"
        alt=""
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">
        Mẹo Vặt Chăm Sóc Sức Khỏe Mùa Thu Cùng Tapmed 🍂
      </h5>
      <p class="card-text text-truncate-2">
        Mùa thu là thời điểm chuyển giao giữa cái nóng oi bức của mùa hè và cái
        lạnh se se của mùa đông. Đây cũng là thời điểm mà cơ thể chúng ta cần
        được chăm sóc đặc biệt để duy trì sức khỏe và năng lượng. Dưới đây là
        một số mẹo vặt giúp bạn chăm sóc sức khỏe mùa thu hiệu quả cùng Tapmed.
      </p>
      <nuxt-link to="/news/demo-page" class="stretched-link">
        Chi tiết <MoveRight :size="16" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.text-truncate-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card {
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}
</style>
