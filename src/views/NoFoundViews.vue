<template>
  <div class="not-found-page">
    <LogoIcon />
    <h1>404 not found</h1>
  </div>
</template>
<script setup>
import LogoIcon from '@/components/icons/LogoIcon.vue'
</script>
<style lang="scss" scoped>
  .not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
      margin: 30px 0;
      @include text(20px, normal, 600);
      color: $white;
    }

  }
</style>
