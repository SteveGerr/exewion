<template>
  <div class="start">
      <div class="start__wrapper">
        Step 2
      </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 710px;
    height: 100%;
    color: $gray;

    &__rocket {
      width: 51px;
      height: 73px;
      margin: 0 0 35px 0;
    }

    &__button {
      max-width: 239px;
      font-size: 30px;
      margin: 0 0 10px 0;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: auto 0;
    }

    &__link {
      flex: 15px;
      color: $lilac-light;
    }

    &__steps {
      margin: 0 0 23px 0;
    }
  }

</style>
