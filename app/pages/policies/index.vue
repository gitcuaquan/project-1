<template>
  <SharedModuleBreadcrumb :data="breadcrumb" />
  <div class="container mx-auto p-4">
    <h2>I. CHÍNH SÁCH VẬN CHUYỂN</h2>
    <ul>
      <li>
        <strong>1.1. Đối với khách ngoại thành Hà Nội và khách tỉnh:</strong>
        <ul>
          <li>
            <strong>a. Đối với các đơn hàng gửi xe Hapu:</strong>
            <ul>
              <li>Với đơn hàng đặt trước 8h sáng, sẽ chuyển đi trong ngày.</li>
              <li>
                Với đơn hàng đặt sau 8h sáng và trước 10h, có thể chuyển đi
                trong ngày.
              </li>
              <li>Với đơn hàng đặt sau 10h sẽ chuyển đi vào ngày hôm sau.</li>
            </ul>
          </li>
          <li>
            <strong
              >b. Đối với các đơn hàng gửi chuyển phát: (GHTK, Viettel
              Post,…)</strong
            >
            <ul>
              <li>Với đơn hàng đặt trước 13h, sẽ chuyển đi trong ngày.</li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <strong>1.2 Đối với khách nội thành Hà Nội:</strong>
        <ul>
          <li>Với đơn hàng đặt trước 11h, sẽ được giao trong ngày.</li>
          <li>Với đơn hàng đặt sau 11h có thể sẽ giao vào ngày hôm sau.</li>
        </ul>
        <p>
          <em
            >Ghi chú: Nếu khách cần yêu cầu giờ nhận hàng có thể liên hệ với
            sale.</em
          >
        </p>
      </li>
    </ul>
    <p>
      Công ty sẽ cung cấp hoá đơn bán hàng, các đơn vị vận chuyển sẽ cung cấp
      vận đơn theo đúng chức năng nhiệm vụ.
    </p>

    <h2>II. CHÍNH SÁCH HỖ TRỢ SHIP</h2>
    <p>
      Việc hỗ trợ phí ship sẽ thực hiện theo chương trình khuyến mại theo từng
      thời điểm.
    </p>

    <h2>III. CHÍNH SÁCH GIẢI QUYẾT KHIẾU NẠI</h2>
    <ul>
      <li>
        Thời gian nhận khiếu nại của khách hàng: Trong vòng 72h kể từ khi khách
        hàng nhận được hàng.
      </li>
      <li>
        Thời gian giải quyết khiếu nại: Trong vòng 72h kể từ khi sale nhận được
        khiếu nại của khách hàng.
      </li>
      <li>
        Phương thức khiếu nại: Quý khách gọi tới số hotline hoặc số sale quý
        khách đang làm việc trực tiếp.
      </li>
    </ul>
    <p>
      <em
        >Lưu ý: Quý khách vui lòng liên hệ nhân viên sale phụ trách để được giải
        quyết khiếu nại đúng thời gian quy định.</em
      >
    </p>

    <h2>IV. CHÍNH SÁCH KIỂM HÀNG HOÀN TRẢ HÀNG</h2>
    <h3>Chính sách chung</h3>
    <ul>
      <li>
        Thời gian được đề nghị hoàn trả là 48h kể từ khi khách nhận hàng. Quý
        khách vui lòng kiểm hàng sớm sau khi nhận và phản ánh lại công ty các
        trường hợp hàng thiếu, hàng thừa, hàng lỗi, hỏng trong thời gian quy
        định.
      </li>
      <li>
        Những hàng thuộc nhóm Hàng tiêm, hàng điểm, hàng kê đơn, hàng xách tay,
        hàng giá trị cao….Dược phẩm Tapmed không tiếp nhận hoàn trả hàng.
      </li>
      <li>
        Hàng tiêm truyền, dễ vỡ thì công ty chỉ chịu trách nhiệm đến nhà xe.
      </li>
      <li>
        Trường hợp Quý khách hàng tự ý gửi hàng hoàn trả mà không thông báo cho
        công ty, thì mặc định hàng sẽ được chuyển trả lại cho khách hàng.
      </li>
      <li>
        Trường hợp hoàn hàng do lỗi của bên thứ 3:
        <ul>
          <li>
            Với đơn hàng đã thống nhất trước với khách về rủi ro vận chuyển thì
            mặc định công ty sẽ không chịu trách nhiệm cho rủi ro vận chuyển.
          </li>
          <li>
            Với đơn hàng bị hỏng, móp méo do lỗi hoàn toàn của bên thứ 3 thì Quý
            khách hàng vui lòng gửi lại bằng chứng để bên vận chuyển của công ty
            làm việc với bên thứ 3. Khi đó, với khách hàng thì tuỳ theo tình
            trạng hàng hoá 2 bên sẽ phối hợp xử lý (khách hàng được giảm giá,
            khách hàng bán giúp hay hoàn hàng).
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectConfig } from "~/model";

const breadcrumb = ref<Array<ProjectConfig.BreadcrumbItem>>([
  { label: "Chính sách" },
]);
</script>

<style></style>
