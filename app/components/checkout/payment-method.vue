<template>
  <div class="p-3 d-flex flex-column gap-3">
    <div class="mt-2">
      <h5 class="fw-semibold">Thông tin nhận hàng</h5>
      <div class="row g-2">
        <div class="col-12 col-md-6">
          <label for="customerName" class="form-label">Họ và tên</label>
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="Nguyễn Văn A"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="customerPhone" class="form-label">Số điện thoại</label>
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="0123456789"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="customerAddress" class="form-label">Địa chỉ</label>
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="Số nhà, tên đường"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="customerWard" class="form-label">Xã phường</label>
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="Xã phường"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="customerCity" class="form-label">Thành phố</label>
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="Thành phố"
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="customerCity" class="form-label"
            >Tên cơ sở (nếu có)</label
          >
          <input
            type="text"
            class="form-control"
            readonly
            placeholder="Tên cơ sở"
          />
        </div>
      </div>
    </div>
    <div>
      <h5 class="fw-semibold">Phương thức vận chuyển</h5>

      <ul class="list-unstyled">
        <li class="mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="shippingMethod"
              id="shippingMethod1"
              checked
            />
            <label class="form-check-label fw-normal" for="shippingMethod1">
              Nhà xe Hapu và các nhà xe khác
            </label>
          </div>
        </li>
        <li class="mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="shippingMethod"
              id="shippingMethod2"
              checked
            />
            <label class="form-check-label fw-normal" for="shippingMethod2">
              Viettel Post ( giao nhanh)
            </label>
          </div>
        </li>
      </ul>
      <NuxtLink to="/policies" class="mt-3">
        <small class="fw-light fst-italic"
          >Đọc thêm về chính sách vận chuyển</small
        >
      </NuxtLink>
    </div>
    <div>
      <h5 class="fw-semibold">Phương thức thanh toán</h5>
      <ul class="list-unstyled">
        <li class="mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paymentMethod1"
              checked
            />
            <label class="form-check-label fw-normal" for="paymentMethod1">
              Thanh toán khi nhận hàng (COD)
            </label>
          </div>
        </li>
        <li class="mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="paymentMethod"
              id="paymentMethod2"
              checked
            />
            <label class="form-check-label fw-normal" for="paymentMethod2">
              Chuyển khoản ngân hàng
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.form-label {
  font-weight: 400;
  font-size: 0.875rem;
  color: #333;
}
</style>
