<template>
  <div class="modal fade" id="modal-register" tabindex="-1">
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-body">
          <div class="position-absolute top-0 end-0 m-3">
            <button
              data-bs-dismiss="modal"
              class="btn btn-light ms-auto btn-sm rounded-circle px-1 shadow-sm"
            >
              <X :stroke-width="1" />
            </button>
          </div>
          <div class="text-center mb-3">
            <!-- <img src="/images/logo-tapmed.png" style="width: 200px" alt="" /> -->
            <h4 class="modal-title mt-2 text-capitalize" id="modal-loginLabel">
              Đăng ký thành viên
            </h4>
            <p class="text-muted">
              <small
                >Đăng ký làm thành viên để nhận được nhiều khuyến mãi hấp dẫn và
                theo dõi đơn hàng của bạn.</small
              >
            </p>
          </div>
          <form class="row gy-2 gx-3">
            <div class="col-12 col-md-6">
              <label for="name" class="form-label">Họ và tên</label>
              <input
                type="text"
                class="form-control"
                required
                id="name"
                placeholder="Nhập họ và tên đầy đủ của bạn"
              />
            </div>
            <div class="col-md-6 col-12">
              <label for="address" class="form-label"
                >Số căn cước công dân</label
              >
              <input
                type="text"
                class="form-control"
                required
                id="address"
                placeholder="Nhập số căn cước công dân"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="businessName" class="form-label">Tên cơ sở</label>
              <input
                type="text"
                class="form-control"
                required
                id="businessName"
                placeholder="Nhập tên cơ sở đang kinh doanh"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="phone" class="form-label">Số điện thoại</label>
              <input
                type="phone"
                class="form-control"
                required
                id="phone"
                placeholder="Nhập số điện thoại"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="password" class="form-label">Mật khẩu</label>
              <input
                type="password"
                class="form-control"
                required
                id="password"
                placeholder="Nhập mật khẩu"
              />
            </div>
            <div class="col-12 col-md-6">
              <label for="city" class="form-label">Thành phố</label>
              <SharedAddressCity v-model="citySelect" />
            </div>
            <div class="col-12 col-md-6">
              <label for="ward" class="form-label">Xã phường</label>
              <SharedAddressWard :city-code="citySelect?.code" v-model="wardSelect" />
            </div>
            <div class="col-md-6 col-12">
              <label for="address" class="form-label">Địa chỉ</label>
              <input
                type="text"
                class="form-control"
                required
                id="address"
                placeholder="Nhập địa chỉ"
              />
            </div>
          </form>
          <!-- Giấy tờ liên quan -->
          <div class="row justify-content-center mt-2 g-3">
            <div class="col-6 col-md-4">
              <SharedModuleUpload
                placeholder="Tải lên chứng chỉ hành nghề dược"
              />
            </div>
            <div class="col-6 col-md-4">
              <SharedModuleUpload
                placeholder="Tải lên giấy chứng nhận đăng ký kinh doanh"
              />
            </div>
            <div class="col-6 col-md-4">
              <SharedModuleUpload
                placeholder="Tải lên giấy chứng nhận đủ điều kiện kinh doanh dược"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center border-0">
          <button type="button" class="btn btn-primary px-5">Đăng ký</button>
        </div>
        <p class="text-center mb-3">
          Bạn đã là thành viên?
          <a @click="openLogin" class="text-link" role="button">
            Đăng nhập ngay
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Modal } from "bootstrap";
import type { ProjectConfig } from "~/model";
import { Customer } from "~/model/SSE";
const modalInstance = ref<Modal | null>(null);

const emit = defineEmits(["close"]);
const { togglePopupLogin } = useAuth();

// ========================== STATE ==========================
const citySelect = ref<ProjectConfig.CitySetting | null>(null);
const wardSelect = ref<ProjectConfig.DistrictSetting | null>(null);

const custumerInfo = ref<Customer>( new Customer({}) );


// ========================== LIFECYCLE ==========================

onMounted(() => {
  initModal();
});

function initModal() {
  const modal = document.getElementById("modal-register");
  modalInstance.value = new Modal(modal!);
  modalInstance.value.show();
  modal!.addEventListener("hidden.bs.modal", () => {
    emit("close");
  });
}
function openLogin() {
  togglePopupLogin();
  modalInstance.value?.hide();
}
// ========================== FUNCTIONS ==========================


</script>

<style></style>
