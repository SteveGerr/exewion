<template>
  <div :class="['progress-bar', {'simple': simple}]">
    <div
      class="progress-bar__fill"
      :style="[{'width': `${props.value}%`}]"
      >
    </div>
    <div v-if="!simple" class="progress-bar__percent">{{ percent }}%/100%</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  value: Number,
  simple: Boolean,
  percent: {
    type: Number,
    default: 50
  }
})

</script>
<style lang="scss" scoped>
.progress-bar {
  display: flex;
  width: 100%;
  height: 72px;
  position: relative;
  border-radius: 100px;
  overflow: hidden;
  background-color: $lilac-back;

  &.simple {
    height: 4px;
  }

  &__fill {
    background: $green;
    box-shadow: 0px 0px 16px 0px $green;
  }

  &__percent {
    width: 330px;
    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 175px);
    @include text(30px, normal, 600);
    letter-spacing: 0.325px;
    color: $white;
    text-align: center;
  }
}
</style>
