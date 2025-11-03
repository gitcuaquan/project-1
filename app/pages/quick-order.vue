<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container px-2 mt-3">
    <div class="row">
      <div class="col-12"></div>
    </div>
    <div class="row gy-2 gx-3">
      <div class="col-lg-8">
        <div class="card bg-white border-0 shadow-sm">
          <div
            class="card-header shadow-sm px-1 py-1 px-md-2 bg-white border-0"
          >
            <div class="row g-2 align-items-center">
              <div class="col-lg-6 order-2">
                <UiInputSearch class="h-100" v-model="keyword" />
              </div>
              <div class="col-lg-6 order-1 order-lg-2">
                <div class="d-flex gap-2">
                  <select name="" class="form-select form-select-sm" id="">
                    <option value="">Sắp xếp theo: Mặc định</option>
                    <option value="">Sắp xếp theo: Tên A-Z</option>
                    <option value="">Sắp xếp theo: Tên Z-A</option>
                    <option value="">Sắp xếp theo: Giá thấp đến cao</option>
                    <option value="">Sắp xếp theo: Giá cao đến thấp</option>
                  </select>
                  <button
                    @click="showMoreFilters = true"
                    class="btn-sm btn btn-light shadow-sm border"
                  >
                    <Funnel :size="16" />
                  </button>
                </div>
              </div>
              <!-- <div class="col-lg-7">
                <div class="input-group w-100 input-group-sm h-100 flex-nowrap">
                  <select v-model="filterNhomVt.filters[0]!.valueSearch" class="form-select w-auto flex-grow-0" id="">
                    <option
                      v-for="value in loaiNhomVatTuOptions"
                      :value="value.value.toString()"
                    >
                      {{ value.label }}
                    </option>
                  </select>
                  <select class="form-select" >
                    <option
                      v-for="value in listNhomVatTu"
                    >
                      {{ value.ten_nh }}
                    </option>
                  </select>
                </div>
              </div> -->
              <!-- <div class="col-6">
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
                  </div>
                  <div
                    class="dropdown-menu border-0 shadow  dropdown-menu-custom dropdown-menu-end p-2"
                  >
                    <OrderModuleProvider class="mt-1" />
                  </div>
                </div>
              </div> -->
            </div>

            <!-- <div class="d-flex tag-scroll mt-2 flex-nowrap gap-2">
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
            </div> -->
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
                filterListProduct.pageIndex = $event;
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
  <ClientOnly>
    <OrderModuleFilter
      :show="showMoreFilters"
      @close="showMoreFilters = false"
      @select="onChangeNhomVt"
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";
import { Item } from "~/model/Item";
import {
  BodyFilter,
  FilterItem,
  OperatorType,
  type BaseParameters,
  type BaseResponse,
  type ITemsTapmed,
} from "~/model";
const { $appServices } = useNuxtApp();

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Đặt hàng nhanh" },
]);

const showMoreFilters = ref(false);
const keyword = useDebouncedRef("", 500);

const pageState = reactive({
  loading: true,
  listProduct: {} as BaseResponse<ITemsTapmed>,
});

const filterListProduct = ref(
  new BodyFilter<ITemsTapmed>({
    pageIndex: 1,
    pageSize: 7,
    filters: [
      new FilterItem<ITemsTapmed>({
        filterValue: "ten_vt",
        operatorType: OperatorType.Contains,
        valueSearch: keyword.value,
      }),
      new FilterItem<ITemsTapmed>({
        filterValue: "ma_nh",
        operatorType: OperatorType.Equal,
        valueSearch: "",
      }),
      new FilterItem<ITemsTapmed>({
        filterValue: "loai_nh",
        operatorType: OperatorType.Equal,
        valueSearch: "",
      }),
    ],
  })
);

const filterNhomVt = ref(
  new BodyFilter<Item.NhomVatTu>({
    pageIndex: 1,
    pageSize: 1000,
    filters: [
      new FilterItem<Item.NhomVatTu>({
        filterValue: "loai_nh",
        operatorType: OperatorType.Contains,
        valueSearch: Item.LoaiNhomVatTu.NguonGoc.toString(),
      }),
    ],
  })
);

const filterNhaSX = ref(
  new BodyFilter<any>({
    pageIndex: 1,
    pageSize: 1000,
  })
);
const listNhomVatTu = ref<Item.NhomVatTu[]>([]);

watch(keyword, (newVal) => {
  filterListProduct.value.setValue("ten_vt", newVal, OperatorType.Contains);
  filterListProduct.value.pageIndex = 1;
  getListProduct();
});

watch(
  () => filterNhomVt.value,
  (val) => {
    getNhomVatTu();
  },
  { deep: true }
);

// ======================== HOOKS ========================
onBeforeMount(() => {
  getListProduct();
  getNhomVatTu();
  getNhaSX();
});
// ======================== METHODS ========================

async function getNhomVatTu() {
  try {
    const response = await $appServices.items.getNhomVatTu<Item.NhomVatTu>(
      filterNhomVt.value
    );
    listNhomVatTu.value = response.getData || [];
  } catch (error) {
    console.error("Error fetching Nhom Vat Tu:", error);
  }
}
async function getNhaSX() {
  try {
    const response = await $appServices.items.getNhaSX<Item.NhaSanXuat>(
      filterNhaSX.value
    );
    console.log("Nha san xuat:", response.getData);
  } catch (error) {
    console.error("Error fetching Nha San Xuat:", error);
  }
}

async function getListProduct() {
  pageState.loading = true;
  try {
    const response = await $appServices.items.getItems(filterListProduct.value);
    pageState.listProduct = response;
  } catch (error) {
    console.error("Error fetching product list:", error);
  } finally {
    pageState.loading = false;
  }
}
function onChangeNhomVt(nhomVt: Item.NhomVatTu) {
  filterListProduct.value.setValue(
    "loai_nh",
    nhomVt.loai_nh.toString(),
    OperatorType.Equal
  );
  filterListProduct.value.setValue(
    "ma_nh",
    nhomVt.ma_nh.toString(),
    OperatorType.Equal
  );
  filterListProduct.value.pageIndex = 1;
  getListProduct();
}
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
