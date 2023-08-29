<template>
  <div class="badge">
    <div class="badge__name">
      <slot></slot>
    </div>
    <AppButton class="badge__close" @onClick="$emit('remove')" transparent>
      <CrossIcon class="badge__close-icon" />
    </AppButton>
  </div>
</template>

<script setup>
import AppButton from '@/components/buttons/AppButton.vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'

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
    }

    &__close-icon {
      position: absolute;
    }
  }
</style>
