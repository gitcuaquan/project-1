<template>
  <div id="top-header"></div>
  <div id="main-header">
    <div class="container-md py-3 py-md-1">
      <div class="row align-items-center justify-content-between">
        <div class="col-3 d-md-none d-block">
          <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            class="btn btn-outline-light border-0 px-0 text-dark"
          >
            <Menu />
          </button>
        </div>
        <!-- logo -->
        <div class="col-5 col-md-2 order-1">
          <nuxt-link to="/">
            <img src="/images/logo-tapmed.png" class="w-100" alt="" />
          </nuxt-link>
        </div>
        <div class="col-md-7 col-12 order-3 order-md-2">
          <div class="d-flex mt-3 flex-column w-100">
            <!-- tìm kiếm -->
            <form
              class="position-relative bg-white d-flex align-items-center overflow-hidden w-100 p-1 border rounded mt-md-0"
              role="search"
            >
              <input
                class="form-control form-control-sm me-2 border-0 shadow-none"
                type="search"
                placeholder="Tìm kiếm sản phẩm"
                aria-label="Search"
              />
              <div
                class="bg-white p-1 position-absolute top-0 end-0 h-100 d-flex align-items-center"
              >
                <button
                  class="btn btn-sm d-flex align-items-center justify-content-center h-100 py-2 px-2 btn-primary"
                  type="button"
                >
                  <Search :size="16" />
                </button>
              </div>
            </form>
            <!-- menu button -->
            <ul
              class="list-inline mb-0 flex-nowrap w-100 overflow-auto"
              id="category-list"
            >
              <li
                v-for="(category, idx) in categories"
                :key="idx"
                class="list-inline-item py-2 text-nowrap"
              >
                {{ category }}<span v-if="idx < categories.length - 1"> |</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 col-4 order-2 order-md-3">
          <div class="d-flex align-items-center justify-content-end gap-1">
            <!-- Đăng nhập  đăng ký -->
            <div class="dropdown">
              <button
                class="btn px-0 px-md-2 text-dark border-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <CircleUser :size="sizeIcon" :stroke-width="1" />
                  <div class="ms-2 text-start d-none d-md-block">
                    <small class="d-block">Tài khoản</small>
                    <small class="fw-semibold d-block text-muted">
                      Đăng nhập ngay
                    </small>
                  </div>
                  <ChevronDown :stroke-width="0.75" />
                </div>
              </button>
              <ul class="dropdown-menu py-2 border-0 rounded-1 shadow">
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center gap-2"
                    style="font-size: 14px"
                    href="#"
                  >
                    <LogIn :size="16" />Đăng nhập
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center gap-2"
                    style="font-size: 14px"
                    href="#"
                    ><UserPlus :size="16" />
                    Đăng ký
                  </a>
                </li>
              </ul>
            </div>
            <!-- Giỏ hàng -->
            <div class="d-flex h-100 align-items-center">
              <button
                class="position-relative me-2 px-0 px-md-2 btn text-dark border-0"
              >
                <ShoppingCart :size="sizeIcon" :stroke-width="1" />
                <span
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary"
                >
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="bottom-header" class="sticky-top">
    <nav class="navbar py-0 bg-light shadow-sm navbar-expand-md">
      <div class="container">
        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header bg-light">
            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
              <nuxt-link to="/">
                <img src="/images/logo-tapmed.png" width="120" alt="" />
              </nuxt-link>
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav py-0 py-md-2 gap-1 flex-grow-1 ps-md-3">
               <li class="nav-item px-3 " >
                <nuxt-link to="/" class="nav-link py-1" role="button">Trang chủ</nuxt-link>
              </li>
              <li class="nav-item position-relative px-3 " v-for="value in menu">
                <nuxt-link :to="value.url" class="nav-link py-1" role="button">{{ value.name }}</nuxt-link>
                <div v-if="value.hot" class="position-absolute top-0 end-0 translate-middle-y">
                  <img src="/images/icon-hot.webp" width="45" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts" setup>
const sizeIcon = ref(35);

const categories = [
  "Thuốc",
  "Thực phẩm chức năng",
  "Thiết bị y tế",
  "Mĩ phẩm",
  "Cá nhân",
];


const menu = [
  {
    name:"Đặt hàng nhanh",
    url:"/quick-order"
  },
  {
    name:"Khuyến mãi",
    url:"/promotion",
    hot:true
  },
  {
    name:"Tin tức",
    url:"/news"
  },
  {
    name:"Chính sách",
    url:"/policies"
  },
  {
    name:"Liên hệ",
    url:"/contact"
  }
]
onMounted(() => {
  checkWindowSize();
  window.addEventListener("resize", checkWindowSize);
});

function checkWindowSize() {
  const width = window.innerWidth;
  if (width < 768) {
    sizeIcon.value = 28;
  } else {
    sizeIcon.value = 35;
  }
}
</script>

<style scoped>
#bottom-header{
  z-index: 1;
}
#category-list {
  display: flex;
  flex-wrap: wrap;
}

#category-list .list-inline-item {
  font-size: 13px;
  cursor: pointer;
  /* Add transition for hover effect */
  transition: all 0.2s ease;
  &:hover {
    color: var(--bs-primary);
  }
}
.dropdown-menu {
  min-width: 250px;
}
.nav-item{
  border-radius: 5px;
  transition: all 0.2s;
  /* màu chữ */
  .nav-link{
    color: #000;
    font-weight: 400;
  }
  /* hiệu ứng hover */
  &:hover {
    background-color: rgba(var(--bs-primary-rgb), 0.075);
    .nav-link{
      color: var(--bs-primary);
    }
  }
  &:has(.router-link-active){
    background-color: rgba(var(--bs-primary-rgb), 0.1);
  }
  .router-link-active{
    color: var(--bs-primary);
  }

}
</style>
