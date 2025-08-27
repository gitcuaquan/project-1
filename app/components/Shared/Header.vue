<template>
  <header>
    <div id="top-header"></div>
    <div id="main-header">
      <div class="container">
        <div class="row align-items-center">
          <!-- logo -->
          <div class="col-3">
            <nuxt-link to="/">
              <img src="/images/logo-tapmed.png" class="w-100" alt="" />
            </nuxt-link>
          </div>
          <div class="col-6">
            <div class="d-flex mt-3 gap-2 flex-column w-100">
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
                    class="btn btn-sm d-flex align-items-center justify-content-center h-100 py-2 px-2 btn-success"
                    type="button"
                  >
                    <Search :size="16" />
                  </button>
                </div>
              </form>
              <!-- menu button -->
              <ul class="list-inline" id="category-list">
                <li class="list-inline-item">Thuốc |</li>
                <li class="list-inline-item">Thực phẩm chức năng |</li>
                <li class="list-inline-item">Thiết bị y tế |</li>
                <li class="list-inline-item">Mĩ phẩm |</li>
                <li class="list-inline-item">Cá nhân</li>
              </ul>
            </div>
          </div>
          <div class="col-3">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="bottom-header"></div>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
#category-list {
  display: flex;
  flex-wrap: wrap;
}

#category-list .list-inline-item {
  font-size: 0.875rem;
  cursor: pointer;
  /* Add transition for hover effect */
  transition: all 0.2s ease;
  &:hover {
    color: var(--bs-success);
  }
}

</style>
