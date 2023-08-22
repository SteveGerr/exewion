<template>
  <div class="badge">
    <div class="badge__name">
      <slot></slot>
    </div>
    <AppButton class="badge__close" @onClick="onClose" transparent>
      <img :src="cross" alt="">
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/buttons/AppButton.vue'
import cross from '@/assets/svg/cross.svg'

const onClose = () => {
  console.log('Close')
}
</script>

<style lang="scss" scoped>
  .badge {
    display: flex;
    justify-content:flex-start;
    align-items: center;
    padding: 13px;
    background-color: $lilac-back;
    border-radius: 10px;

    &__name {
      margin: 0 5px 0 0;
      @include text(14px, normal, 600);
      letter-spacing: 0.325px;
      white-space: nowrap;
      color: $white;
    }

    &__close {
      width: 15px;
      height: 15px;
      position: relative;

      img {
        position: absolute;
      }
    }
  }
</style>
