<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <!-- Main Product Section -->
    <div class="row bg-white pt-3 rounded">
      <!-- Product Images -->
      <div class="col-lg-5 col-md-6">
        <div class="sticky-top" style="top: 50px; z-index: 0">
          <ProductModuleImg :images="productImages" />

          <p class="text-muted mt-2 small">
            Màu mã sản phẩm có thể thay đổi theo lô hàng
          </p>
        </div>
      </div>

      <!-- Product Info -->
      <div class="col-lg-7 col-md-6">
        <div class="product-info">
          <!-- Brand -->
          <p class="text-muted mb-2">
            Thương hiệu: <span class="text-primary fw-bold">VKENKO</span>
          </p>

          <!-- Product Title -->
          <h1 class="h3 fw-bold mb-3 text-dark">
            VIÊN UỐNG HỖ TRỢ CẢI THIỆN TINH TRẠNG LO ÂU, CẢI THIỆN GIẤC NGỦ
            ASHAMI GOLD VKENKO 60V
          </h1>

          <!-- Rating and Reviews -->
          <div class="d-flex align-items-center gap-2 mb-3">
            <span class="text-muted me-2">00049150</span>
            <div class="me-3 d-flex gap-1 align-items-center">
              <Star :size="16" class="text-warning" :stroke-width="1" />
              <span class="fw-bold">5</span>
            </div>
            <span class="text-muted me-3">5 đánh giá</span>
            <span class="text-muted">21 bình luận</span>
          </div>

          <!-- Price -->
          <div class="price-section mb-4">
            <div class="d-flex align-items-center mb-2">
              <h2 class="h2 text-primary fw-bold mb-0 me-3">937.500đ</h2>
              <span class="text-muted">/ Hộp</span>
            </div>
            <p class="text-muted text-decoration-line-through mb-3">
              1.250.000đ
            </p>
          </div>

          <!-- Product Details Table -->
          <div class="table-responsive mb-4">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-muted py-2" style="width: 40%">
                    Chọn đơn vị tính
                  </td>
                  <td class="py-2">
                    <button class="btn btn-outline-primary btn-sm rounded-pill">
                      Hộp
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Tên chính hãng</td>
                  <td class="py-2">Thực phẩm bảo vệ sức khỏe ASHAMI GOLD</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Danh mục</td>
                  <td class="py-2">
                    <span class="badge bg-light text-primary"
                      >Thần kinh não</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Số đăng ký</td>
                  <td class="py-2">548/2025/ĐKSP</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Dạng bào chế</td>
                  <td class="py-2">Viên nang cứng</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Quy cách</td>
                  <td class="py-2">Hộp 60 Viên</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Xuất xứ thương hiệu</td>
                  <td class="py-2">Nhật Bản</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Nhà sản xuất</td>
                  <td class="py-2">GENSEI CO.,LTD</td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Nước sản xuất</td>
                  <td class="py-2">Nhật Bản</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Certificate Link -->
          <div class="mb-4">
            <a href="#" class="text-primary text-decoration-none">
              <i class="fas fa-certificate me-1"></i>
              Xem giấy công bố sản phẩm
            </a>
          </div>

          <!-- Ingredients -->
          <div class="ingredients-section">
            <h6 class="fw-bold mb-3">Thành phần</h6>
            <p class="small text-muted">
              Hoa cúc tím, Y-amino-butyric acid,
              <span class="text-primary">Chùm ngây</span>,
              <span class="text-primary">L-theanine</span>, Chiết xuất lá dâu
              tằm, <span class="text-primary">Hoa hiên</span>,
              <span class="text-primary">Glycine</span>,
              <span class="text-primary">L-Tryptophan</span>, Dầu cá tinh luyện,
              Dầu cây Ban Âu, <span class="text-primary">Tầm sen</span>, Rễ nữ
              lang, Hoa cúc vàng, Lò hội, Bột chiết xuất từ hạt đậu mèo rừng, Lá
              la bô ma, <span class="text-primary">Nhan Sâm</span>,
              <span class="text-primary">Đông trùng hạ thảo</span>,
              <span class="text-primary">Vitamin B1</span>,
              <span class="text-primary">Vitamin B2</span>, Vitamin B6, Chiết
              xuất hoa nghệ tây
            </p>
          </div>

          <div
            id="action"
            class="row mt-3 bg-white align-items-center pb-3 g-3"
          >
            <div class="col-md-5">
              <div class="d-flex align-items-center gap-3">
                <div>Chọn số lượng</div>
                <UiBtnGroup />
              </div>
            </div>
            <div class="col-md-6">
              <button id="add-to-cart" class="btn btn-primary btn-lg px-5">
                Thêm vào giỏ hàng <ShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Main Product Section -->
    <h5 class="mt-5 text-capitalize">Có thể bạn cũng thích</h5>
    <ProductModuleSliderItem />
  </div>
</template>

<script setup lang="ts">
import type { ProjectConfig } from "~/model";
import type { ITemsTapmed } from "~/model/SSE";
const { $appServices } = useNuxtApp();
const route = useRoute();
const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh", to: "/quick-order" },
  { label: "Thần kinh não" },
]);


// Product images
const productImages = ref([
  "https://placehold.co/800x800/000000/5682B1.png", // Main product image
  "https://placehold.co/800x800/000000/FFE8DB.png", // Package front
  "https://placehold.co/800x800/000000/AE75DA.png", // Package back with details
  "https://placehold.co/800x800/000000/309272.png", // Certificate or additional info
  "https://placehold.co/800x800/000000/0046FF.png", // Certificate or additional info
  "https://placehold.co/800x800/000000/1E93AB.png", // Certificate or additional info
]);

// SEO Meta
const { data: detailProduct } = await useAsyncData("product-details", async () => {
  const slug = route.params.slug as string;
  return await $appServices.items.getItemById(slug);
});

// 🧠 Reactive useHead — sẽ tự update khi detailProduct.value đổi
useHead(() => ({
  title: detailProduct.value
    ? `${detailProduct.value.ten_vt} - Mua ngay tại TAPMED`
    : "Chi tiết sản phẩm - TAPMED",
  meta: [
    {
      name: "description",
      content: detailProduct.value?.ten_vt || "",
    },
  ],
}));
</script>

<style scoped>
.price-section .h2 {
  font-size: 2.5rem;
}

.badge.bg-danger {
  background: linear-gradient(45deg, #dc3545, #ff6b7a) !important;
}

.table td {
  border: none;
  padding: 0.75rem 0.5rem;
}

.table tr:not(:last-child) {
  border-bottom: 1px solid #f8f9fa;
}

.ingredients-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border-left: 4px solid var(--bs-primary);
}

@media (max-width: 768px) {
  .price-section .h2 {
    font-size: 2rem;
  }

  .table-responsive {
    font-size: 0.9rem;
  }
  #add-to-cart {
    width: 100%;
  }
  #action {
    position: sticky;
    bottom: 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
}
/* Hide number input arrows for Chrome, Safari, Edge, Opera */
.input-number::-webkit-outer-spin-button,
.input-number::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Hide number input arrows for Firefox */
.input-number[type="number"] {
  -moz-appearance: textfield;
}
.input-number {
  width: 45px;
}
.small {
  font-size: 0.875rem;
}
</style>
