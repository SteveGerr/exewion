<template>
  <div class="start">
    <div class="start__wrapper">
      <StepStart></StepStart>
      <StepTwo></StepTwo>
      <StepThree></StepThree>
      <StepFour></StepFour>
    </div>
  </div>
</template>

<script setup>
import StepStart from '@/components/steps/StepStart.vue'
import StepTwo from '@/components/steps/StepTwo.vue'
import StepThree from '@/components/steps/StepThree.vue'
import StepFour from '@/components/steps/StepFour.vue'

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
