<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row py-3">
      <div class="col-4">
        <div class="account-sidebar bg-white rounded-3 shadow-sm p-4">
          <div class="mb-3">
            <h5 class="mb-1">Tài khoản của bạn</h5>
            <div class="text-muted small">Alex John, Email: alexjohn@gmail.com</div>
          </div>
          <ul class="list-unstyled mb-0">
            <li class="account-item active mb-1 d-flex align-items-center p-2 rounded">
              <Truck class="me-2 text-primary" size="20" />
              <span>Đơn hàng của tôi</span>
            </li>
            <li class="account-item mb-1 d-flex align-items-center p-2 rounded">
              <MapPin class="me-2 text-primary" size="20" />
              <span>Địa chỉ của bạn</span>
            </li>
            <li class="account-item mb-1 d-flex align-items-center p-2 rounded">
              <CreditCard class="me-2 text-primary" size="20" />
              <span>Thanh toán</span>
            </li>
            <li class="account-item mb-1 d-flex align-items-center p-2 rounded">
              <Archive class="me-2 text-primary" size="20" />
              <span>Đơn hàng đã lưu</span>
            </li>
            <li class="account-item mb-1 d-flex align-items-center p-2 rounded">
              <Heart class="me-2 text-primary" size="20" />
              <span>Sản phẩm yêu thích</span>
            </li>
            <li class="border-top my-2"></li>
            <li class="account-item mb-1 d-flex align-items-center p-2 rounded">
              <MessageCircle class="me-2 text-primary" size="20" />
              <span>Hỗ trợ khách hàng</span>
            </li>
            <li class="account-item d-flex align-items-center p-2 rounded">
              <LogOut class="me-2 text-primary" size="20" />
              <span>Đăng xuất</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";


const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Giỏ hàng", to: "/cart" },
  { label: "Đơn hàng của bạn" },
]);
</script>

<style></style>
