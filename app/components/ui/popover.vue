<template>
  <div ref="popoverWrapper" class="popover-wrapper">
    <!-- Slot trigger -->
    <div
      ref="triggerRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      class="popover-trigger"
    >
      <slot name="trigger" />
    </div>

    <!-- Popover content -->
    <Teleport to="body">
      <Transition name="popover-fade">
        <div
          v-if="isVisible"
          ref="popoverRef"
          :style="popoverStyle"
          @mouseenter="handlePopoverEnter"
          @mouseleave="handlePopoverLeave"
          class="popover-content"
          :class="[`placement-${currentPlacement}`, { 'is-mobile': isMobile }]"
        >
          <!-- Arrow -->
          <div class="popover-arrow" :style="arrowStyle"></div>

          <!-- Content slot -->
          <div class="popover-inner">
            <slot name="content" />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
// Computed styles
import type { CSSProperties } from "vue";
interface Props {
  placement?: "top" | "bottom" | "left" | "right" | "auto";
  offset?: number;
  showDelay?: number;
  hideDelay?: number;
  trigger?: "hover" | "click" | "both";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  placement: "auto",
  offset: 8,
  showDelay: 100,
  hideDelay: 100,
  trigger: "hover",
  disabled: false,
});

const emit = defineEmits<{
  (e: "show"): void;
  (e: "hide"): void;
}>();

const triggerRef = ref<HTMLElement | null>(null);
const popoverRef = ref<HTMLElement | null>(null);
const popoverWrapper = ref<HTMLElement | null>(null);

const isVisible = ref(false);
const isMobile = ref(false);
const currentPlacement = ref(props.placement);

const popoverPosition = ref({
  top: 0,
  left: 0,
});

const arrowPosition = ref({
  top: 0,
  left: 0,
});

let showTimeout: ReturnType<typeof setTimeout> | null = null;
let hideTimeout: ReturnType<typeof setTimeout> | null = null;
let isHoveringPopover = false;
let isHoveringTrigger = false;

const popoverStyle = computed(() => ({
  position: "fixed" as CSSProperties["position"],
  top: `${popoverPosition.value.top}px`,
  left: `${popoverPosition.value.left}px`,
  zIndex: 9999,
}));

const arrowStyle = computed(() => ({
  top:
    arrowPosition.value.top !== 0 ? `${arrowPosition.value.top}px` : undefined,
  left:
    arrowPosition.value.left !== 0
      ? `${arrowPosition.value.left}px`
      : undefined,
}));

// Detect mobile
const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

// Calculate position
const calculatePosition = () => {
  if (!triggerRef.value || !popoverRef.value) return;

  const triggerRect = triggerRef.value.getBoundingClientRect();
  const popoverRect = popoverRef.value.getBoundingClientRect();

  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    scrollY: window.scrollY || window.pageYOffset,
    scrollX: window.scrollX || window.pageXOffset,
  };

  let placement = props.placement;

  // Auto placement
  if (placement === "auto") {
    const spaceTop = triggerRect.top;
    const spaceBottom = viewport.height - triggerRect.bottom;
    const spaceLeft = triggerRect.left;
    const spaceRight = viewport.width - triggerRect.right;

    if (spaceBottom >= popoverRect.height + props.offset + 10) {
      placement = "bottom";
    } else if (spaceTop >= popoverRect.height + props.offset + 10) {
      placement = "top";
    } else if (spaceRight >= popoverRect.width + props.offset + 10) {
      placement = "right";
    } else if (spaceLeft >= popoverRect.width + props.offset + 10) {
      placement = "left";
    } else {
      placement = "bottom";
    }
  }

  currentPlacement.value = placement;

  let top = 0;
  let left = 0;
  let arrowTop = 0;
  let arrowLeft = 0;

  const arrowSize = 6;

  switch (placement) {
    case "top":
      top = triggerRect.top - popoverRect.height - props.offset;
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
      arrowTop = popoverRect.height - arrowSize;
      arrowLeft = popoverRect.width / 2 - arrowSize;
      break;

    case "bottom":
      top = triggerRect.bottom + props.offset;
      left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
      arrowTop = -arrowSize;
      arrowLeft = popoverRect.width / 2 - arrowSize;
      break;

    case "left":
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
      left = triggerRect.left - popoverRect.width - props.offset;
      arrowTop = popoverRect.height / 2 - arrowSize;
      arrowLeft = popoverRect.width - arrowSize;
      break;

    case "right":
      top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
      left = triggerRect.right + props.offset;
      arrowTop = popoverRect.height / 2 - arrowSize;
      arrowLeft = -arrowSize;
      break;
  }

  const padding = 5;
  const initialLeft = left;

  // Keep within viewport horizontally
  if (left < padding) {
    const diff = padding - left;
    left = padding;
    if (placement === "top" || placement === "bottom") {
      arrowLeft = Math.max(arrowSize, arrowLeft - diff);
    }
  }

  if (left + popoverRect.width > viewport.width - padding) {
    const diff = left + popoverRect.width - (viewport.width - padding);
    left = viewport.width - popoverRect.width - padding;
    if (placement === "top" || placement === "bottom") {
      arrowLeft = Math.min(popoverRect.width - arrowSize * 3, arrowLeft + diff);
    }
  }

  // Keep within viewport vertically
  if (top < padding) {
    const diff = padding - top;
    top = padding;
    if (placement === "left" || placement === "right") {
      arrowTop = Math.max(arrowSize, arrowTop - diff);
    }
  }

  if (top + popoverRect.height > viewport.height - padding) {
    const diff = top + popoverRect.height - (viewport.height - padding);
    top = viewport.height - popoverRect.height - padding;
    if (placement === "left" || placement === "right") {
      arrowTop = Math.min(popoverRect.height - arrowSize * 3, arrowTop + diff);
    }
  }

  popoverPosition.value = { top, left };
  arrowPosition.value = { top: arrowTop, left: arrowLeft };
};

