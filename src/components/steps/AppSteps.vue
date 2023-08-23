<template>
  <div class="steps">
    <div :class="['steps__item', {'previous': current > 1, 'current': current === 1}]">Шаг 1</div>
    <div :class="['steps__line', {'current': current > 1}]"></div>
    <div :class="['steps__item', {'previous': current > 2, 'current': current === 2}]">Шаг 2</div>
    <div :class="['steps__line', {'current': current > 2}]"></div>
    <div :class="['steps__item', {'previous': current > 3, 'current': current === 3}]">Шаг 3</div>
    <div :class="['steps__line', {'current': current > 3}]"></div>
    <div :class="['steps__item', {'current': current === 4}]">Шаг 4</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  current: Boolean
})
</script>

<style lang="scss" scoped>
  .steps {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;

    &__item {
      @include text(17px, normal, 600);
      letter-spacing: 0.325px;
      color: $lilac-light;
      white-space: nowrap;

      &.current {
        color: $white;
      }

      &.previous {
        color: $green;
      }
    }

    &__line {
      display: flex;
      width: 100%;
      max-width: 100px;
      height: 2px;
      margin: 0 20px;
      background-color: $lilac-light;

      &.current {
        background-color: $green;
      }
    }
  }
</style>
