<template>
  <div class="modal fade" id="modal-register" tabindex="-1">
    <div
      class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="mb-0">Thanh toán nhanh</h5>
          <button
            data-bs-dismiss="modal"
            class="btn btn-light ms-auto btn-sm rounded-circle px-1 shadow-sm"
          >
            <X :stroke-width="1" />
          </button>
        </div>
        <div class="modal-body" style="height: 70vh">
          <section class="mb-3">
            <h6 class="text-dark">Thông tin khách hàng :</h6>
            <!-- {{ user }} -->
            <table class="table m-0 table-borderless table-sm">
              <tbody>
                <tr>
                  <td class="fw-normal text-muted" style="width: 130px">
                    Họ và tên
                  </td>
                  <td>: {{ user?.ten_kh }}</td>
                </tr>
                <tr>
                  <td class="fw-normal text-muted">Số điện thoại</td>
                  <td>: {{ user?.dien_thoai }}</td>
                </tr>
                <tr>
                  <td class="fw-normal text-muted">Địa chỉ</td>
                  <td>
                    : {{ user?.dia_chi }} - {{ user?.ten_xa_phuong }} -
                    {{ user?.ten_thanh_pho }}
                  </td>
                </tr>
              </tbody>
            </table>
            <small class="text-muted fw-light fst-italic">
              Theo mặc định các thông tin trên được lấy từ hồ sơ khách hàng và
              đã được xác nhận, các thông tin này sẽ được làm căn cứ cho địa chỉ
              giao hàng .
            </small>
          </section>
          <section>
            <h6 class="text-dark">Chi tiết đơn hàng :</h6>
            <CartModuleList />
          </section>
        </div>
        <div class="modal-footer">
          <button
            @click="createOrder"
            class="btn btn-primary w-100 fw-semibold"
          >
            Xác nhận thanh toán
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Modal } from "bootstrap";
import { TapmedOrder, TapmedOrderHeader } from "~/model/item/ITemsTapmed";

const emit = defineEmits<{
  (e: "close"): void;
}>();

const { user } = useAuth();
const { $appServices } = useNuxtApp();

// order để post
const order = ref<TapmedOrder>(
  new TapmedOrder({
    details: [],
    header: new TapmedOrderHeader({
      ma_kh: user.value?.ma_kh || "",
      so_dt: user.value?.dien_thoai || "",
      dia_chi: user.value?.dia_chi || "",
      ten: user.value?.ten_kh || "",
    }),
  })
);
const modalInstance = ref<Modal | null>(null);

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
function createOrder() {
  order.value.details = useCart().cart.value.map((item) => ({
    ma_vt: item.ma_vt,
    so_luong: item.quantity || 0,
    gia_nt2: item.gia_nt2 || 0,
  }));
  $appServices.order.createOrder(order.value).then((res) => {
    console.log("🚀 ~ createOrder ~ res=>", res);
  });
}
</script>

<style></style>
