<template>
    <li class="notice" @click.stop="$emit('remove')">
      <AppButton
        class="notice__close"
        transparent
        >
        <CrossNotice class="notice__close-svg" />
      </AppButton>
      <div class="notice__status">
        <NoticeDotGreenIcon v-if="status" />
        <NoticeDotOrangeIcon v-if="!status" />
      </div>
      <slot></slot>
    </li>
</template>

<script setup>
import { defineProps } from 'vue'
import AppButton from '@/components/buttons/AppButton.vue'
import CrossNotice from '@/components/icons/CrossNotice.vue'
import NoticeDotGreenIcon from '@/components/icons/NoticeDotGreenIcon.vue'
import NoticeDotOrangeIcon from '@/components/icons/NoticeDotOrangeIcon.vue'

defineProps({
  status: Boolean
})

</script>
<style lang="scss" scoped>
  .notice {
    display: flex;
    align-items: center;
    width: 260px;
    padding: 15px 15px 15px 13px;
    @include text(13px, normal, 500);
    color: $white;
    text-transform: none;
    text-align: left;
    white-space: normal;
    background: $purple-middle;
    border-radius: 10px;
    position: relative;
    z-index: 100;

    &::after {
      content: '';
      width: 19px;
      height: 19px;
      background-color: $purple-middle;
      position: absolute;
      top: -6px;
      right: 30px;
      transform: rotate(226deg);
    }

    &__close {
      width: 7px;
      height: 7px;
      position: absolute;
      top: 7px;
      right: 7px;
      pointer-events: none;
    }

    &__status {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 3px 0 0;
    }
  }
</style>
