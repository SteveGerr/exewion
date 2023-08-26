<template>
  <div class="range">
    <input
      class="range__input"
      :value="modelValue"
      @input="updateValue"
      type="range"
      :min="min"
      :max="max"
      :step="step"
    />
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: Number,
  min: Number,
  max: Number,
  step: Number
})

const emit = defineEmits(['update:modelValue'])

// eslint-disable-next-line no-undef
const updateValue = (e) => {
  const el = e.target
  emit('update:modelValue', el.value)
}
</script>
<style lang="scss" scoped>
.range {
  width: 100%;

  &__input {
    $trackHeight: 6px;
    $thumbRadius: 6px;

    width: 100%;
    position: relative;
    appearance: none;
    border-radius: 10px;
    z-index: 0;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: $lilac-back;
      pointer-events: none;
      border-radius: 10px;
    }

    &::-webkit-slider-runnable-track {
      appearance: none;
      background: $lilac-back;
      height: $trackHeight;
      border-radius: 10px;
      outline: none;
    }

    &::-moz-range-track {
      appearance: none;
      background: $lilac-back;
      height: $trackHeight;
      max-height: $trackHeight;
      border-radius: 10px;
      outline: none;
    }

    &::-webkit-slider-thumb {
      position: relative;
      top: 50%;
      transform: translate(0, -50%);
      width: $thumbRadius;
      height: 25px;
      background: $green;
      border-radius: 10px;
      box-shadow: 0px 0px 16px rgba(72, 174, 154, 0.70);
      pointer-events: all;
      appearance: none;
      z-index: 1;
      cursor: pointer;
    }
  }
}

</style>
