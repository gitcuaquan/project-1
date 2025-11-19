<template>
  <div class="modal fade" id="modal-register" tabindex="-1">
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Chi tiết đơn hàng</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-0">
          <div
            class="cart-header d-none border d-lg-table-row bg-light fw-semibold"
          >
            <span class="d-lg-table-cell p-3 py-2">Sản phẩm</span>
            <span class="d-lg-table-cell p-3 py-2 text-center">Giá</span>
            <span class="d-lg-table-cell p-3 py-2 text-center text-nowrap"
              >Số lượng</span
            >
            <span class="d-lg-table-cell p-3 py-2 text-end">Tổng</span>
            <span class="d-lg-table-cell p-3 py-2 text-end text-nowrap"
              >Trạng thái</span
            >
          </div>

          <!-- Item -->
          <div
            class="cart-item d-block d-lg-table-row align-middle border rounded-3 p-3 mb-3 bg-white shadow-sm"
          >
            <!-- Product -->
            <div
              class="cart-product mb-lg-0 mb-3 d-flex align-items-center gap-3 d-lg-table-cell p-lg-3"
            >
              <div class="d-flex align-items-center">
                <img
                  src="https://placehold.co/400"
                  width="60"
                  height="60"
                  class="rounded border"
                  alt="Sản phẩm"
                />
                <span class="fw-medium ms-2"
                  >Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed</span
                >
              </div>
            </div>

            <!-- Price -->
            <div
              class="cart-price text-lg-end d-flex mb-2 mb-lg-0 justify-content-between d-lg-table-cell align-middle p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Giá:</span>
              <span class="text-lg-center">200.000đ</span>
            </div>

            <!-- Quantity -->
            <div
              class="cart-qty align-middle d-flex text-lg-center mb-2 mb-lg-0 justify-content-between align-items-center d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Số lượng:</span>
              1
            </div>

            <!-- Total -->
            <div
              class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Tổng:</span>
              <span class="fw-bold text-success text-lg-end">200.000đ</span>
            </div>
            <div
              class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Trạng thái:</span>
              <span class="text-lg-end">
                <span
                  class="badge bg-warning d-flex fw-normal align-items-center gap-1 bg-opacity-10 text-dark border border-warning"
                  ><FolderClock :stroke-width="2" :size="16" />Đang xử lý</span
                >
              </span>
            </div>
          </div>

          <div
            class="cart-item d-block d-lg-table-row align-middle border rounded-3 p-3 mb-3 bg-white"
          >
            <!-- Product -->
            <div
              class="cart-product mb-lg-0 mb-3 d-flex align-items-center gap-3 d-lg-table-cell p-lg-3"
            >
              <div class="d-flex align-items-center">
                <img
                  src="https://placehold.co/400"
                  width="60"
                  height="60"
                  class="rounded border"
                  alt="Sản phẩm"
                />
                <span class="fw-medium ms-2"
                  >Aki Maxdusen Dưỡng Tâm An Hộp 3 Vỉ X 10 Viên - Tapmed</span
                >
              </div>
            </div>

            <!-- Price -->
            <div
              class="cart-price text-lg-end d-flex mb-2 mb-lg-0 justify-content-between d-lg-table-cell align-middle p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Giá:</span>
              <span class="text-lg-center">200.000đ</span>
            </div>

            <!-- Quantity -->
            <div
              class="cart-qty align-middle d-flex text-lg-center mb-2 mb-lg-0 justify-content-between align-items-center d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Số lượng:</span>
              1
            </div>

            <!-- Total -->
            <div
              class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Tổng:</span>
              <span class="fw-bold text-success text-lg-end">200.000đ</span>
            </div>
            <div
              class="cart-total align-middle d-flex mb-2 text-lg-end mb-lg-0 justify-content-between d-lg-table-cell p-lg-3"
            >
              <span class="d-lg-none fw-semibold">Trạng thái:</span>
              <span class="text-lg-end">
                <span
                  class="badge bg-success d-flex fw-normal align-items-center gap-1 bg-opacity-10 text-dark border border-success"
                >
                  <BadgeCheck
                    class="text-white"
                    :fill="'#189847'"
                    :stroke-width="2"
                    :size="18"
                  />
                  Đã hoàn thành
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Modal } from "bootstrap";

const modalInstance = ref<Modal | null>(null);
const { $bootstrap, $appServices } = useNuxtApp();
const props = defineProps<{
  order_id: string;
}>();
const emit = defineEmits(["close", "ticket"]);

onMounted(() => {
  initModal();
  getDetailOrder();
});

function initModal() {
  const modal = document.getElementById("modal-register");
  modalInstance.value = new $bootstrap.Modal(modal!);
  modalInstance.value.show();
  modal!.addEventListener("hidden.bs.modal", () => {
    emit("close");
  });
}
function createTicket() {
  modalInstance.value?.hide();
  emit("ticket");
}

async function getDetailOrder() {
  try {
    const res = await $appServices.order.detail(props.order_id);
    console.log("🚀 ~ getDetailOrder ~ res=>", res);
  } catch (error) {
    console.log("🚀 ~ getDetailOrder ~ error=>", error);
  }
}
</script>

<style></style>
