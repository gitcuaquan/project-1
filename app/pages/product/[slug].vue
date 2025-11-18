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
            {{ detailProduct?.ten_vt || "Tên sản phẩm không xác định" }}
          </h1>

          <!-- Rating and Reviews -->
          <div class="d-flex align-items-center gap-2 mb-3">
            <span class="text-muted me-2"
              >Mã sản phẩm:
              <b>{{ detailProduct?.ma_vt || "00000000" }}</b></span
            >
            <!-- <div class="me-3 d-flex gap-1 align-items-center">
              <Star :size="16" class="text-warning" :stroke-width="1" />
              <span class="fw-bold">5</span>
            </div> -->
            <!-- <span class="text-muted me-3">5 đánh giá</span>
            <span class="text-muted">21 bình luận</span> -->
          </div>


          <!-- Price -->
          <div class="price-section mb-4">
            <div class="d-flex align-items-center mb-2">
              <h2 class="h2 text-primary fw-bold mb-0 me-3">
                {{
                  (detailProduct?.gia_nt2 || 0) > 0
                    ? formatCurrency(detailProduct?.gia_nt2 || 0)
                    : "Liên hệ"
                }}
              </h2>
              <span v-if="(detailProduct?.gia_nt2 || 0) > 0" class="text-muted"
                >/ Hộp</span
              >
            </div>
            <p
              v-if="detailProduct?.gia2"
              class="text-muted text-decoration-line-through mb-3"
            >
              {{ formatCurrency(detailProduct?.gia2 || 0) }}
            </p>
          </div>
          <div id="action" class="row mt-3 bg-white align-items-end pb-3 g-3">
            <div class="col-md-3">
              <label class="form-label fw-bold">Số lượng</label>
              <br />
              <UiBtnGroup />
            </div>
            <div class="col-md-6">
              <button id="add-to-cart" class="btn btn-primary px-5">
                Thêm vào giỏ hàng <ShoppingBag />
              </button>
            </div>
          </div>
          <div class="ingredients-section">
            <h6 class="fw-bold mb-3">Mô tả sản phẩm</h6>
            <p class="small text-muted line-break-container">
              {{ detailProduct?.mo_ta_san_pham }}
            </p>
          </div>
          <!-- Product Details Table -->
          <div class="table-responsive my-3">
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <td class="text-muted py-2" style="width: 200px">
                    Đơn vị tính
                  </td>
                  <td class="py-2">
                    {{ detailProduct?.dvt }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Thành phần</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.thanh_phan }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Công dụng</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.cong_dung }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Cách dùng</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.cach_dung }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Tác dụng phụ</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.tac_dung_phu }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Bảo quản</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.bao_quan }}
                  </td>
                </tr>
                <tr>
                  <td class="text-muted py-2">Lưu ý</td>
                  <td class="py-2 line-break-container">
                    {{ detailProduct?.luu_y }}
                  </td>
                </tr>
              </tbody>
            </table>
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
import type { ITemsTapmed } from "~/model";
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
const { data: detailProduct } = await useAsyncData(
  "product-details",
  async () => {
    const slug = route.params.slug as string;
    return await $appServices.items.getItemById(slug);
  }
);

// 🧠 Reactive useHead — sẽ tự update khi detailProduct.value đổi
useHead(() => ({
  title: detailProduct.value
    ? `${detailProduct.value.ten_vt} - Mua ngay tại Sỉ Dược`
    : "Chi tiết sản phẩm - Sỉ Dược",
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
.line-break-container {
  white-space: pre-line;
}
</style>
