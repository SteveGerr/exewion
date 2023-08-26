<template>
 <h2
  :class="['heading', {'uppercase': uppercase}]"
  >
  <slot></slot>
 </h2>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  uppercase: Boolean
})
</script>

<style lang="scss" scoped>
  .heading {
    width: fit-content;
    margin: 0 0 6px 0;
    position: relative;
    @include text(17px, 28px, 400);
    color: $white;

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background-color: $green-line;
      box-shadow: (0px 0px 10px #01B09B);
    }

    &.uppercase {
      text-transform: uppercase;
    }
  }
</style>
