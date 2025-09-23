<template>
  <div class="account-sidebar bg-white rounded-3 shadow-sm p-2 p-lg-3">
    <div class="d-flex gap-2 align-items-center">
      <div>
        <h5 class="mb-1">Tài khoản của bạn</h5>
        <div class="text-muted small">Tạ Quân, Email: taquan@gmail.com</div>
      </div>
      <button
        class="btn d-lg-none ms-auto btn-sm"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseMenuAuth"
      >
        <Menu />
      </button>
    </div>
    <ul
      class="list-unstyled mb-0 mt-3 collapse d-lg-block"
      id="collapseMenuAuth"
    >
      <template v-for="(item, idx) in sidebarItems" :key="idx">
        <li
          :class="[
            'account-item mb-1 d-flex align-items-center position-relative p-2 rounded',
            route.path === item.to ? 'active' : '',
          ]"
        >
          <nuxt-link
            :to="item.to"
            class="text-decoration-none stretched-link text-dark d-flex align-items-center w-100"
          >
            <component :is="item.icon" class="me-2 text-primary" :size="20" />
            <span>{{ item.label }}</span>
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {
  Archive,
  CreditCard,
  LogOut,
  MessageCircle,
  Truck,
  User,
} from "lucide-vue-next";
const sidebarItems = [
  { icon: Truck, label: "Đơn hàng của tôi", to: "/auth" },
  { icon: User, label: "Hồ sơ khách hàng", to: "/auth/info" },
  { icon: MessageCircle, label: "Hỗ trợ khách hàng", to: "/auth/ticket" },
  { icon: LogOut, label: "Đăng xuất", to: "/" },
];
const route = useRoute();
</script>

<style scoped>
.account-item {
  cursor: pointer;
  border-left: 4px solid transparent;
  transition: background-color 0.3s, border-left 0.3s;
}
.active {
  background-color: #f8f9fa;
  font-weight: 500;
  border-left: 4px solid rgba(var(--bs-primary-rgb), 0.5);
}
</style>
