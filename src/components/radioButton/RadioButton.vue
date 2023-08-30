<template>
  <label :for="id" class="checkbox-button">
    <input
      :id="id"
      type="radio"
      name="chx"
      :checked="checked"
      @change="onChange"
      :value="value"
      >
    <div class="checkbox-button__body">
      <slot></slot>
    </div>
  </label>
</template>
<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  checked: Boolean,
  id: Number || String,
  name: String,
  value: String
})

const emit = defineEmits(['onChange'])
const onChange = (e) => {
  emit('onChange', e)
}
</script>

<style lang="scss" scoped>
  .checkbox-button {

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 35px;
      background-color: $background-color;
      border: $border-dark-purple;
      border-radius: 10px;
      cursor: pointer;
    }

    input {
      display: none;
      width: 0;
      height: 0;
      position: absolute;
      top: 0;
      left: 0;

      &:checked ~ .checkbox-button__body {
        border: 2px solid $green;
        box-shadow: 0px 0px 8px 0px rgba(1, 176, 156, 0.70);
      }
    }
  }
</style>
