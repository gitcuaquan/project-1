<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mt-3">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="row gy-2 gx-3">
      <div class="col-lg-3">
        <div class="card p-2 bg-white border-0 shadow-sm">
          <OrderModuleProvider class="mt-1" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card bg-white border-0 shadow-sm">
          <div class="card-header px-1 py-1 px-md-2 bg-white border-0">
            <div class="d-flex mt-2 gap-2 w-100">
              <UiInputSearch />
              <div class="dropdown">
                <button
                  class="btn w-100 text-nowrap d-flex gap-1 align-items-center btn-outline-dark border"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BookOpenText :stroke-width="1" />
                  <span class="d-none d-md-block"> Danh mục</span>
                </button>
                <div
                  class="dropdown-menu ps-2 border-0 shadow dropdown-menu-custom"
                >
                  <div class="p-2 px-1">
                    <UiInputSearch
                      placeholder="Tìm kiếm danh mục"
                      v-model="categoriesKeyword"
                    />
                  </div>
                  <div class="dropdown-list p-3 py-0">
                    <UiTreeView :categories="categoriesFilter" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-1 px-md-2">
            <h3 >Tất cả sản phẩm</h3>
            {{ catSelect }}
            <OrderModuleList />
            <SharedModulePagination class="mt-3" />
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card bg-white border-0 shadow-sm mb-3">
          <div class="card-body">
            <SharedModuleCart />
          </div>
        </div>
        <h6>Mã giảm giá</h6>
        <div class="d-flex flex-column gap-3">
          <div v-for="value in 4" :key="value">
            <SharedModuleCoupon />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh" },
]);

const catSelect = ref<any>(null);
const categoriesKeyword = ref("");
const categoriesFilter = computed(() => {
  if (!categoriesKeyword.value) return categories;
  const filterCategories = (cats: typeof categories): typeof categories => {
    return cats
      .map((cat) => {
        const matchedChildren = cat.children
          ? filterCategories(cat.children)
          : [];
        if (
          cat.name
            .toLowerCase()
            .includes(categoriesKeyword.value.toLowerCase()) ||
          matchedChildren.length
        ) {
          return {
            ...cat,
            children: matchedChildren,
          };
        }
        return null;
      })
      .filter((cat) => cat !== null) as typeof categories;
  };
  return filterCategories(categories);
});

const categories = [
  {
    id: 1000,
    name: "Thuốc",
    children: [
      {
        id: 1001,
        name: "Thuốc kiểm soát đặc biệt",
        children: [
          {
            id: 1002,
            name: "Thuốc dạng phối hợp có chứa dược chất gây nghiện",
          },
          {
            id: 1003,
            name: "Thuốc dạng phối hợp có chứa dược chất hướng thần",
          },
          { id: 1004, name: "Thuốc dạng phối hợp có chứa tiền chất" },
          { id: 1005, name: "Thuốc phóng xạ và đồng vị phóng xạ" },
          { id: 1006, name: "Thuốc cấm sử dụng trong một số ngành , lĩnh vực" },
          { id: 1007, name: "Thuốc Độc" },
        ],
      },
      { id: 1008, name: "Thuốc bảo quản lạnh (2-8 độ)" },
      { id: 1009, name: "Vaxcin" },
      {
        id: 1010,
        name: "Sinh phẩm (trừ men visinh)",
      },
      {
        id: 1011,
        name: "Thuốc kê đơn",
        children: [
          { id: 1012, name: "Thuốc thường kê đơn" },
          { id: 1013, name: "Thuốc thiết yếu kê đơn" },
        ],
      },
      { id: 1014, name: "Thuốc không kê đơn" },
    ],
  },
  {
    id: 2000,
    name: "Thực phẩm chức năng",
    children: [
      {
        id: 2100,
        name: "Hỗ trợ Tiêu hóa",
        children: [
          { id: 2101, name: "Hỗ trợ dạ dày" },
          { id: 2102, name: "Hỗ trợ đại tràng" },
          { id: 2103, name: "Men vi sinh" },
        ],
      },
      { id: 2200, name: "Vitamin và khoáng chất" },
      {
        id: 2300,
        name: "Bổ não",
        children: [
          { id: 2301, name: "An thần" },
          { id: 2302, name: "Dưỡng não" },
        ],
      },
      { id: 2400, name: "Bổ mắt" },
      { id: 2500, name: "Hỗ trợ hô hấp" },
      { id: 2600, name: "Hỗ trợ bệnh mãn tính" },
      { id: 2700, name: "Thanh nhiệt, giải độc, mát gan" },
      { id: 2800, name: "Làm đẹp, giảm cân" },
      { id: 2900, name: "Bổ thận, tăng cường sinh lý nam" },
      { id: 3000, name: "Hỗ trợ xương khớp" },
      { id: 3100, name: "Các loại TPCN khác" },
    ],
  },
  {
    id: 4000,
    name: "Thiết bị y tế",
    children: [
      { id: 4100, name: "Các loại máy đo" },
      { id: 4200, name: "Khẩu trang" },
      { id: 4300, name: "Nước muối, xịt mũi" },
      { id: 4400, name: "Dán hạ sốt" },
      { id: 4500, name: "Que thử các loại" },
      { id: 4600, name: "Bông, băng, gạc, dây truyền dịch" },
      { id: 4700, name: "Vớ y khoa" },
      { id: 4800, name: "Cân" },
    ],
  },
  { id: 8000, name: "Mỹ phẩm" },
  { id: 9000, name: "Chăm sóc cá nhân" },
];
</script>

<style scoped>
.z-height {
  z-index: 999999999;
}
.dropdown-list {
  max-height: 400px;
  overflow-y: auto;
}
.dropdown-menu-custom {
  width: 500px;
  overflow-y: auto;
}
@media screen and (max-width: 768px) {
  .dropdown-menu-custom {
    width: 350px !important;
    margin: auto;
  }
}
</style>
