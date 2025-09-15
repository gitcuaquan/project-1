<template>
  <div class="bg-white pt-2">
    <ClientOnly>
      <HomeSlideBanner />
    </ClientOnly>
    <section class="my-5">
      <div class="container text-center mb-4">
        <h2 class="text-center">
          Với <b class="text-primary">TapMed</b>, chúng tôi cam kết !
        </h2>
        <p class="text-muted">
          <small>
            Mang đến trải nghiệm mua sắm trực tuyến tốt nhất với sản phẩm chất
            lượng, dịch vụ tận tâm và giá cả hợp lý.
          </small>
        </p>
      </div>
      <HomeModuleFeature />
    </section>
    <section class="container my-5">
      <div class="container text-center mb-4">
        <h2 class="text-center">
          Đối tác của <b class="text-primary">TapMed</b>
        </h2>
        <p class="text-muted">
          <small
            >Chúng tôi hợp tác với các thương hiệu và nhà cung cấp uy tín để
            mang đến cho bạn những sản phẩm tốt nhất.</small
          >
        </p>
      </div>
      <HomeMarquee :speed="25">
        <img src="https://tapmed.vn/TapMedVn/images/partner/16.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/17.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/18.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/19.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/20.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/21.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/22.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/23.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/25.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/26.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/27.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/28.png" alt="" />
      </HomeMarquee>
      <HomeMarquee :speed="15" direction="right">
        <img src="https://tapmed.vn/TapMedVn/images/partner/16.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/17.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/18.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/19.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/20.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/21.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/22.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/23.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/25.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/26.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/27.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/28.png" alt="" />
      </HomeMarquee>
      <HomeMarquee :speed="40">
        <img src="https://tapmed.vn/TapMedVn/images/partner/16.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/17.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/18.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/19.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/20.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/21.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/22.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/23.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/25.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/26.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/27.png" alt="" />
        <img src="https://tapmed.vn/TapMedVn/images/partner/28.png" alt="" />
      </HomeMarquee>
    </section>
    <section class="container my-5">
      <h2 class="mt-5 text-center text-capitalize">Tin tức nổi bật</h2>
      <p class="text-center text-muted mb-3">
        <small
          >Cập nhật những tin tức mới nhất và nổi bật nhất từ TapMed.</small
        >
      </p>
      <NewsList :limit="6" />
    </section>
    <section class="container my-5">
      <h2 class="mt-5 text-center text-capitalize">
        Khách hàng nói về chúng tôi
      </h2>
      <p class="text-center text-muted mb-3">
        <small
          >Đọc những đánh giá và phản hồi từ khách hàng đã trải nghiệm dịch vụ
          của TapMed.</small
        >
      </p>
      <HomeModuleTestimonial />
    </section>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
img {
  mix-blend-mode: multiply !important; /* Hòa trộn điểm ảnh trắng với nền bên dưới */
}
</style>
