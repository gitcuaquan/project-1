<template>
  <HomeModuleHero />
  <section>
    <ClientOnly>
      <HomeSlideBanner />
    </ClientOnly>
  </section>
  <section class="my-5 container">
    <h2 class="text-center text-capitalize">Ưu đãi mới nhất</h2>
    <p class="text-muted text-center mb-3">
      <small>
        Cập nhật những ưu đãi và khuyến mãi mới nhất từ TapMed dành cho khách
        hàng.
      </small>
    </p>
    <HomeModulePromotion />
  </section>
  <section class="my-3">
    <HomeModuleFeature />
  </section>
  <section class="container my-3">
    <h2 class="text-center">Sản phẩm nổi bật</h2>
    <p class="text-muted text-center mb-3">
      <small>
        Khám phá những sản phẩm nổi bật được chọn lọc kỹ càng từ những nhà cung
        cấp uy tín.
      </small>
    </p>
    <ProductModuleSliderItem />
  </section>
  <section class="container my-5">
    <h2 class="mt-5 text-center text-capitalize">Tin tức nổi bật</h2>
    <p class="text-center text-muted mb-3">
      <small>Cập nhật những tin tức mới nhất và nổi bật nhất từ TapMed.</small>
    </p>
    <NewsList :limit="6" />
  </section>
  <section class="container my-5">
    <div class="container text-center mb-4">
      <h2 class="text-center">
        Đối tác của <b class="text-primary">TapMed</b>
      </h2>
      <p class="text-muted">
        <small
          >Chúng tôi hợp tác với các thương hiệu và nhà cung cấp uy tín để mang
          đến cho bạn những sản phẩm tốt nhất.</small
        >
      </p>
    </div>
    <HomeModuleMarquee :speed="70" class="my-2">
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
    </HomeModuleMarquee>
    <HomeModuleMarquee :speed="50" direction="right" class="my-2">
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
    </HomeModuleMarquee>
  </section>
  <section class="container my-5">
    <h2 class="mt-5 text-center text-capitalize">
      Khách hàng nói về chúng tôi
    </h2>
    <p class="text-center text-muted mb-3">
      <small
        >Đọc những đánh giá và phản hồi từ khách hàng đã trải nghiệm dịch vụ của
        TapMed.</small
      >
    </p>
    <HomeModuleTestimonial />
  </section>
  <section class="my-3">
    <HomeModuleStory />
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
img {
  mix-blend-mode: multiply !important; /* Hòa trộn điểm ảnh trắng với nền bên dưới */
}
</style>
