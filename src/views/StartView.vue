<template>
  <AppWrapper class="start">
      <div class="start__wrapper">
        <StepOne v-if="currentStep === 1"></StepOne>
        <StepTwo v-if="currentStep === 2"></StepTwo>
        <StepThree v-if="currentStep === 3"></StepThree>
        <StepFour v-if="currentStep === 4"></StepFour>
      </div>
      <AppSteps class="start__steps" :current="currentStep"></AppSteps>
  </AppWrapper>
</template>

<script setup>
import { useStepsStore } from '@/store/store'
import { storeToRefs } from 'pinia'
import StepOne from '@/components/steps/StepOne.vue'
import StepTwo from '@/components/steps/StepTwo.vue'
import StepThree from '@/components/steps/StepThree.vue'
import StepFour from '@/components/steps/StepFour.vue'
import AppSteps from '@/components/steps/AppSteps.vue'
import AppWrapper from '@/components/wrapper/AppWrapper.vue'

const store = useStepsStore()

const { currentStep } = storeToRefs(store)

</script>

<style lang="scss">
  .start {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 715px;
    height: 100%;

    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }

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
      height: 100%;
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
