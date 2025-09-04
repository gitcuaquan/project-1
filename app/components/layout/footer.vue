<template>
  <footer class="footer py-5 mt-auto">
    <div class="container">
      <!-- Main Footer Content -->
      <div class="row g-4 mb-4">
        <!-- Company Info -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-section">
            <div class="d-flex align-items-center mb-2">
              <img
                src="/images/logo-tapmed.png"
                alt="TapMed"
                class="footer-logo me-2"
                style="height: 40px"
              />
            </div>
            <p class="text-muted mb-2 lh-lg">
              Đối tác tin cậy trong lĩnh vực dược phẩm, mang đến những sản phẩm
              chất lượng cao và dịch vụ chuyên nghiệp cho sức khỏe cộng đồng.
            </p>
            <!-- Social Links -->
            <div class="social-links">
              <h6 class="text-success mb-2">Kết nối với chúng tôi</h6>
              <div class="d-flex gap-2">
                <a
                  href="#"
                  class="btn btn-outline-success btn-sm rounded-circle social-btn"
                >
                  <Facebook :size="16" />
                </a>
                <a
                  href="#"
                  class="btn btn-outline-success btn-sm rounded-circle social-btn"
                >
                  <Instagram :size="16" />
                </a>
                <a
                  href="#"
                  class="btn btn-outline-success btn-sm rounded-circle social-btn"
                >
                  <Youtube :size="16" />
                </a>
                <a
                  href="#"
                  class="btn btn-outline-success btn-sm rounded-circle social-btn"
                >
                  <Linkedin :size="16" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="col-lg-4 order-last order-md-2 col-md-6">
          <div class="footer-section">
            <h5 class="text-success mb-2 d-flex align-items-center">
              <MapPin :size="20" class="me-2" />
              Thông tin liên hệ
            </h5>
            <div class="contact-info">
              <!-- Headquarters -->
              <div class="legal-item mb-2 p-3 rounded">
                <div class="d-flex align-items-center mb-2">
                  <Building :size="16" class="text-success me-2" />
                  <h6 class="mb-0">Trụ sở chính</h6>
                </div>
                <p class="mb-0 small text-muted">
                  CT1-CT2, khu nhà ở CBNV viên bóng Lê Hữu Trác,<br />
                  Tân Triều, Thanh Trì, Hà Nội
                </p>
              </div>

              <!-- Showroom -->
              <div class="legal-item mb-2 p-3 rounded">
                <div class="d-flex align-items-center mb-2">
                  <Store :size="16" class="text-success me-2" />
                  <h6 class="mb-0">Showroom</h6>
                </div>
                <p class="mb-0 small text-muted">
                  Quầy 441, Trung tâm phân phối thuốc Hapulico,<br />
                  số 85 Vũ Trọng Phụng, Thanh Xuân, Hà Nội
                </p>
              </div>

              <!-- Contact Details -->
              <div class="row g-2">
                <div class="col-sm-6">
                  <a
                    href="tel:0963744567"
                    class="contact-link d-flex align-items-center text-decoration-none"
                  >
                    <Phone :size="16" class="text-success me-2" />
                    <span>0963.744.567</span>
                  </a>
                </div>
                <div class="col-sm-6">
                  <a
                    href="mailto:info@tapmed.vn"
                    class="contact-link d-flex align-items-center text-decoration-none"
                  >
                    <Mail :size="16" class="text-success me-2" />
                    <span>info@tapmed.vn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Legal Information -->
        <div class="col-lg-4 order-2 order-md-last col-md-12">
          <div class="footer-section">
            <h5 class="text-success mb-2 d-flex align-items-center">
              <FileText :size="20" class="me-2" />
              Thông tin pháp lý
            </h5>

            <!-- Representative -->
            <div class="legal-item mb-2 p-3 rounded">
              <div class="d-flex align-items-center mb-2">
                <User :size="16" class="text-success me-2" />
                <h6 class="mb-0">Người đại diện</h6>
              </div>
              <p class="mb-0 text-muted">Bà Nguyễn Thị Hà</p>
            </div>

            <!-- Business License -->
            <div class="legal-item mb-2 p-3 rounded">
              <div class="d-flex align-items-center mb-2">
                <Award :size="16" class="text-success me-2" />
                <h6 class="mb-0">Giấy CN ĐKDN</h6>
              </div>
              <p class="mb-1 text-muted small">Số: 0106459996</p>
              <p class="mb-1 text-muted small">Ngày cấp: 19/02/2014</p>
              <p class="mb-0 text-muted small">
                Nơi cấp: Sở kế hoạch đầu tư TP Hà Nội
              </p>
            </div>

            <!-- Business Permit -->
            <div class="legal-item mb-2 p-3 rounded">
              <div class="d-flex align-items-center mb-2">
                <Shield :size="16" class="text-success me-2" />
                <h6 class="mb-0">Giấy phép kinh doanh</h6>
              </div>
              <p class="mb-1 text-muted small">Số: 01757/HNO-CCHND</p>
              <p class="mb-1 text-muted small">Ngày cấp: 19/03/2014</p>
              <p class="mb-0 text-muted small">Nơi cấp: Sở y tế Hà Nội</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom -->
      <div class="footer-bottom pt-4 border-top border-secondary">
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-muted">
              <Copyright :size="16" class="me-1" />
              Bản quyền thuộc về CÔNG TY CỔ PHẦN XNK DƯỢC PHẨM TAPMED - 2024
            </p>
          </div>
          <div class="col-md-6 text-md-end mt-2 mt-md-0">
            <div class="footer-links">
              <a href="#" class="text-muted text-decoration-none me-3 small"
                >Chính sách bảo mật</a
              >
              <a href="#" class="text-muted text-decoration-none me-3 small"
                >Điều khoản sử dụng</a
              >
              <a href="#" class="text-muted text-decoration-none small"
                >Sitemap</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Scroll to Top Button -->
  <button
    v-if="showButton"
    @click="scrollToTop"
    class="btn rounded-circle"
    id="scroll-to-top"
  >
    <ArrowBigUpDash :size="24" color="#189847" />
  </button>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

