<template>
  <span :style="{ height, width: computedWidth }" class="skeletonBox"></span>
</template>

<script>
export default {
  props: {
    maxWidth: {
      default: 100,
      type: Number
    },
    minWidth: {
      default: 80,
      type: Number
    },
    height: {
      default: "18px",
      type: String
    },
    width: {
      default: null,
      type: String
    }
  },
  computed: {
    computedWidth() {
      return (
        this.width ||
        `${Math.floor(
          Math.random() * (this.maxWidth - this.minWidth) + this.minWidth
        )}px`
      );
    }
  }
};
</script>

<style scoped>
.skeletonBox {
  display: inline-block;
  vertical-align: middle;
  background-color: #dddbdd;
  position: relative;
  overflow: hidden;
}
.skeletonBox::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateX(-100%);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.2) 20%,
    rgba(255, 255, 255, 0.5) 60%,
    rgba(255, 255, 255, 0)
  );
  animation: shimmer 5s infinite;
  content: "";
}
@keyframes shimmer {
  100% {
    transform: translateX(100%);
  }
}
</style>
