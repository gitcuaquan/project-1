<template>
<div class="container">
  <div class="row">
    <div class="col-3">
        <div class="product-category-tree">
    <h4 class="mb-3">Danh mục sản phẩm</h4>
    <div class="tree-container">
      <CategoryNode
        v-for="category in categories"
        :key="category.id"
        :category="category"
        :level="0"
        @select="handleCategorySelect"
      />
    </div>
  </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ChevronRight, ChevronDown, Folder, FolderOpen, Package } from 'lucide-vue-next'

// Định nghĩa interface cho category
interface Category {
  id: string
  name: string
  children?: Category[]
  isExpanded?: boolean
  isSelected?: boolean
}

// Component con cho mỗi node
const CategoryNode = defineComponent({
  name: 'CategoryNode',
  components: {
    ChevronRight,
    ChevronDown,
    Folder,
    FolderOpen,
    Package,
    CategoryNode: null as any // Self-reference
  },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true
    },
    level: {
      type: Number,
      default: 0
    }
  },
  emits: ['select'],
  setup(props, { emit }) {
    const toggleExpand = () => {
      if (props.category.children && props.category.children.length > 0) {
        props.category.isExpanded = !props.category.isExpanded
      }
    }

    const selectCategory = () => {
      emit('select', props.category)
    }

    const hasChildren = computed(() => {
      return props.category.children && props.category.children.length > 0
    })

    const indentStyle = computed(() => {
      return {
        paddingLeft: `${props.level * 20}px`
      }
    })

    return {
      toggleExpand,
      selectCategory,
      hasChildren,
      indentStyle
    }
  },
  template: `
    <div class="category-node">
      <div 
        class="category-item d-flex align-items-center py-2 px-2 rounded cursor-pointer"
        :class="{ 
          'bg-primary bg-opacity-10': category.isSelected,
          'category-hover': !category.isSelected 
        }"
        :style="indentStyle"
        @click="selectCategory"
      >
        <button 
          v-if="hasChildren"
          class="btn btn-sm btn-link p-0 me-2 text-decoration-none"
          @click.stop="toggleExpand"
        >
          <ChevronRight 
            v-if="!category.isExpanded" 
            :size="16" 
            class="text-muted"
          />
          <ChevronDown 
            v-else 
            :size="16" 
            class="text-muted"
          />
        </button>
        <span v-else class="me-2" style="width: 16px;"></span>
        
        <div class="me-2">
          <FolderOpen 
            v-if="hasChildren && category.isExpanded" 
            :size="18" 
            class="text-warning"
          />
          <Folder 
            v-else-if="hasChildren" 
            :size="18" 
            class="text-primary"
          />
          <Package 
            v-else 
            :size="18" 
            class="text-success"
          />
        </div>
        
        <span 
          class="category-name flex-grow-1"
          :class="{ 'fw-semibold': category.isSelected }"
        >
          {{ category.name }}
        </span>
      </div>
      
      <Transition name="expand">
        <div v-if="category.isExpanded && hasChildren" class="children-container">
          <CategoryNode
            v-for="child in category.children"
            :key="child.id"
            :category="child"
            :level="level + 1"
            @select="$emit('select', $event)"
          />
        </div>
      </Transition>
    </div>
  `
})

// Dữ liệu mẫu cho danh mục sản phẩm
const categories = reactive<Category[]>([
  {
    id: '1',
    name: 'Điện tử',
    isExpanded: false,
    children: [
      {
        id: '1-1',
        name: 'Điện thoại & Phụ kiện',
        isExpanded: false,
        children: [
          { id: '1-1-1', name: 'Smartphone' },
          { id: '1-1-2', name: 'Ốp lưng & Bao da' },
          { id: '1-1-3', name: 'Sạc & Cáp' }
        ]
      },
      {
        id: '1-2',
        name: 'Laptop & Máy tính',
        isExpanded: false,
        children: [
          { id: '1-2-1', name: 'Laptop Gaming' },
          { id: '1-2-2', name: 'Laptop Văn phòng' },
          { id: '1-2-3', name: 'Phụ kiện máy tính' }
        ]
      },
      {
        id: '1-3',
        name: 'TV & Âm thanh',
        isExpanded: false,
        children: [
          { id: '1-3-1', name: 'Smart TV' },
          { id: '1-3-2', name: 'Loa & Tai nghe' }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Thời trang',
    isExpanded: false,
    children: [
      {
        id: '2-1',
        name: 'Thời trang Nam',
        isExpanded: false,
        children: [
          { id: '2-1-1', name: 'Áo sơ mi' },
          { id: '2-1-2', name: 'Quần jean' },
          { id: '2-1-3', name: 'Giày dép' }
        ]
      },
      {
        id: '2-2',
        name: 'Thời trang Nữ',
        isExpanded: false,
        children: [
          { id: '2-2-1', name: 'Váy đầm' },
          { id: '2-2-2', name: 'Áo blouse' },
          { id: '2-2-3', name: 'Túi xách' }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Gia dụng & Đời sống',
    isExpanded: false,
    children: [
      {
        id: '3-1',
        name: 'Đồ gia dụng',
        isExpanded: false,
        children: [
          { id: '3-1-1', name: 'Nồi cơm điện' },
          { id: '3-1-2', name: 'Máy xay sinh tố' }
        ]
      },
      {
        id: '3-2',
        name: 'Nội thất',
        isExpanded: false,
        children: [
          { id: '3-2-1', name: 'Bàn ghế' },
          { id: '3-2-2', name: 'Tủ kệ' }
        ]
      }
    ]
  }
])

// Xử lý khi chọn category
const selectedCategory = ref<Category | null>(null)

const handleCategorySelect = (category: Category) => {
  // Bỏ chọn category cũ
  if (selectedCategory.value) {
    selectedCategory.value.isSelected = false
  }
  
  // Chọn category mới
  category.isSelected = true
  selectedCategory.value = category
  
  console.log('Selected category:', category)
  
  // Emit event hoặc thực hiện action khác
  // emit('categorySelected', category)
}

// Auto-expand first level
onMounted(() => {
  categories.forEach(cat => {
    if (cat.children && cat.children.length > 0) {
      cat.isExpanded = true
    }
  })
})
</script>

<style scoped>
.product-category-tree {
  max-height: 500px;
  overflow-y: auto;
}

.tree-container {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
}

.category-item {
  transition: background-color 0.2s ease;
  user-select: none;
}

.category-hover:hover {
  background-color: rgba(0, 123, 255, 0.05) !important;
}

.cursor-pointer {
  cursor: pointer;
}

.category-name {
  font-size: 0.95rem;
  color: #333;
}

/* Transition cho expand/collapse */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
  opacity: 1;
}

/* Custom scrollbar */
.product-category-tree::-webkit-scrollbar {
  width: 6px;
}

.product-category-tree::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.product-category-tree::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.product-category-tree::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Responsive */
@media (max-width: 768px) {
  .category-item {
    padding: 0.75rem 0.5rem;
  }
  
  .category-name {
    font-size: 0.9rem;
  }
}
</style>