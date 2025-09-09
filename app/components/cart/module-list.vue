<template>
  <div class="card  rounded overflow-hidden shadow-sm">
    <div class="card-body ">
      <table class="table table-bordered border-0  align-middle m-0">
        <thead>
          <tr>
            <th scope="col" style="width: 50px">#</th>
            <th scope="col" style="width: 70%">Thông tin sản phẩm</th>
            <th scope="col" class="text-nowrap">Đơn giá</th>
            <th scope="col" class="text-nowrap" style="width: 100px">
              Số lượng
            </th>
            <th scope="col" class="text-nowrap">Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="value in 3" :key="value">
            <th scope="row">{{ value }}</th>
            <td>
              <div class="d-flex gap-2">
                <div
                  class="ratio flex-shrink-0 z-low bg-light rounded ratio-1x1"
                  style="width: 70px"
                >
                  <img src="/images/image-error.svg" alt="" />
                </div>
                <div class="d-flex flex-column">
                  <NuxtLink
                    to="/product/3b-lysine"
                    class="text-decoration-none link-dark link-product"
                  >
                    3B Lysine, Linh Chi Đông Trùng Hộp 100 Viên (B1,B6,B12) Nang
                    Mềm , Akofa - 3B Lysine Đông Trùng Trắng
                  </NuxtLink>
                  <small role="button" class="fw-normal text-danger"><Trash2 :size="13" />Xóa</small>
                </div>
              </div>
            </td>
            <td>100.000đ</td>
            <td>
              <UiBtnGroup size="sm" />
            </td>
            <td>100.000đ</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
