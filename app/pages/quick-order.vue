<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container px-2 mt-3">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="row gy-2 gx-3">
      <!-- <div class="col-lg-3 d-none d-lg-block">
        <div class="card sticky-custom p-2 bg-white border-0 shadow-sm">
          <OrderModuleProvider class="mt-1" />
        </div>
      </div> -->
      <div class="col-lg-8">
        <div class="card bg-white border-0 shadow-sm">
          <div
            class="card-header shadow-sm  px-1 py-1 px-md-2 bg-white border-0"
          >
            <div class="row g-2">
              <div class="col-12">
                <UiInputSearch v-model="keyword" />
              </div>
              <div class="col-6">
                <div class="dropdown">
                  <button
                    class="btn w-100 px-2 text-nowrap d-flex gap-1 align-items-center border"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <BookOpenText
                      :stroke-width="1.5"
                      class="text-muted"
                      :size="16"
                    />
                    <small class="text-dark text-opacity-50 user-select-none">
                      Danh mục sản phẩm
                    </small>
                  </button>
                  <div class="dropdown-menu ps-2 border-0 shadow dropdown-menu-custom">
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
              <div class="col-6">
                <div class="dropdown">
                  <div
                    data-bs-toggle="dropdown"
                    class="form-control d-flex align-items-center gap-2"
                  >
                    <House :stroke-width="1.5" class="text-muted" :size="16" />
                    <small class="text-dark text-opacity-50 user-select-none">
                      Nhà cung cấp
                    </small>
                    <!-- <span class="text-nowrap text-truncate">Công ty TNHH MTV Dược phẩm DHG - VIỆT NAM</span> -->
                  </div>
                  <div
                    class="dropdown-menu border-0 shadow  dropdown-menu-custom dropdown-menu-end p-2"
                  >
                    <OrderModuleProvider class="mt-1" />
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex tag-scroll mt-2 flex-nowrap gap-2">
              <div
                class="text-uppercase badge d-flex gap-1 align-items-center bg-primary bg-opacity-10 text-primary"
              >
                SẢN PHẨM AIKYA <Tags :size="16" :stroke-width="1.5" />
              </div>
              <div
                class="text-uppercase badge d-flex gap-1 align-items-center bg-primary bg-opacity-10 text-primary"
              >
                Sản Phẩm TAPMED <Tags :size="16" :stroke-width="1.5" />
              </div>
              <div
                class="text-uppercase badge d-flex gap-1 align-items-center bg-primary bg-opacity-10 text-primary"
              >
                GIÁ TỐT TRONG TUẦN <Tags :size="14" :stroke-width="1.5" />
              </div>
              <div
                class="text-uppercase badge d-flex gap-1 align-items-center bg-primary bg-opacity-10 text-primary"
              >
                GIÁ TỐT TRONG THÁNG <Tags :size="14" :stroke-width="1.5" />
              </div>
            </div>
          </div>
          <div class="card-body px-1 px-md-2">
            <OrderModuleList
              :loading="pageState.loading"
              :list="pageState.listProduct.getData"
            />
            <SharedModulePagination
              v-if="pageState.listProduct.getData?.length"
              class="mt-3"
              :pagination="pageState.listProduct.pagination"
              @page-change="
                paramsListProduct.PageIndex = $event;
                getListProduct();
              "
            />
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="sticky-custom">
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
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";
import type { BaseParameters, BaseResponse, ITemsTapmed } from "~/model/SSE";
const { $appServices } = useNuxtApp();
const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh" },
]);

const keyword = useDebouncedRef("", 500);
const paramsListProduct = ref<BaseParameters>({
  PageIndex: 1,
  PageSize: 10,
  search: keyword.value,
});
const pageState = reactive({
  loading: true,
  listProduct: {} as BaseResponse<ITemsTapmed>,
});
watch(keyword, (newVal) => {
  paramsListProduct.value.search = newVal;
  getListProduct();
});

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

async function getListProduct() {
  pageState.loading = true;
  try {
    const response = await $appServices.items.getItems(paramsListProduct.value);
    pageState.listProduct = response;
  } catch (error) {
    console.error("Error fetching product list:", error);
  } finally {
    pageState.loading = false;
  }
}
getListProduct();
</script>

<style scoped>
.top-custom {
  top: 48px;
  z-index: 1 !important;
}

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
  .top-custom {
    top: 0;
  }

  .dropdown-menu-custom {
    width: 350px !important;
    margin: auto;
  }
}
.sticky-custom {
  position: sticky;
  top: 60px;
  z-index: 0;
}
.badge {
  font-size: 0.6rem;
  padding: 0.3rem 0.5rem;
  font-weight: 500;
  cursor: pointer;
}
.tag-scroll {
  overflow-x: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  padding-bottom: 5px;
  padding-top: 5px;
}
</style>
