<script setup lang="ts">
interface Props {
  speed?: number; // thời gian chạy 1 vòng (s)
  direction?: 'left' | 'right';
}
const props = withDefaults(defineProps<Props>(), {
  speed: 20,
  direction: 'left',
});
</script>

<template>
  <div class="logo-marquee overflow-hidden position-relative w-100 py-3">
    <div
      :class="['marquee-track d-flex flex-nowrap align-items-center', { 'left': props.direction === 'left', 'right': props.direction === 'right' }]"
      v-bind="$attrs"
      :style="{ animationDuration: props.speed + 's' }"
    >
      <!-- Render slot 2 lần để tạo loop -->
      <div class="d-flex flex-nowrap align-items-center">
        <slot />
      </div>
      <div class="d-flex flex-nowrap align-items-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-marquee {
  background: #fff;
  & img{
    object-fit: contain;
  }
}

.marquee-track {
  display: flex;
  width: max-content;
  &.left {
    animation: marquee-left linear infinite;
  }
  &.right {
    animation: marquee-right linear infinite;
  }
}

.marquee-track:hover {
  animation-play-state: paused;
}

@keyframes marquee-right {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes marquee-left {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0%);
  }
}
.logo-marquee::after{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to right,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0) 90%,
    #ffffff 100%
  );
}
.logo-marquee::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to left,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 10%,
    rgba(255, 255, 255, 0) 90%,
    #ffffff 100%
  );
}
</style>
