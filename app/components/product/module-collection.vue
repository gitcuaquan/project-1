<template>
  <div class="d-flex flex-column align-items-center gap-3">
    <div class="position-relative w-100 border rounded overflow-hidden">
      <input
        type="text"
        class="form-control border-0 shadow-none w-100"
        placeholder="Tìm kiếm sản phẩm"
      />
      <div
        class="position-absolute bg-white top-50 end-0 translate-middle-y p-2 pe-3"
      >
        <Search :size="16" />
      </div>
    </div>
    <div class="text-start w-100">
      <div>
        <UiTreeView :categories="categories" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
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

<style></style>
