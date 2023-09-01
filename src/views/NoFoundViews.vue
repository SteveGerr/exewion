<template>
  <div class="not-found-page">
    <h1>404 not found</h1>
  </div>
</template>
<style lang="scss" scoped>
  .not-found-page {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    h1 {
      @include text(20px, normal, 600);
      color: $white;
    }
  }
</style>
