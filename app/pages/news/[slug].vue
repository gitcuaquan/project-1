<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="py-5 container">
    <div class="row">
      <div class="col-12">
        <h2 class="mb-3">Mẹo Vặt Chăm Sóc Sức Khỏe Mùa Thu Cùng Tapmed</h2>
        <div class="ratio ratio-16x9 rounded-5 overflow-hidden mb-4">
          <img
            src="https://tapmed.vn/storage/image/76,000%C4%91%C4%91%20(B%E1%BA%A3n%20thuy%E1%BA%BFt%20tr%C3%ACnh)%20(16)1725852981.png"
            class="object-fit-cover"
          />
        </div>
        <div id="content">
          <h6>
            Bí Quyết Giữ Gìn Sức Khỏe Mùa Thu: 5 Lời Khuyên Hữu Ích Từ Tapmed
          </h6>
          <p>
            Khi tiết trời sang thu, không khí mát mẻ và dễ chịu mang đến sự thư
            thái, nhưng cũng là lúc sức khỏe dễ bị ảnh hưởng bởi những thay đổi
            bất chợt. Để bảo vệ cơ thể và tận hưởng trọn vẹn vẻ đẹp của mùa thu,
            Tapmed chia sẻ cùng bạn 5 bí quyết chăm sóc sức khỏe hiệu quả dưới
            đây.
          </p>
          <ol>
            <li>
              <strong>Giữ Ấm Cơ Thể - "Chìa Khóa" Ngăn Ngừa Cảm Cúm</strong
              ><br />
              Thời tiết se lạnh chính là nguyên nhân hàng đầu gây ra các bệnh hô
              hấp. Hãy luôn chuẩn bị một chiếc áo khoác mỏng và giữ ấm các vùng
              quan trọng như cổ, ngực để tránh bị nhiễm lạnh.
            </li>
            <li>
              <strong>Tăng Cường Vitamin - Lá Chắn Cho Hệ Miễn Dịch</strong
              ><br />
              Mùa thu là thời điểm vàng để bổ sung các loại vitamin và khoáng
              chất. Các loại trái cây như cam, bưởi, táo giàu vitamin C sẽ giúp
              tăng cường sức đề kháng, bảo vệ cơ thể khỏi virus và vi khuẩn.
            </li>
            <li>
              <strong>Uống Đủ Nước - Duy Trì Năng Lượng Từ Bên Trong</strong
              ><br />
              Dù trời không còn nắng gắt, cơ thể vẫn cần đủ nước để duy trì độ
              ẩm và chức năng. Uống 2 lít nước mỗi ngày không chỉ giúp làn da
              khỏe đẹp mà còn hỗ trợ quá trình trao đổi chất.
            </li>
            <li>
              <strong>Vận Động Nhẹ Nhàng - Cải Thiện Sức Khỏe Toàn Diện</strong
              ><br />
              Hãy tận dụng không khí trong lành của mùa thu để tập luyện. Các
              hoạt động như đi bộ, yoga hay thiền định không chỉ giúp cơ thể dẻo
              dai mà còn giảm căng thẳng, mang lại tinh thần sảng khoái.
            </li>
            <li>
              <strong
                >Chăm Sóc Giấc Ngủ - Nền Tảng Của Một Cơ Thể Khỏe Mạnh</strong
              ><br />
              Giấc ngủ chất lượng là yếu tố then chốt để phục hồi năng lượng.
              Hãy tạo cho mình thói quen đi ngủ đúng giờ, giữ không gian phòng
              ngủ thoáng đãng để có giấc ngủ sâu và ngon hơn.
            </li>
          </ol>
          <p>
            Hãy bắt đầu áp dụng những mẹo đơn giản này để chăm sóc sức khỏe cho
            bản thân và gia đình trong mùa thu này.
          </p>
          <p>
            Khám phá thêm các bí quyết chăm sóc sức khỏe khác tại:<br />
            Cộng Đồng Quầy Thuốc, Nhà Thuốc Tapmed:
            <a
              href="https://www.facebook.com/groups/duocphamtapmed"
              target="_blank"
              rel="noopener"
              >https://www.facebook.com/groups/duocphamtapmed</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Tin tức", to: "/news" },
  { label: "Chi tiết tin tức" },
]);
</script>

<style></style>
