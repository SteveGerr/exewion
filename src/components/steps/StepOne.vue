<template>
  <div class="first-step">
      <div class="first-step__wrapper">
        <img class="first-step__rocket" :src="Rocket" alt="">
        <AppButton class="first-step__button" @on-click="changeStep" ultra-large green>start</AppButton>
        <AppLink class="first-step__link">How to earn?</AppLink>
      </div>
  </div>
</template>

<script setup>
import { useStepsStore } from '@/store/store'
import AppButton from '@/components/buttons/AppButton.vue'
import Rocket from '@/assets/svg/rocket.svg'
import AppLink from '@/components/links/AppLink.vue'

const store = useStepsStore()

const { changeStep } = store

</script>

<style lang="scss">
  .first-step {
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
