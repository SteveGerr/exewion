<template>
  <div class="circle-count">
    <div class="circle-count__wrap">
      <p class="circle-count__value">{{ value }}</p>
      <p class="circle-count__text">монет</p>
    </div>
    <CircleCountIcon class="circle-count__img" />
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import CircleCountIcon from '@/components/icons/CircleCountIcon.vue'

defineProps({
  value: Number
})
</script>
<style lang="scss" scoped>
.circle-count {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 142px;
  background-color: transparent;
  border-radius: 50%;
  position: relative;

  &__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    z-index: 2;
  }

  &__text,
  &__value {
    @include text(17px, 19px, 600);
    color: $white;
  }
}
</style>
