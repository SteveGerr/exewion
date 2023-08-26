<template>
  <div :class="['widget', {'green': green, 'purple': purple}]">
    <h4 class="widget__heading">{{ heading }}</h4>
    <div class="widget__data">
      <div class="widget__icon">
        <slot name="icon"></slot>
      </div>
      <div v-if="percent" class="widget__percent">
        <p>{{ percent }}%</p>
      </div>
      <div class="widget__number">
        <p>{{ number }}₮</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  heading: String,
  number: Number,
  percent: Number,
  purple: Boolean,
  green: Boolean
})
</script>

<style lang="scss" scoped>
  .widget {
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    border-radius: 1.5rem;
    background-color: $background-color;
    border: $border-dark-purple;

    &.purple,
    &.green {
      border: none;
    }

    &.purple {
      background-color: $purple;
      box-shadow: 0px 0px 16px 0px rgba(102, 41, 229, 0.70);

      .widget__heading {
        color: $white;
      }

      .widget__number {
        color: $white;
      }

      .widget__symbol {
        fill: $white;
      }
    }

    &.green {
      background-color: $backgroundWidgetGreen;
      box-shadow: 0px 0px 16px 0px rgba(0, 176, 155, 0.70);

      .widget__heading {
        color: $white;
      }

      .widget__number {
        color: $white;
      }

      .widget__symbol {
        fill: $white;
      }
    }

    &__heading {
      margin-bottom: 7px;
      @include text(17px, 17px, 200);
      text-transform: lowercase;
      color: $lilac;
    }

    &__data {
      display: flex;
      justify-content: space-between;
      align-items: center;
      // margin-bottom: 5px;
    }

    &__number {
      display: flex;
      align-items: center;
      @include text(22px, 28px, 600);
      text-shadow: 0px 0px 16px rgba(0, 176, 155, 0.70);
      color: $green;
    }

    &__symbol {
      width: 22px;
      height: 22px;

    }

    &__percent {
      margin: 0 35px 0 5px;
      @include text(17px, 28px, 600);
      text-shadow: 0px 0px 16px rgba(0, 176, 155, 0.70);
      color: $white;
    }

    &__icon {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 0 10px 0 0;
    }
  }
</style>
