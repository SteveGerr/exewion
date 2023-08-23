<template>
  <a
    class="app-link"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    >
    <slot></slot>
    </a>
</template>
<script setup>
import { defineProps } from 'vue'

defineProps({
  href: String
})

</script>
<style lang="scss" scoped>
  .app-link {
    @include text(16px, 28px, 400);
    color: $lilac;
    text-transform: none;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
