<template>
  <input
    class="range"
    :value="modelValue"
    @input="updateValue"
    type="range"
    :min="0"
    :max="100"
  />
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  modelValue: String,
  min: Number,
  max: Number
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
  $trackHeight: 6px;
  $thumbRadius: 6px;

  position: relative;
  appearance: none;
  border-radius: 999px;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: $lilac-back;
    pointer-events: none;
    border-radius: 999px;
  }

  &::-webkit-slider-runnable-track {
    appearance: none;
    background: $lilac-back;
    height: $trackHeight;
    border-radius: 999px;
  }

  &::-moz-range-track {
    appearance: none;
    background: $lilac-back;
    height: $trackHeight;
    border-radius: 999px;
  }

  &::-webkit-slider-thumb {
    position: relative;
    top: 50%;
    transform: translate(0, -50%);
    width: $thumbRadius;
    height: 25px;
    background: $green;
    border-radius: 999px;
    box-shadow: 0px 0px 16px rgba(72, 174, 154, 0.70);
    pointer-events: all;
    appearance: none;
    z-index: 1;
    cursor: pointer;
  }
}

</style>