// Show popover
const show = () => {
  if (props.disabled) return;

  if (hideTimeout) {
    clearTimeout(hideTimeout);
    hideTimeout = null;
  }

  showTimeout = setTimeout(async () => {
    isVisible.value = true;
    await nextTick();
    calculatePosition();
    // Notify parent that popover is shown
    emit("show");
  }, props.showDelay);
};

// Hide popover
const hide = () => {
  if (showTimeout) {
    clearTimeout(showTimeout);
    showTimeout = null;
  }

  hideTimeout = setTimeout(() => {
    if (!isHoveringPopover && !isHoveringTrigger) {
      isVisible.value = false;
      // Notify parent that popover is hidden
      emit("hide");
    }
  }, props.hideDelay);
};

// Event handlers
const handleMouseEnter = () => {
  if (props.trigger === "click") return;
  isHoveringTrigger = true;
  show();
};

const handleMouseLeave = () => {
  if (props.trigger === "click") return;
  isHoveringTrigger = false;
  hide();
};

const handleClick = () => {
  if (props.trigger === "hover") return;

  if (isVisible.value) {
    isVisible.value = false;
    // Notify parent that popover is hidden via toggle
    emit("hide");
  } else {
    show();
  }
};

const handlePopoverEnter = () => {
  if (props.trigger === "click") return;
  isHoveringPopover = true;
};

const handlePopoverLeave = () => {
  if (props.trigger === "click") return;
  isHoveringPopover = false;
  hide();
};

// Update position on scroll/resize
const updatePosition = () => {
  if (isVisible.value) {
    calculatePosition();
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (props.trigger !== "click") return;

  const target = event.target as Node;
  if (
    triggerRef.value &&
    !triggerRef.value.contains(target) &&
    popoverRef.value &&
    !popoverRef.value.contains(target)
  ) {
    isVisible.value = false;
    // Notify parent that popover was closed by outside click
    emit("hide");
  }
};

// Lifecycle
onMounted(() => {
  checkMobile();
  window.addEventListener("scroll", updatePosition, true);
  window.addEventListener("resize", updatePosition);
  window.addEventListener("resize", checkMobile);
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updatePosition, true);
  window.removeEventListener("resize", updatePosition);
  window.removeEventListener("resize", checkMobile);
  document.removeEventListener("click", handleClickOutside);

  if (showTimeout) clearTimeout(showTimeout);
  if (hideTimeout) clearTimeout(hideTimeout);
});
</script>

<style scoped>
.popover-wrapper {
  display: inline-block;
}

.popover-trigger {
  display: inline-block;
  cursor: pointer;
  width: 100%;
}

.popover-content {
  position: fixed;
  background: white;
  border-radius: 8px;
  padding: 5px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-width: 80vw;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.popover-content.is-mobile {
  max-width: calc(100vw - 40px);
}

.popover-inner {
  position: relative;
  z-index: 1;
}

.popover-arrow {
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transform: rotate(45deg);
  z-index: 0;
}

.placement-top .popover-arrow {
  border-top: none;
  border-left: none;
}

.placement-bottom .popover-arrow {
  border-bottom: none;
  border-right: none;
}

.placement-left .popover-arrow {
  border-left: none;
  border-bottom: none;
}

.placement-right .popover-arrow {
  border-right: none;
  border-top: none;
}

/* Animations */
.popover-fade-enter-active,
.popover-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.popover-fade-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.popover-fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .popover-content {
    background: #2d2d2d;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.1);
  }

  .popover-arrow {
    background: #2d2d2d;
    border-color: rgba(255, 255, 255, 0.1);
  }
}
</style>
