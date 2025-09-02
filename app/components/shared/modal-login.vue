<template>
  <div class="modal fade" id="modal-login" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text-end">
            <button
              data-bs-dismiss="modal"
              class="btn btn-light ms-auto btn-sm rounded-circle px-1 shadow-sm"
            >
              <X :stroke-width="1" />
            </button>
          </div>
          <div class="text-center mb-3">
            <img src="/images/logo-tapmed.png" style="width: 200px" alt="" />
            <h6 class="modal-title mt-2 text-capitalize" id="modal-loginLabel">
              Đăng nhập thành viên
            </h6>
          </div>
          <form>
            <div class="mb-3">
              <label for="phone" class="form-label">Số điện thoại</label>
              <input type="phone" class="form-control" required id="phone" placeholder="Nhập số điện thoại" />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Mật khẩu</label>
              <input type="password" class="form-control" required id="password" placeholder="Nhập mật khẩu" />
            </div>
          </form>
        </div>
        <div class="modal-footer justify-content-center border-0">
          <button type="button" class="btn btn-primary w-50">Đăng nhập</button>
        </div>
        <p class="text-center mb-3">
          Bạn chưa có tài khoản? <a role="button" @click="openRegister" class="text-link">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Modal } from "bootstrap";
const modalInstance = ref<Modal | null>(null);

const dataInject = inject< {
    showModal: {
        login: boolean;
        register: boolean;
    };
}>("data");
const emit = defineEmits(["close"]);

onMounted(() => {
  initModal();
});

function initModal() {
  const modal = document.getElementById("modal-login");
  modalInstance.value = new Modal(modal!);
  modalInstance.value.show();
  modal!.addEventListener("hidden.bs.modal", () => {
    emit("close");
  });
}

function openRegister() {
  dataInject!.showModal.register = true;
  modalInstance.value?.hide();
}
</script>

<style></style>
