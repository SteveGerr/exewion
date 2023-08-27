<template>
  <div :class="['sidebar-item', {'active': active}]">
    <div class="sidebar-item__icon">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  active: Boolean
})
</script>
<style lang="scss" scoped>
.sidebar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 30px;
  margin: 8px 0;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    margin: 8px;
  }

  &.active {
    &:after {
      content: '';
      position: absolute;
      left: -20px;
      top: 0;
      bottom: 0;
      right: -25px;
      background: linear-gradient(270deg, #6024DE 0%, #7B37FF 100%);
      border-radius: 0px 20px 20px 0px;
      z-index: 1;

      @media screen and (max-width: 768px) {
        transform: rotate(90deg) translateY(3px);
      }
    }
  }

  &__icon {
    width: 100%;
    max-width: 25px;
    height: 25px;
    object-fit: contain;
    z-index: 2;
  }
}
</style>