const showButton = ref(false);

onMounted(() => {
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

function checkScroll() {
  if (window.scrollY > 100) {
    showButton.value = true;
  } else {
    showButton.value = false;
  }
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
</script>

<style scoped>
#scroll-to-top {
  background: rgba(var(--bs-primary-rgb), 0.2);
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}
@media screen and (max-width: 768px) {
  #scroll-to-top {
    bottom: 20%;
    right: 10px;
  }
}
/* .footer {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  position: relative;
  overflow: hidden;
} */

.footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--bs-success),
    transparent
  );
}

.footer-section {
  height: 100%;
}

.footer-logo {
  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: scale(1.1);
}

.social-btn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid var(--bs-success);
}

.social-btn:hover {
  background-color: var(--bs-success);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(25, 135, 84, 0.3);
}

.contact-item,
.legal-item {
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.contact-item:hover,
.legal-item:hover {
  border-color: var(--bs-success);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.contact-link {
  transition: all 0.3s ease;
  padding: 8px;
  border-radius: 4px;
}

.contact-link:hover {
  background-color: rgba(25, 135, 84, 0.1);
  transform: translateX(4px);
}

.footer-links a {
  transition: all 0.3s ease;
  position: relative;
}

.footer-links a:hover {
  color: var(--bs-success) !important;
}

.footer-links a::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -2px;
  left: 0;
  background-color: var(--bs-success);
  transition: width 0.3s ease;
}

.footer-links a:hover::after {
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer {
    padding: 2rem 0 !important;
  }

  .contact-item,
  .legal-item {
    margin-bottom: 1rem !important;
  }

  .social-btn {
    width: 32px;
    height: 32px;
  }
}

@media (max-width: 576px) {
  .footer-section h5 {
    font-size: 1.1rem;
  }

  .contact-info .row {
    flex-direction: column;
  }

  .contact-link {
    margin-bottom: 0.5rem;
  }
}
</style>
