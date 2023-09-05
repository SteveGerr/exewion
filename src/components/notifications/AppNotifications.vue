<template>
  <ul v-if="show" class="notifications">
    <slot></slot>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  show: Boolean
})

</script>
<style lang="scss" scoped>
  .notifications {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 300px;
    gap: 10px;
  }

</style>
