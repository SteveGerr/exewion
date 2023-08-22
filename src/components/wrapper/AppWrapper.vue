<template>
  <div class="app-wrapper">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .app-wrapper {
    display: flex;
    padding: 8px 12px;
    border-radius: 1.5rem;
    background-color: $background-color;
  }
</style>
